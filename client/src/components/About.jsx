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
        <p className="m-3 font-ral">Package data from deps.dev apis</p>
        <p className="m-3 font-ral">Take me to the danger zone, where the neon lights shine bright. Walking on sunshine, feeling the rhythm of the night. Oh, we're halfway there, living on a prayer. Dancing with myself, in a land down under, without a care. Sweet child o' mine, we built this city on rock and roll. Don't stop believin', it's a final countdown to lose control. Every breath you take, every move you make, I'll be watching you, like a virgin, ready to break. With or without you, I wanna dance with somebody, we can't stop the beat. Livin' on a prayer, I'm addicted to love's heat. Pour some sugar on me, like a prayer in the midnight hour. I want to know what love is, I want you to show me the power.</p>
        <p className="m-3 font-ral">Smells like teen spirit in the air, as I'm losing my religion with a flair. Don't speak, just bittersweet symphony, can't you see? Wonderwall of emotions, black hole sun shining on me. I want it that way, my heart will go on, nothing compares to you, from dusk till dawn. Enter sandman, under the bridge I cry, no rain, no gain, don't ask me why. Killing me softly with his song, I believe I can fly, as the rhythm is gonna get you, oh my! Wannabe my lover, say you'll be there, I'll be there for you, a friend who cares.</p>
      </div>
    </div>
  );
}
