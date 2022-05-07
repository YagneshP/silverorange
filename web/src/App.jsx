import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import RepoList from './components/RepoList';

export function App() {
  const [repos, setRepos] = React.useState(null);
  React.useEffect(() => {
    axios('/repos')
      .then((response) => {
        setRepos(response.data);
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
