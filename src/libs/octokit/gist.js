import { octokit } from '.';

const gists = octokit.rest.gists;

export const getGistList = () => {
  return gists.list();
};

export const updateGist = ({ gist_id, files, description } = {}) => {
  return gists.update({
    gist_id,
    files,
    description,
  });
};

export const createGist = ({ description, files, isPublic } = {}) => {
  return gists.create({
    description,
    files,
    public: isPublic,
  });
};
