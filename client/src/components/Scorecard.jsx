import React from 'react';
import ScorecardEntry from './ScorecardEntry';

export default function Scorecard() {
  return (
    <table className="bg-slate-700/70 text-slate-300 shadow-lg rounded">
      <thead>
        <tr>
          <th>Dependency</th>
          <th>Version</th>
          <th>OpenSSF Score</th>
          <th>Default Version</th>
          <th>Recommendation</th>
        </tr>
      </thead>
      <tbody>
        <ScorecardEntry />
      </tbody>
    </table>
  );
}
