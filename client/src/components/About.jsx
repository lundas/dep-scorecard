import React from 'react';

export default function About() {
  return (
    <div id="about-container" className="m-8">
      <div id="instructions-section">
        <h2 className="text-5xl font-diph m-3">Instructions</h2>
        <ol className="m-5 list-decimal">
          <li className="mx-8 my-5 font-ral">Snag your package.json</li>
          <li className="mx-8 my-5 font-ral">Drop it in the box (or click and select)</li>
          <li className="mx-8 my-5 font-ral">Check out your dependecy scorecard</li>
        </ol>
      </div>
      <div id="about-section">
        <h2 className="text-5xl font-diph m-3">About</h2>
        <p className="m-3 font-ral">Picture this: you&apos;re developing your dream project, pouring your heart and soul into it. But oh no! What about those pesky dependencies?? Do they have any lurking vulnerabilities? Who has the time to comb through all those OSV docs?? 😑</p>
        <p className="m-3 font-ral">Don&apos;t let those scary vulns ruin all your hard work. With Dependecy Scorecard, just upload your package.json and we&apos;ll aggregate the OSSF scores for each dependecy right here in one easy to find place. </p>
        <p className="m-3 font-ral">Say good-bye to sleepless nights. Rest easy with Dependecy Scorecard!</p>
      </div>
      <div id="link-section">
        <h3 className="text-3xl font-diph m-3">Links</h3>
        <p className="m-3 font-ral">
          Package data aggregated from
          {' '}
          <a href="https://deps.dev/" className="text-lt-blue underline">deps.dev</a>
          {' '}
          apis. They&apos;re pretty cool, check them out!
        </p>
        <p className="m-3 font-ral">
          Also, you probably should look at those
          {' '}
          <a href="https://osv.dev/" className="text-lt-blue underline">OSV docs...</a>
        </p>
      </div>
    </div>
  );
}
