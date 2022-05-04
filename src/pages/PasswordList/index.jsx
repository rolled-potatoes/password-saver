import React, { useEffect } from 'react';
import useInfo from 'hooks/useInfo';
import DefaultLayout from 'layout';
import PasswordListItem from './components/PasswordListItem';
import myCrypt from 'libs/Crypt';
import Row2 from './components/Row2';
import copy from 'libs/copy';
import notionClient from 'libs/NotionClient';
import * as Styled from './style';

function MainPage() {
  const { info, fetchInfo } = useInfo();
  useEffect(() => {
    fetchInfo();
  }, []);

  const parseNotionIdByDataset = (e) => {
    let dataset = e.target.dataset;
    let element = e.target;

    while (Object.keys(dataset).length === 0) {
      if (element === e.currentTarget) return;
      element = element.parentNode;
      dataset = element.dataset;
    }

    const { notionId } = dataset;

    return notionId;
  };

  const $passwordTableListItemClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const notionId = parseNotionIdByDataset(e);
    if (!notionId) return;

    const targetItem = info.find((p) => p.notionId === notionId);
    if (!targetItem) return;

    const result = myCrypt.decrypt(targetItem.password);
    copy(result);
    alert('복사되었습니다.');
  };

  const $handleClickRemoveButton = async ({ pageId }) => {
    try {
      await notionClient.removePasswordListItem({ pageId });
      alert('정상삭제 되었습니다.');
      fetchInfo();
    } catch (e) {
      console.error(e);
      alert('에러 발생 !');
    }
  };

  const PasswordListItemComponents = info.map((item) => (
    <PasswordListItem
      {...item}
      key={item.notionId}
      removeHanlder={$handleClickRemoveButton}
    />
  ));

  return (
    <DefaultLayout>
      <Styled.Main>
        <Row2 text="사이트" text2="아이디" />
        <div onClick={$passwordTableListItemClick}>
          {PasswordListItemComponents}
        </div>
      </Styled.Main>
    </DefaultLayout>
  );
}

export default MainPage;
