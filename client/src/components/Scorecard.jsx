import React from 'react';
import ScorecardEntry from './ScorecardEntry';

export default function Scorecard({ dependencies }) {
  return (
    <>
      <table>
        <caption>Dependencies</caption>
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
          {dependencies.dependencies.map((d) => (
            <ScorecardEntry key={d.name + d.version} dependency={d} />
          ))}
        </tbody>
      </table>
      <table>
        <caption>Dev Dependencies</caption>
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
          {/* <ScorecardEntry /> */}
        </tbody>
      </table>
    </>
  );
}
