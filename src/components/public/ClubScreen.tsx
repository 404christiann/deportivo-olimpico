"use client";

import Image from "next/image";
import Link from "next/link";
import { prospect } from "@/config/prospect";

export function ClubScreen() {
  const storyParagraphs = prospect.about.story.split("\n\n");
  const values = (prospect.about.highlights && prospect.about.highlights.length > 0
    ? prospect.about.highlights
    : prospect.about.training?.points ?? []
  ).slice(0, 3);

  return (
    <div className="club-about-page">
      <header className="club-about-hero">
        <span className="eyebrow">Our club</span>
        <h1>{prospect.copy.club.headline[0]}<br/><em>{prospect.copy.club.headline[1]}</em></h1>
        <span className="club-about-rule" aria-hidden="true" />
      </header>

      <section className="club-about-story">
        <div className="club-about-copy">
          {storyParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside className="club-about-feature">
          {prospect.about.groupPhoto && (
            <div className="club-about-photo">
              <Image src={prospect.about.groupPhoto.image} alt={prospect.about.groupPhoto.alt} fill sizes="(max-width: 800px) 92vw, 38vw" />
              <div className="club-about-photo-caption">
                <span>A Name Built On History.</span>
                <strong>Est. 1968</strong>
                <small>Deportivo Olimpico Guadalupe California</small>
              </div>
            </div>
          )}
        </aside>
      </section>

      {values.length > 0 && (
        <section className="club-about-values">
          <p>What defines us</p>
          <div>
            {values.map((value, index) => (
              <article key={value}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{value}</h2>
                {prospect.about.training?.points[index] && <small>{prospect.about.training.points[index]}</small>}
              </article>
            ))}
          </div>
        </section>
      )}

      {prospect.about.training && (
        <section className="club-about-closing">
          <p>{prospect.about.training.closing ?? prospect.about.training.intro}</p>
          <div className="club-about-actions">
            <Link href="/tryouts">Tryouts</Link>
            <Link href="/sponsors">Contact the club</Link>
          </div>
        </section>
      )}
    </div>
  );
}
