import React from 'react';

export default function ScoreCardEntry({ dependency }) {
  return (
    <>
      <div>
        This is a ScoreCardEntry;
      </div>
      <div>{dependency.toString()}</div>
    </>
  );
}
