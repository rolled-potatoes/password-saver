import { Octokit } from 'octokit';

console.log(process.env.REACT_APP_GITHUB_TOKEN)
export const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

