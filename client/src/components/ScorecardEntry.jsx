import React from 'react';

export default function ScoreCardEntry({ dependency }) {
  return (
    <>
      <div>
        <div>
          <h2>OSSF Scorecard</h2>
        </div>
        <div>
          <h2>Version</h2>
        </div>
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
