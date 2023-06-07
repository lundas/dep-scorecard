import React from 'react';

export default function ScoreCardEntry({ dependency }) {
  return (
    <tr>
      <td>{dependency.name}</td>
      <td>{dependency.version}</td>
      <td>{dependency.score}</td>
      <td>{dependency.defaultVersion}</td>
      <td>{dependency.recommend}</td>
    </tr>
  );
}
