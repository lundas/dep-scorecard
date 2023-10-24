import React from 'react';

export default function ScoreCardEntry({ dependency }) {
  return (
    <>
      <div>
        Package:
        {' '}
        {dependency[0] ? dependency[0].versionKey.name : 'No Data'}
      </div>
      <div>
        Score:
        {' '}
        {dependency[1] ? dependency[1].score : 'No Data'}
      </div>
    </>
  );
}
