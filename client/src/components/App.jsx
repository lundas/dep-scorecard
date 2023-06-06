import React from 'react';
import Scorecard from './Scorecard';
import UploadForm from './UploadForm';

export default function App() {
  return (
    <div className="body" role="application">
      <div className="site-header-container">
        <h1 className="text-3xl font-bold underline hover:text-sky-700">Hello, World</h1>
        <UploadForm />
        <Scorecard />
      </div>
    </div>
  );
}
