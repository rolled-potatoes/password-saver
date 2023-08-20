import { useQuery } from 'react-query';
import keys from './keys';
import * as gist from 'libs/octokit/gist';

const useGistList = ({ options } = {}) => {
  const query = useQuery(keys.all, gist.getGistList, options);

  return query;
};

export default useGistList;
