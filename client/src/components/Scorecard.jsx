import React from 'react';
import ScorecardEntry from './ScorecardEntry';

export default function Scorecard({ dependencies }) {
  return (
    <div id="table-container" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 h-4/6 overflow-y-scroll z-50 bg-lt-gray text-dk-blue round-2xl shadow-even shadow-mid-blue rounded-2xl bg-opacity-70">
      <table className="text-center w-full">
        <thead>
          <tr>
            <th colSpan="5" className="p-3 text-2xl font-diph bg-dk-blue text-lt-gray">Dependencies</th>
          </tr>
          <tr className="text-xl font-ral bg-dk-blue text-lt-gray">
            <th className="font-ral">Dependency</th>
            <th className="font-ral">Version</th>
            <th className="font-ral">OpenSSF Score</th>
            <th className="font-ral">Default Version</th>
            <th className="font-ral">Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {dependencies.dependencies.map((d) => (
            <ScorecardEntry key={d.name + d.version} dependency={d} />
          ))}
        </tbody>
        {/* <thead>
          <tr>
            <th colSpan="5" className="p-3 text-2xl font-diph bg-dk-blue text-lt-gray">Dev Dependencies</th>
          </tr>
          <tr className="text-xl font-ral bg-dk-blue text-lt-gray">
            <th className="font-ral">Dependency</th>
            <th className="font-ral">Version</th>
            <th className="font-ral">OpenSSF Score</th>
            <th className="font-ral">Default Version</th>
            <th className="font-ral">Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {dependencies.devDependencies.map((d) => (
            <ScorecardEntry key={d.name + d.version} dependency={d} />
          ))}
        </tbody> */}
      </table>
    </div>
  );
}
