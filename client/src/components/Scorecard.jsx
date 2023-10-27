import React from 'react';
import ScorecardEntry from './ScorecardEntry';

export default function Scorecard({ dependencies }) {
  return (
    <div
      id="table-container"
      className="flex justify-center"
    >
      {dependencies.map((dep) => (
        <ScorecardEntry key={dep.versionKey.name} dependency={dep} />
      ))}
    </div>
  );
}
