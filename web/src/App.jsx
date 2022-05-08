import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import RepoList from './components/RepoList';

export function App() {
  const [repos, setRepos] = React.useState(null);
  React.useEffect(() => {
    axios('/repos')
      .then((response) => response.data)
      .then((data) => {
        //sort repos according to date
        const sortedRepos = [...data].sort(
          (repo1, repo2) =>
            new Date(repo2.created_at) - new Date(repo1.created_at)
        );
        setRepos(sortedRepos);
      })
      .catch((error) => {
        console.log('Error happened here!');
        console.error(error);
      });
  }, []);

  return (
    <main>
      <RepoList repos={repos} />
    </main>
  );
}
