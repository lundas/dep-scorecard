import React from 'react';
import ScorecardEntryName from './ScorecardEntryName';
import ScorecardEntryScore from './ScorecardEntryScore';
import ScorecardEntryVersion from './ScorecardEntryVersion';

export default function ScoreCardEntry({ dependency }) {
  return (
    <>
      <div className="flex flex-row w-2/3 justify-evenly">
        <ScorecardEntryName dependency={dependency} />
        <ScorecardEntryScore dependency={dependency} />
        <ScorecardEntryVersion dependency={dependency} />
      </div>
      <button
        className="bg-gray py-2 px-4 rounded"
        type="button"
        onClick={() => {
          console.log(dependency);
        }}
      >
        Log Dep

      </button>
    </>
  );
}
