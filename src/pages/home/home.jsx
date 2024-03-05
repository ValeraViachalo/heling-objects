import React from "react";

import "./Home.scss";

export default function Home() {
  return (
    <main className="home">
      <div className="hero">
        <div className="left">
          <h1>“DESIGN IS WITHIN ME.”</h1>
          <p>Daniel Heilig. Designer, artist, musician.</p>
        </div>

        <div className="right">
          <img src="/images/Home/hero.jpg" alt="hero" className="hero__image" />
          <p>
            Daniel Heilig. A young Hungarian-German designer, charismatic artist
            and creative cosmopolitan. Born in Budapest, he has half of Europe
            in his genes. Childhood days in rural Hungary were marked by Soviets
            and poverty. Before growing up in renewed, modern Germany, to begin
            again from nothing, a foreigner without a nest. Heilig’s life’s
            journey, a constant change of worlds. The quest for authenticity,
            identity and balance forever shapes this virtuoso’s work.
          </p>
        </div>
      </div>
    </main>
  );
}
