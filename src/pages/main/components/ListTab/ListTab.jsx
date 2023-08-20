import React from 'react';
import { useGist, useGistUpdate } from 'hooks/useGist';

import GapBox from 'components/GapBox';
import ListUnit from '../ListUnit';

import * as styles from './style';

const ListTab = () => {
  const query = useGist({
    gistId: process.env.REACT_APP_GIST_ID,
  });

  const updateMutation = useGistUpdate({
    gistId: process.env.REACT_APP_GIST_ID,
    options: {
      onSuccess: () => {
        alert('remove success');
      },
    },
  });

  const content = JSON.parse(query.data.files.pw.content);
  const contentArray = Object.entries(content);

  const removeItem = (targetName) => () => {
    const nextContent = contentArray
      .filter((content) => content[0] !== targetName)
      .reduce((acc, cur) => {
        const [name, value] = cur;

        return {
          ...acc,
          [name]: value,
        };
      }, {});

    updateMutation.mutate({
      files: {
        pw: {
          content: JSON.stringify(nextContent),
        },
      },
    });
  };

  return (
    <styles.ListTab>
      <GapBox gap={12}>
        {contentArray.map(([name, value]) => {
          const { id, pw } = value;
          return (
            <ListUnit
              key={name}
              name={name}
              id={id}
              pw={pw}
              removeItem={removeItem(name)}
            />
          );
        })}
      </GapBox>
    </styles.ListTab>
  );
};

export default ListTab;
