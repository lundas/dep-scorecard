import React from 'react';

export default function ScoreCardEntry({ dependency }) {
  return (
    <>
      <div className="flex flex-row w-2/3 justify-evenly">
        <div className="flex flex-wrap content-center">{dependency.versionKey.name}</div>
        <div className="flex flex-col flex-wrap justify-evenly">
          <h2 className="text-3xl font-diph text-center">OSSF Score</h2>
          <div>{dependency.scorecard.score}</div>
        </div>
        <div className="w-1/3 flex flex-col flex-wrap justify-evenly">
          <h2 className="text-3xl font-diph text-center">Version</h2>
          <ol className="text-center">
            <li>
              Version:
              {' '}
              {dependency.versionKey.version}
            </li>
            <li>
              System:
              {' '}
              {dependency.versionKey.system}
            </li>
            <li>
              is Default?:
              {' '}
              {dependency.isDefault.toString()}
            </li>
          </ol>
          <button type="button">See Version Vulnerabilities</button>
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
