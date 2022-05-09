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
    <section className="container mx-auto mt-2">
      <div className="flex justify-evenly">
        <div>
          <h2 className="text-gray-500 font-medium ">
            <span className="text-black font-bold">Author : </span>
            {recentCommit?.commit.author.name}
          </h2>
          <p className="text-gray-500 font-medium ">
            <span className="text-black font-bold">Message :</span>{' '}
            {recentCommit?.commit.message}
          </p>
          <p className="text-gray-500 font-medium ">
            <span className="text-black font-bold">Date :</span>{' '}
            {recentCommit?.commit.author.date}
          </p>
        </div>
        <button
          className="border rounded-full px-4 h-10 bg-sky-500 text-white"
          onClick={() => setSelectedRepo(null)}
        >
          Back
        </button>
      </div>

      {markdown && (
        <div className="flex flex-col items-center">
          <h1 className="text-black font-bold text-2xl py-4">
            Markdown Content
          </h1>
          <p>{markdown}</p>
        </div>
      )}
    </section>
  );
};

export default SelectedRepo;
