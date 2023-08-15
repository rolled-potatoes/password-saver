import React from 'react';
import * as styles from './style';
import GapBox from 'components/GapBox';
import ListUnit from '../ListUnit';

const ListTab = (props) => {
  return (
    <styles.ListTab>
      <GapBox gap={12}>
        <ListUnit name="name" id="id" />
        <ListUnit name="name" id="id" />
        <ListUnit name="name" id="id" />
        <ListUnit name="name" id="id" />
      </GapBox>
    </styles.ListTab>
  );
};

export default ListTab;
