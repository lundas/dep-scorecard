import React from 'react';
import ScorecardEntry from './ScorecardEntry';

export default function Scorecard({ dependencies }) {
  return (
    <div
      id="table-container"
    >
      {dependencies.map((dep) => (
        <ScorecardEntry dependency={dep} />
      ))}
    </div>
  );
}
