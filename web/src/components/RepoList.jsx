import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  const repoList = repos
    ? repos.map((repo) => <RepoItem key={repo.name} repo={repo} />)
    : 'Nothing to display';
  return (
    <div className="flex flex-col items-start p-3 space-y-3">{repoList}</div>
  );
};

export default RepoList;
