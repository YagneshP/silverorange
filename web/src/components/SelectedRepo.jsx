import axios from 'axios';
import React from 'react';

const SelectedRepo = ({ repo, setSelectedRepo }) => {
  const [recentCommit, setRecentCommit] = React.useState(null);
  const [markdown, setMarkdown] = React.useState(null);

  React.useEffect(() => {
    axios(
      `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits/master`
    )
      .then((res) => setRecentCommit(res.data))
      .catch((err) => console.log('err', err));
  }, [repo]);

  React.useEffect(() => {
    axios(
      `https://raw.githubusercontent.com/${repo.full_name}/master/README.md`
      // `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits/master`
    )
      .then((res) => setMarkdown(res.data))
      .catch((err) => console.log('err', err));
  }, [repo]);
  return (
    <section>
      <h2>Author : {recentCommit?.commit.author.name}</h2>
      <p>Message : {recentCommit?.commit.message}</p>
      <p>Date : {recentCommit?.commit.author.date}</p>
      <button onClick={() => setSelectedRepo(null)}> Back </button>
      <div>{markdown}</div>
    </section>
  );
};

export default SelectedRepo;
