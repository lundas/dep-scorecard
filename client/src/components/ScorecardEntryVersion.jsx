import React from 'react';

export default function ScorecardEntryVersion({ dependency }) {
  return (
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
  );
}
