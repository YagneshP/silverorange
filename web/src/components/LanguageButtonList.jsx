import React from 'react';

const LanguageButtonList = ({ languageList, setLanguageFilter }) => {
  const buttonList = languageList
    ? languageList.map((lang) => (
        <li key={lang}>
          <button
            className="border rounded-full px-4 py-1 bg-slate-400 text-black"
            onClick={(e) => setLanguageFilter(lang)}
          >
            {lang}
          </button>
        </li>
      ))
    : null;
  return (
    <ul className="flex justify-evenly mt-2">
      {languageList && (
        <li>
          <button
            className="border rounded-full px-4 py-1 bg-slate-400 text-black"
            onClick={(e) => setLanguageFilter('all')}
          >
            All
          </button>
        </li>
      )}
      {buttonList}
    </ul>
  );
};

export default LanguageButtonList;
