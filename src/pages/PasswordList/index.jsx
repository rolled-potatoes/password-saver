import React from 'react';
import Button from 'components/Button';
import GapBox from 'components/GapBox';

const size = ['xl', 'md', 'sm'];
const color = ['primary', 'danger', 'link'];

function MainPage() {
  return (
    <GapBox gap={20}>
      {size.map((s) => {
        return color.map((c) => (
          <Button color={c} size={s}>
            Button
          </Button>
        ));
      })}
          <Button disabled>
            Button
          </Button>
    </GapBox>
  );
}

export default MainPage;
