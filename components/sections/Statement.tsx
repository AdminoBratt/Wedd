import { site } from '../../content/site';

// word-highlight (moments.md): one statement of 12 to 40 words in a one-screen section of its own.
export default function Statement() {
  const s = site.statement;
  return (
    <section className="section statement" id="budget" data-moment="word-highlight" aria-label={s.label}>
      <div className="wrap">
        <p className="t-label">{s.label}</p>
        <p className="mo-wh__text">
          {s.before}
          <strong>{s.strong}</strong>
          {s.after}
        </p>
      </div>
    </section>
  );
}
