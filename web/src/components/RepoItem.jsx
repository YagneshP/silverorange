import React from 'react';

const RepoItem = ({ repo, setLanguageFilter }) => {
  return (
    <li className="flex flex-col p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
      <h3>
        <span>Name : </span>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
      <p>
        <span>Description : </span>{' '}
        {repo.description ? repo.description : 'not provided'}
      </p>
      <p>
        <span>Language : </span>{' '}
        <button onClick={(e) => setLanguageFilter(repo.language)}>
          {repo.language}
        </button>
      </p>
      <p>
        <span>Fork Count : </span> {repo.forks_count}
      </p>
      <p>
        <span>Created At : </span>
        {repo.created_at}
      </p>
    </li>
  );
};

export default RepoItem;
