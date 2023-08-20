import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as gist from 'libs/octokit/gist';
import keys from './keys';

export const useGist = ({ gistId, options = {} } = {}) => {
  const query = useQuery(
    keys.id(gistId),
    () => gist.getGist(gistId).then((res) => res.data),
    options,
  );

  return query;
};

export const useGistUpdate = ({ gistId, options = {} } = {}) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ files, description }) =>
      gist.updateGist({
        gist_id: gistId,
        files,
        description,
      }),
    {
      ...options,
      onSuccess: () => {
        queryClient.invalidateQueries(keys.id(gistId));
        options.onSuccess && options.onSuccess();
      },
    },
  );

  return mutation;
};
