import React from 'react';
import { useParams } from 'react-router-dom';
import { useGist, useGistUpdate } from 'hooks/useGist';
import { useForm } from 'react-hook-form';

import * as styles from './style';
import GapBox from 'components/GapBox';
import Button from 'components/Button';
import LabelInput from 'components/LabelInput';
import { BackdropLoaderContext } from 'components/BackdropLoader';

import crypto from 'libs/Crypt';

const Form = ({ content }) => {
  const { toggleVisible } = BackdropLoaderContext.useBackdrop();
  const { name } = useParams();
  const target = name && Object.entries(content).find((c) => c[0] === name);
  const methods = useForm({
    ...(!!name &&
      target && {
        defaultValues: {
          name,
          userId: target[1]?.id ?? '',
        },
      }),
  });

  const updateMutation = useGistUpdate({
    gistId: process.env.REACT_APP_GIST_ID,
    options: {
      onMutate: () => {
        toggleVisible();
      },
      onSuccess: () => {
        alert('create success');
        methods.reset();
      },
      onSettled: () => {
        toggleVisible();
      },
    },
  });

  const inputName = methods.watch('name');
  const isExist = Object.keys(content).includes(inputName);

  const handleSubmit = (data) => {
    if (isExist) {
      const response = window.confirm(
        '중복된 이름이 있습니다.\n덮어쓰겠습니까?',
      );
      if (!response) return;
    }

    const nextContent = JSON.stringify({
      ...content,
      [data.name]: {
        id: data.userId,
        pw: crypto.encrypt(data.password),
      },
    });

    updateMutation.mutate({
      files: {
        pw: {
          content: nextContent,
        },
      },
    });
  };
  const handleClickReset = () => {
    methods.reset();
  };

  const saveButtonText = isExist ? '수정' : '저장';

  return (
    <form onSubmit={methods.handleSubmit(handleSubmit)}>
      <GapBox gap={12}>
        <LabelInput
          size="md"
          label="이름"
          id="name"
          {...methods.register('name', {
            required: true,
          })}
        />
        <LabelInput
          size="md"
          label="계정"
          id="user_id"
          {...methods.register('userId', {
            required: true,
          })}
        />
        <LabelInput
          size="md"
          label="비밀번호"
          id="password"
          {...methods.register('password', {
            required: true,
          })}
        />
        <GapBox row gap={8} className="buttonGroup">
          <Button
            type="button"
            onClick={handleClickReset}
            color="danger"
            size="sm"
          >
            리셋
          </Button>
          <Button color="primary" size="sm" type="submit">
            {saveButtonText}
          </Button>
        </GapBox>
      </GapBox>
    </form>
  );
};

const NewTab = () => {
  const query = useGist({
    gistId: process.env.REACT_APP_GIST_ID,
  });
  const content = JSON.parse(query.data.files.pw.content);

  return (
    <styles.NewTab>
      <Form content={content} />
    </styles.NewTab>
  );
};

export default NewTab;
