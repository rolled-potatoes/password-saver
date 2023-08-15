import React from 'react';
import * as styles from './style';
import Label from 'components/Label';
import Input from 'components/Input';
import GapBox from 'components/GapBox';

const LabelInput = (props) => {
  const { id, label, ...rest } = props;

  return (
    <styles.LabelInput>
      <GapBox gap={4}>
        <Label for={id}>{label}</Label>
        <Input id={id} {...rest} />
      </GapBox>
    </styles.LabelInput>
  );
};

export default LabelInput;
