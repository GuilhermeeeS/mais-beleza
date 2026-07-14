"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const clips = [
  { file: "carrossel-atendimento", label: "Atendimento" },
  { file: "carrossel-vista", label: "Day Spa" },
  { file: "carrossel-experiencia", label: "Experiência" },
  { file: "depoimento", label: "Depoimento" },
  { file: "carrossel-ambiente-1", label: "Ambiente" },
  { file: "carrossel-ambiente-2", label: "Ambiente" },
  { file: "carrossel-ambiente-3", label: "Ambiente" },
  { file: "carrossel-marca", label: "Detalhes" },
];

const DEFAULT = clips.findIndex((c) => c.file === "depoimento");

export function CarrosselVideos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(DEFAULT < 0 ? 0 : DEFAULT);
  const [playing, setPlaying] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  const videos = () =>
    Array.from(trackRef.current?.querySelectorAll("video") ?? []) as HTMLVideoElement[];

  // desktop (hover) x touch
  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // item mais próximo do centro
  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.querySelectorAll<HTMLElement>(".reel"));
    const rect = track.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    let best = 0;
    let bestDist = Infinity;
    items.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // centraliza o vídeo padrão (depoimento) sem rolar a página
    const el = track.querySelectorAll<HTMLElement>(".reel")[DEFAULT < 0 ? 0 : DEFAULT];
    if (el) {
      const tr = track.getBoundingClientRect();
      const er = el.getBoundingClientRect();
      track.scrollLeft += er.left + er.width / 2 - (tr.left + tr.width / 2);
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActive);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateActive();
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [updateActive]);

  // trocou o vídeo central: no mobile o central roda sozinho (mudo); os outros pausam
  useEffect(() => {
    videos().forEach((v, i) => {
      if (isTouch && i === active) {
        v.muted = true;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
    setPlaying(null);
  }, [active, isTouch]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.querySelectorAll<HTMLElement>(".reel"));
    const el = items[Math.max(0, Math.min(items.length - 1, i))];
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const handleReel = (i: number) => {
    if (i !== active) {
      goTo(i);
      return;
    }
    if (isTouch) return; // mobile: o central já roda sozinho, sem player
    const v = videos()[i];
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play().catch(() => {});
      setPlaying(i);
    } else {
      v.pause();
      setPlaying(null);
    }
  };

  return (
    <section className="carrossel-sec" id="na-pratica" aria-label="Vídeos da Mais Beleza">
      <div className="container carrossel-head">
        <span className="eyebrow">Na prática</span>
        <h2 className="display-md reveal">Momentos reais de cuidado</h2>
        <p className="lead">
          Atendimentos, ambiente e experiências da Mais Beleza — do jeitinho que acontece.
        </p>
      </div>

      <div className="reels-wrap">
        <button
          type="button"
          className="reels-nav prev"
          aria-label="Vídeo anterior"
          disabled={active === 0}
          onClick={() => goTo(active - 1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="reels-track" ref={trackRef}>
          {clips.map((c, i) => (
            <figure
              className={`reel${i === active ? " is-active" : ""}${playing === i ? " is-playing" : ""}`}
              key={c.file}
              onClick={() => handleReel(i)}
            >
              <video
                src={`/videos/${c.file}.mp4`}
                poster={`/videos/${c.file}.jpg`}
                loop
                playsInline
                preload="none"
              />
              <span className="reel-cap">{c.label}</span>
              <button
                type="button"
                className="reel-play"
                aria-label={playing === i ? "Pausar vídeo" : "Reproduzir vídeo"}
                tabIndex={i === active ? 0 : -1}
                onClick={(e) => {
                  e.stopPropagation();
                  handleReel(i);
                }}
              >
                {playing === i ? (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                  </svg>
                ) : (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </figure>
          ))}
        </div>

        <button
          type="button"
          className="reels-nav next"
          aria-label="Próximo vídeo"
          disabled={active === clips.length - 1}
          onClick={() => goTo(active + 1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
