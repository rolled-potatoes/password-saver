import React from 'react';
import {useHistory} from 'react-router-dom'
import * as styles from './style';
import Label from 'components/Label';
import Button from 'components/Button';
import Divider from 'components/Divider';
import GapBox from 'components/GapBox';
import crypto from 'libs/Crypt';
import copy from 'libs/copy';

const LabelGroup = ({ label, text }) => {
  return (
    <GapBox gap={4}>
      <Label>{label}</Label>
      <span>{text}</span>
    </GapBox>
  );
};
const ListUnit = (props) => {
  const history = useHistory();
  const { name, id, pw, removeItem } = props;

  const handleClickCopy = () => {
    const password = crypto.decrypt(pw);
    copy(password);
    alert('password copyed');
  };

  const handleClickCopyId = () => {
    copy(id);
    alert('id copyed');
  };

  const handleClickRemove = () => {
    const isOk = window.confirm('지우겠습니까?');
    if (!isOk) return;

    removeItem();
  };

  const handleClickEdit = ()=>{
    history.push(`/new/${name}`)
  }

  return (
    <styles.ListUnit>
      <GapBox gap={8}>
        <GapBox gap={4}>
          <div onClick={handleClickCopy}>
            <LabelGroup label={'이름'} text={name} />
          </div>
          <div onClick={handleClickCopyId}>
            <LabelGroup label={'계정'} text={id} />
          </div>
          <GapBox row gap={10}>
            <Button color="primary" size="sm" onClick={handleClickEdit}>
              수정
            </Button>
            <Button color="danger" size="sm" onClick={handleClickRemove}>
              삭제
            </Button>
          </GapBox>
        </GapBox>
        <Divider />
      </GapBox>
    </styles.ListUnit>
  );
};

export default ListUnit;
