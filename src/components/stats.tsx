const stats = [
  { num: "98%", cap: "recomendam a Mais Beleza", ring: true },
  { num: "+2 mil", cap: "atendimentos realizados" },
  { num: "+150", cap: "eventos e empresas atendidos" },
];

export function Stats() {
  return (
    <div className="container stats-wrap">
      <div className="stats">
        {stats.map((s, i) => (
          <div className="stat reveal" style={{ transitionDelay: `${i * 0.12}s` }} key={s.cap}>
            {s.ring && <div className="ring" aria-hidden />}
            <div>
              <div className="num">{s.num}</div>
              <div className="cap">{s.cap}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
