"use client";

import Link from "next/link";
import { nextId, useMockData } from "@/lib/store/MockDataProvider";
import type { TryoutDate, TryoutsContent } from "@/config/types";

function updateDateField(date: TryoutDate, field: keyof TryoutDate, value: string): TryoutDate {
  return { ...date, [field]: value };
}

export function TryoutsAdmin() {
  const store = useMockData();
  const tryouts = store.tryouts;

  function updateTryouts(patch: Partial<TryoutsContent>) {
    store.dispatch({ type: "tryouts/update", tryouts: { ...tryouts, ...patch } });
  }

  function updateHeadline(index: 0 | 1, value: string) {
    const headline: [string, string] = [...tryouts.headline];
    headline[index] = value;
    updateTryouts({ headline });
  }

  function updateDetail(index: number, value: string) {
    updateTryouts({ details: tryouts.details.map((detail, itemIndex) => itemIndex === index ? value : detail) });
  }

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <span>Player pathway</span>
          <h1>Tryouts</h1>
          <p>Edit the public tryout page, dates, and registration path.</p>
        </div>
        <Link href="/tryouts">View page</Link>
      </header>

      <section className="admin-panel tryouts-admin-grid">
        <form className="admin-form">
          <label>
            Eyebrow
            <input value={tryouts.eyebrow} onChange={(event) => updateTryouts({ eyebrow: event.target.value })} />
          </label>
          <div className="form-grid">
            <label>
              Headline line 1
              <input value={tryouts.headline[0]} onChange={(event) => updateHeadline(0, event.target.value)} />
            </label>
            <label>
              Headline line 2
              <input value={tryouts.headline[1]} onChange={(event) => updateHeadline(1, event.target.value)} />
            </label>
          </div>
          <label>
            Intro
            <textarea rows={4} value={tryouts.intro} onChange={(event) => updateTryouts({ intro: event.target.value })} />
          </label>
          <div className="form-grid">
            <label>
              Button label
              <input value={tryouts.registrationLabel} onChange={(event) => updateTryouts({ registrationLabel: event.target.value })} />
            </label>
            <label>
              Button link
              <input value={tryouts.registrationHref} onChange={(event) => updateTryouts({ registrationHref: event.target.value })} />
            </label>
          </div>
          <label>
            Hero image URL
            <input value={tryouts.image} onChange={(event) => updateTryouts({ image: event.target.value })} />
          </label>
          <label>
            Hero image alt text
            <input value={tryouts.imageAlt} onChange={(event) => updateTryouts({ imageAlt: event.target.value })} />
          </label>
        </form>

        <div className="tryouts-admin-side">
          <strong>What players should know</strong>
          {tryouts.details.map((detail, index) => (
            <label key={index}>
              Detail {index + 1}
              <textarea rows={3} value={detail} onChange={(event) => updateDetail(index, event.target.value)} />
            </label>
          ))}
        </div>
      </section>

      <section className="admin-panel entity-panel">
        <div className="panel-heading">
          <div>
            <span>Tryout sessions</span>
            <h2>Dates</h2>
          </div>
          <button
            onClick={() => store.dispatch({
              type: "tryoutDate/add",
              date: {
                id: nextId("try", tryouts.dates.map((date) => date.id)),
                label: "New tryout session",
                date: "2026-08-23",
                time: "6:00 PM",
                location: "Dave Boyd Field",
                notes: "Update this note in the admin preview.",
              },
            })}
          >
            + Add date
          </button>
        </div>
        <div className="tryout-date-admin-list">
          {tryouts.dates.map((date) => (
            <article key={date.id}>
              <div className="form-grid">
                <label>
                  Label
                  <input value={date.label} onChange={(event) => store.dispatch({ type: "tryoutDate/update", date: updateDateField(date, "label", event.target.value) })} />
                </label>
                <label>
                  Date
                  <input type="date" value={date.date} onChange={(event) => store.dispatch({ type: "tryoutDate/update", date: updateDateField(date, "date", event.target.value) })} />
                </label>
                <label>
                  Time
                  <input value={date.time} onChange={(event) => store.dispatch({ type: "tryoutDate/update", date: updateDateField(date, "time", event.target.value) })} />
                </label>
                <label>
                  Location
                  <input value={date.location} onChange={(event) => store.dispatch({ type: "tryoutDate/update", date: updateDateField(date, "location", event.target.value) })} />
                </label>
              </div>
              <label>
                Notes
                <textarea rows={2} value={date.notes ?? ""} onChange={(event) => store.dispatch({ type: "tryoutDate/update", date: updateDateField(date, "notes", event.target.value) })} />
              </label>
              <button className="danger" onClick={() => store.dispatch({ type: "tryoutDate/remove", id: date.id })}>Remove date</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
