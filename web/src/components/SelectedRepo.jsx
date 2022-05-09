import axios from 'axios';
import React from 'react';

const SelectedRepo = ({ repo, setSelectedRepo }) => {
  const [recentCommit, setRecentCommit] = React.useState(null);
  React.useEffect(() => {
    axios(
      `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits/master`
    )
      .then((res) => setRecentCommit(res.data))
      .catch((err) => console.log('err', err));
  }, [repo]);

  return (
    <section>
      <h2>Author : {recentCommit?.commit.author.name}</h2>
      <p>Message : {recentCommit?.commit.message}</p>
      <p>Date : {recentCommit?.commit.author.date}</p>
      <button onClick={() => setSelectedRepo(null)}> Back </button>
    </section>
  );
};

export default SelectedRepo;
