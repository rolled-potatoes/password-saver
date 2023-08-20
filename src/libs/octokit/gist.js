import { octokit } from '.';

export const getGistList = () => {
  return octokit.rest.gists.list({
    per_page: 100,
  });
};

export const getGist = (gistId) => {
  return octokit.rest.gists.get({
    gist_id: gistId,
  });
};

export const updateGist = ({ gist_id, files, description } = {}) => {
  return octokit.rest.gists.update({
    gist_id,
    files,
    description,
  });
};

export const createGist = ({ description, files, isPublic } = {}) => {
  return octokit.rest.gists.create({
    description,
    files,
    public: isPublic,
  });
};
