import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  //sorting repos according to created date
  repos?.sort(
    (repo1, repo2) => new Date(repo2.created_at) - new Date(repo1.created_at)
  );
  const repoList = repos
    ? repos.map((repo) => <RepoItem key={repo.name} repo={repo} />)
    : 'Nothing to display';
  return (
    <div className="flex flex-col items-start p-3 space-y-3">{repoList}</div>
  );
};

export default RepoList;
