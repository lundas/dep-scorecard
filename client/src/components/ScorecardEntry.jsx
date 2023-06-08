import React from 'react';

export default function ScoreCardEntry({ dependency }) {
  function recommendation(score) {
    let rec = 'n/a';
    if (Number(score) <= 3.5 && score !== null) {
      rec = 'upgrade/switch';
    } else if (Number(score) > 3.5) {
      rec = 'wait';
    }
    return rec;
  }
  const rec = recommendation(dependency.score);

  return (
    <tr className="odd:bg-lt-blue odd:bg-opacity-50">
      <td>{dependency.name}</td>
      <td>{dependency.version}</td>
      <td>{dependency.score}</td>
      <td>{dependency.defaultVersion}</td>
      <td>{rec}</td>
    </tr>
  );
}
