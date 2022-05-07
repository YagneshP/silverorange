import React from 'react';

const RepoItem = ({ repo }) => {
  return (
    <li className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
      <a href={repo.html_url}>{repo.name}</a>
    </li>
  );
};

export default RepoItem;
