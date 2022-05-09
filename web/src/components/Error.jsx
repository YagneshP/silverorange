import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="container mx-auto bg-white h-50">
      <h2 className="text-red-400">{message}</h2>
    </div>
  );
};

export default Error;
