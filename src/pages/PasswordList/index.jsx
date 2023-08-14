import React from 'react';
import Button from 'components/Button';

const size = ['xl', 'md', 'sm'];
const color = ['primary', 'danger', 'link'];

function MainPage() {
  return (
    <div>
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
    </div>
  );
}

export default MainPage;
