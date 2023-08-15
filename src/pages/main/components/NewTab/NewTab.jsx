import React from 'react';
import * as styles from './style';
import GapBox from 'components/GapBox';
import Button from 'components/Button';
import LabelInput from 'components/LabelInput';

const NewTab = (props) => {
  return (
    <styles.NewTab>
      <GapBox gap={12}>
        <LabelInput size="md" label="이름" id="name" />
        <LabelInput size="md" label="계정" id="user_id" />
        <LabelInput size="md" label="비밀번호" id="password" />
        <GapBox row gap={8} className="buttonGroup">
          <Button color="danger" size="sm">
            리셋
          </Button>
          <Button color="primary" size="sm">
            저장
          </Button>
        </GapBox>
      </GapBox>
    </styles.NewTab>
  );
};

export default NewTab;
