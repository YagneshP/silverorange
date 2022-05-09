import axios from 'axios';
import React from 'react';

const SelectedRepo = ({
  repo,
  setSelectedRepo,
  loading,
  handleError,
  error,
}) => {
  const [repoState, setRepoState] = React.useState({
    recentCommit: null,
    markdown: null,
  });

  React.useEffect(() => {
    const commitPromise = axios(
      `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits/master`
    );
    const markdownPromise = axios(
      `https://raw.githubusercontent.com/${repo.full_name}/master/README.md`
    );
    Promise.all([commitPromise, markdownPromise])
      .then((res) => {
        handleError('');
        const recentCommit = res[0].data;
        const markdown = res[1].data;
        setRepoState((prev) => ({ ...prev, recentCommit, markdown }));
      })
      .catch((err) => handleError(err.message));
  }, [repo, handleError]);
  return (
    <>
      {loading && !error ? (
        <h1>Loading...</h1>
      ) : (
        <section className="container mx-auto mt-2">
          <div className="flex justify-evenly">
            <div>
              <h2 className="text-gray-500 font-medium ">
                <span className="text-black font-bold">Author : </span>
                {repoState.recentCommit?.commit.author.name}
              </h2>
              <p className="text-gray-500 font-medium ">
                <span className="text-black font-bold">Message :</span>{' '}
                {repoState.recentCommit?.commit.message}
              </p>
              <p className="text-gray-500 font-medium ">
                <span className="text-black font-bold">Date :</span>{' '}
                {repoState.recentCommit?.commit.author.date}
              </p>
            </div>
            <button
              className="border rounded-full px-4 h-10 bg-sky-500 text-white"
              onClick={() => setSelectedRepo(null)}
            >
              Back
            </button>
          </div>

          {repoState.markdown && (
            <div className="flex flex-col items-center">
              <h1 className="text-black font-bold text-2xl py-4">
                Markdown Content
              </h1>
              <p>{repoState.markdown}</p>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default SelectedRepo;
