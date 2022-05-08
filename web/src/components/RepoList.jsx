import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  const [languageFilter, setLanguageFilter] = React.useState(null);
  const [filteredRepos, setFilteredRepos] = React.useState(null);
  React.useEffect(() => {
    if (repos) {
      setFilteredRepos(repos);
    }
  }, [repos]);
  React.useEffect(() => {
    // filter repos according to language
    if (languageFilter && repos) {
      const filtered = repos.filter((repo) => repo.language === languageFilter);
      setFilteredRepos(filtered);
    }
  }, [languageFilter, repos]);
  const repoList = filteredRepos
    ? filteredRepos.map((repo) => (
        <RepoItem
          key={repo.name}
          repo={repo}
          setLanguageFilter={setLanguageFilter}
        />
      ))
    : 'Nothing to display';
  return (
    <div className="flex flex-col items-start p-3 space-y-3">{repoList}</div>
  );
};

export default RepoList;
