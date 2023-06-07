import React from 'react';
import ScorecardEntry from './ScorecardEntry';

export default function Scorecard({ dependencies }) {
  return (
    <table className="text-center w-full">
      <thead>
        <tr>
          <th colSpan="5">Dependencies</th>
        </tr>
        <tr>
          <th>Dependency</th>
          <th>Version</th>
          <th>OpenSSF Score</th>
          <th>Default Version</th>
          <th>Recommendation</th>
        </tr>
      </thead>
      <tbody>
        {dependencies.dependencies.map((d) => (
          <ScorecardEntry key={d.name + d.version} dependency={d} />
        ))}
      </tbody>
      <thead>
        <tr>
          <th colSpan="5">Dev Dependencies</th>
        </tr>
        <tr>
          <th>Dependency</th>
          <th>Version</th>
          <th>OpenSSF Score</th>
          <th>Default Version</th>
          <th>Recommendation</th>
        </tr>
      </thead>
      <tbody>
        {dependencies.devDependencies.map((d) => (
          <ScorecardEntry key={d.name + d.version} dependency={d} />
        ))}
      </tbody>
    </table>
  );
}
