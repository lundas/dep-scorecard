import React from 'react';

export default function ScorecardEntryName({ dependency }) {
  return (
    <div className="flex flex-wrap content-center">{dependency.versionKey.name}</div>
  );
}
