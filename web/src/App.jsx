import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import RepoList from './components/RepoList';
import LanguageButtonList from './components/LanguageButtonList';
import SelectedRepo from './components/SelectedRepo';
import Error from './components/Error';

export function App() {
  const [repos, setRepos] = React.useState(null);
  const [languages, setlanguages] = React.useState(null);
  const [languageFilter, setLanguageFilter] = React.useState(null);
  const [selectedRepo, setSelectedRepo] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    axios('/repos')
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        //Creating list of unique Languages
        const languageList = [...new Set(data.map((repo) => repo.language))];
        setlanguages(languageList);
        //sort repos according to date
        const sortedRepos = [...data].sort(
          (repo1, repo2) =>
            new Date(repo2.created_at) - new Date(repo1.created_at)
        );
        setRepos(sortedRepos);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);
  const handleClick = (repo) => {
    setSelectedRepo(repo);
  };
  const handleError = (message) => {
    setError(message);
  };

  return (
    <main>
      {error ? (
        <Error message={error} />
      ) : loading ? (
        <h1>Loading ....</h1>
      ) : selectedRepo ? (
        <SelectedRepo
          repo={selectedRepo}
          setSelectedRepo={setSelectedRepo}
          handleError={handleError}
          loading={loading}
          error={error}
        />
      ) : (
        <>
          <LanguageButtonList
            languageList={languages}
            setLanguageFilter={setLanguageFilter}
          />
          <RepoList
            repos={repos}
            languageFilter={languageFilter}
            handleClick={handleClick}
          />
        </>
      )}
    </main>
  );
}
