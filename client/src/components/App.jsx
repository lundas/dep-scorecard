import React, { useState } from 'react';
import Scorecard from './Scorecard';
import UploadForm from './UploadForm';

export default function App() {
  const [revealScorecard, setRevealScorecard] = useState(false);
  const [dependencies, setDependencies] = useState({
    dependencies: [],
    devDependencies: [],
  });

  return (
    <div className="border-purple-500 border-2 w-full h-full relative" role="application">
      <div>
        <h1 className="text-3xl font-bold underline hover:text-sky-700 text-center">Hello, World</h1>
      </div>
      <UploadForm setDependencies={setDependencies} setRevealScorecard={setRevealScorecard} />
      {revealScorecard && <Scorecard dependencies={dependencies} />}
      {revealScorecard && <div id="modal-overlay" onClick={(e) => setRevealScorecard(false)} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 opacity-60 w-full h-full z-10" />}
    </div>
  );
}
