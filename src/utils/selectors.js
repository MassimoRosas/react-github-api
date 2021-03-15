// eslint-disable-next-line import/prefer-default-export
export const getReposByFullName = (repos, inputSearch) => {
  const filteredRepos = repos;

  if (inputSearch.trim().length > 0) {
    return repos.filter((repo) => repo.full_name.includes(inputSearch));
  }

  return filteredRepos;
};
