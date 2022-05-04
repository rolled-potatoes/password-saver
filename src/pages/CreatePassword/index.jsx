import React, { useState } from 'react';
import DefaultLayout from '../../layout';
import notionClient from '../../libs/NotionClient';
import Input from './components/Input';
import myCrypto from '../../libs/Crypt';
import { Main } from './style';
import { useLocation } from 'react-router';

const title = ['SITE', 'ID', 'PASSWORD'];
const initInputValues = title.reduce((acc, cur) => {
  acc[cur] = '';
  return acc;
}, {});

const MainPage = () => {
  const location = useLocation();
  const inputState = location.state
    ? location.state.isModify
      ? {
          SITE: location.state.site,
          ID: location.state.id,
          PASSWORD: '',
        }
      : initInputValues
    : initInputValues;
  const [inputValues, setInputValues] = useState(inputState);

  const $pressKey = ({ key }) => {
    if (!key) return;

    if (key === 'Enter') $submitNotion();
  };

  const $changeInput = ({ target: { id, value } }) => {
    if (!id || inputValues[id] === undefined) return;

    setInputValues(() => ({ ...inputValues, [id]: value }));
  };

  const $submitNotion = async () => {
    const site = inputValues.SITE.trim(),
      id = inputValues.ID.trim(),
      password = myCrypto.encrypt(inputValues.PASSWORD).trim();

    if (site === '' || id === '' || password === '') return alert('모두 입력바람');

    if (location.state && location.state.isModify) {
      modifyItem({ site, id, password });
    } else {
      createNewItem({ site, id, password });
    }
  };

  const modifyItem = async ({ site, id, password }) => {
    try {
      await notionClient.updatePasswordListItem({
        site,
        id,
        password,
        pageId: location.state.pageId,
      });
      alert('수정완료 !');
    } catch (e) {
      console.error(e);
      alert('수정 에러!');
    }
  };

  const createNewItem = async ({ site, id, password }) => {
    const isDuplicate = await checkDuplicate({ site, id });
    if (isDuplicate) return alert('중복된 입력입니다.');
    try {
      await notionClient.addPasswordListItem({ site, id, password });
    } catch (e) {
      return alert('[ERROR] 다시 시도하세요.');
    }
    return alert('등록되었습니다!');
  };

  const checkDuplicate = async ({ site, id }) => {
    const { results } = await notionClient.getPasswordItemBySiteNId({ site, id });

    return results.length !== 0;
  };

  const inputs = title.map((t, i) => (
    <Input
      title={t}
      onPressKey={$pressKey}
      key={t}
      value={inputValues[t]}
      onChange={$changeInput}
    />
  ));

  return (
    <DefaultLayout>
      <Main>
        {inputs}
        <button type="button" onClick={$submitNotion}>
          등록하기!
        </button>
      </Main>
    </DefaultLayout>
  );
};

export default MainPage;
