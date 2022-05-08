import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ repos, languageFilter }) => {
  const [filteredRepos, setFilteredRepos] = React.useState(null);
  React.useEffect(() => {
    if (repos) {
      setFilteredRepos(repos);
    }
  }, [repos]);
  React.useEffect(() => {
    // filter repos according to language
    if (languageFilter && repos) {
      if (languageFilter === 'all') {
        setFilteredRepos(repos);
      } else {
        const filtered = repos.filter(
          (repo) => repo.language === languageFilter
        );
        setFilteredRepos(filtered);
      }
    }
  }, [languageFilter, repos]);
  const repoList = filteredRepos
    ? filteredRepos.map((repo) => <RepoItem key={repo.name} repo={repo} />)
    : 'Nothing to display';
  return (
    <div className="flex flex-col items-start p-3 space-y-3">{repoList}</div>
  );
};

export default RepoList;
