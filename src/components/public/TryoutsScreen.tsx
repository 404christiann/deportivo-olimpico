"use client";

import Image from "next/image";
import Link from "next/link";
import { prospect } from "@/config/prospect";
import { useMockData } from "@/lib/store/MockDataProvider";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function TryoutsScreen() {
  const { tryouts } = useMockData();
  const dates = [...tryouts.dates].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="tryouts-page">
      <section className="tryouts-hero">
        <Image src={tryouts.image} alt={tryouts.imageAlt} fill priority sizes="100vw" />
        <div className="tryouts-hero-shade" />
        <div className="tryouts-hero-content">
          <span className="eyebrow">{tryouts.eyebrow}</span>
          <h1>{tryouts.headline[0]}<br/><em>{tryouts.headline[1]}</em></h1>
          <p>{tryouts.intro}</p>
          <Link href={tryouts.registrationHref}>{tryouts.registrationLabel}</Link>
        </div>
      </section>

      <section className="tryouts-brief">
        <div>
          <span className="eyebrow">Upcoming sessions</span>
          <h2>{prospect.club.shortName} tryout calendar</h2>
        </div>
        <div className="tryouts-date-list">
          {dates.map((item) => (
            <article key={item.id}>
              <time dateTime={item.date}>{dateFormatter.format(new Date(`${item.date}T12:00:00`))}</time>
              <div>
                <strong>{item.label}</strong>
                <span>{item.time} · {item.location}</span>
                {item.notes && <p>{item.notes}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tryouts-details">
        {tryouts.details.map((detail) => (
          <article key={detail}>
            <span />
            <p>{detail}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
