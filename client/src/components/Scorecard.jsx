import React from 'react';
import ScorecardEntry from './ScorecardEntry';

export default function Scorecard({ dependencies }) {
  return (
    <div id="table-container" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 h-4/6 overflow-y-scroll z-50">
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
    </div>
  );
}
