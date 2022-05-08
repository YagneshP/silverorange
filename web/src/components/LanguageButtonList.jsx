import React from 'react';

const LanguageButtonList = ({ languageList }) => {
  const buttonList = languageList
    ? languageList.map((lang) => (
        <li key={lang}>
          <button className="border rounded-full px-4 py-1 bg-slate-400 text-black">
            {lang}
          </button>
        </li>
      ))
    : null;
  return (
    <ul className="flex justify-evenly mt-2">
      {languageList && (
        <li>
          <button className="border rounded-full px-4 py-1 bg-slate-400 text-black">
            All
          </button>
        </li>
      )}
      {buttonList}
    </ul>
  );
};

export default LanguageButtonList;
