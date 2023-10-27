import React from 'react';

export default function ScorecardEntryScore({ dependency }) {
  return (
    <div className="flex flex-col flex-wrap justify-evenly">
      <h2 className="text-3xl font-diph text-center">OSSF Score</h2>
      <div>{dependency.scorecard ? dependency.scorecard.score : 'N/A'}</div>
    </div>
  );
}
