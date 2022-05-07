import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';

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
  const repoList = repos
    ? repos.map((repo) => <div key={repo.id}>{repo.name}</div>)
    : 'Nothing to display';
  return <div className="App">{repoList}</div>;
}
