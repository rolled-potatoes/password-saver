import React from 'react';
import * as styles from './style';
import Label from 'components/Label';
import Button from 'components/Button';
import Divider from 'components/Divider';
import GapBox from 'components/GapBox';

const LabelGroup = ({ label, text }) => {
  return (
    <GapBox gap={4}>
      <Label>{label}</Label>
      <span>{text}</span>
    </GapBox>
  );
};
const ListUnit = (props) => {
  const { name, id } = props;

  return (
    <styles.ListUnit>
      <GapBox gap={8}>
        <GapBox gap={4}>
          <LabelGroup label={'이름'} text={name} />
          <LabelGroup label={'계정'} text={id} />
          <GapBox row gap={10}>
            <Button color="primary" size="sm">
              수정
            </Button>
            <Button color="danger" size="sm">
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
