import React from 'react';
import ScorecardEntry from './ScorecardEntry';

export default function Scorecard({ dependencies }) {
  return (
    <div
      id="table-container"
    >
      {dependencies.dependencies.map((dep) => (
        <ScorecardEntry dependecy={dep} />
      ))}
    </div>
  );
}
