/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Scorecard from './Scorecard';
import UploadForm from './UploadForm';
import About from './About';

// mock data for frontend dev
const mockData = require('../../../__mocks__/mockData');

export default function App() {
  const blankDeps = {
    dependencies: [],
    devDependencies: [],
  };
  const [revealScorecard, setRevealScorecard] = useState(false);
  const [dependencies, setDependencies] = useState([mockData]); // mock data

  return (
    <div
      className="bg-dk-blue flex flex-col justify-evenly w-full h-full relative"
      role="application"
    >
      <div>
        <h1 className="text-6xl font-diph text-center">
          Dependecy Scorecard
        </h1>
      </div>
      <UploadForm
        setDependencies={setDependencies}
        setRevealScorecard={setRevealScorecard}
      />
      {/* <About /> */}
      <Scorecard dependencies={dependencies} />
      {/* {revealScorecard && (
      <div
        id="modal-overlay"
        onClick={(e) => {
          setRevealScorecard(false);
          setDependencies(blankDeps);
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        bg-charcoal opacity-70 w-screen h-screen z-10"
      />
      )} */}
    </div>
  );
}
