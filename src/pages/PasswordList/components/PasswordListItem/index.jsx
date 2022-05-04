import React from 'react';
import { Link } from 'react-router-dom';
import Row2 from '../Row2';
import * as Styled from './styled';

const PasswordListItem = (props) => {
  const { site, id, notionId, removeHanlder } = props;
  const handleClickRemove = () => removeHanlder({ pageId: notionId });

  return (
    <>
      <Row2 text={site} text2={id} />
      <Styled.ButtonContainer>
        <button className="normal box" type="button" data-notion-id={notionId}>
          복사
        </button>
        <Link
          to={{
            pathname: '/create',
            state: {
              isModify: true,
              pageId: notionId,
              site,
              id,
            },
          }}
          className="normal box"
        >
          수정
        </Link>
        <button
          className="waring box"
          type="button"
          onClick={handleClickRemove}
        >
          삭제
        </button>
      </Styled.ButtonContainer>
    </>
  );
};

export default PasswordListItem;
