import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import RepoList from './components/RepoList';
import LanguageButtonList from './components/LanguageButtonList';

export function App() {
  const [repos, setRepos] = React.useState(null);
  const [languages, setlanguages] = React.useState(null);
  const [languageFilter, setLanguageFilter] = React.useState(null);
  React.useEffect(() => {
    axios('/repos')
      .then((response) => response.data)
      .then((data) => {
        //languages
        const languageList = [...new Set(data.map((repo) => repo.language))];
        setlanguages(languageList);
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
      <LanguageButtonList
        languageList={languages}
        setLanguageFilter={setLanguageFilter}
      />
      <RepoList repos={repos} languageFilter={languageFilter} />
    </main>
  );
}
