import React from 'react';
import ScorecardEntry from './ScorecardEntry';

export default function Scorecard({ dependencies }) {
  return (
    <div
      id="scorecard-container"
      className="flex flex-col"
    >
      {dependencies.map((dep) => (
        <ScorecardEntry key={dep.versionKey.name} dependency={dep} />
      ))}
    </div>
  );
}
