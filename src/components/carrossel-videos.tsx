"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const clips: { file: string; label: string; audio?: boolean }[] = [
  { file: "carrossel-atendimento", label: "Atendimento" },
  { file: "carrossel-vista", label: "Day Spa" },
  { file: "carrossel-experiencia", label: "Experiência" },
  { file: "depoimento", label: "Depoimento", audio: true },
  { file: "carrossel-ambiente-1", label: "Ambiente" },
  { file: "carrossel-ambiente-2", label: "Ambiente" },
  { file: "carrossel-ambiente-3", label: "Ambiente" },
  { file: "carrossel-marca", label: "Detalhes" },
];

const N = clips.length;
/* Loop infinito: renderizamos 3 cópias e mantemos o scroll na cópia do meio.
   Como o conteúdo se repete a cada "set", somar/subtrair a largura de um set
   é invisível pra quem olha — é assim que o carrossel nunca "acaba". */
const REPS = 3;
const loopClips = Array.from({ length: N * REPS }, (_, i) => clips[i % N]);

const DEFAULT = Math.max(0, clips.findIndex((c) => c.file === "depoimento"));
const START = N + DEFAULT; // mesmo clipe, mas na cópia do meio

export function CarrosselVideos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(START);
  const [playing, setPlaying] = useState<number | null>(null);
  const [sound, setSound] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const videos = () =>
    Array.from(trackRef.current?.querySelectorAll("video") ?? []) as HTMLVideoElement[];

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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

  /* Reposiciona o scroll pra cópia do meio quando ele escapa pras pontas.
     Só roda com o scroll PARADO (scrollend): mexer em scrollLeft no meio de um
     swipe mata o momentum no iOS e briga com o scroll suave das setas. */
  const normalize = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.querySelectorAll<HTMLElement>(".reel"));
    if (items.length <= N) return;
    // largura de um set medida pelos itens — o padding-inline da track
    // entra só uma vez, então scrollWidth/REPS daria errado aqui.
    const setW = items[N].offsetLeft - items[0].offsetLeft;
    if (setW <= 0) return;
    if (track.scrollLeft < setW * 0.5) track.scrollLeft += setW;
    else if (track.scrollLeft > setW * 1.5) track.scrollLeft -= setW;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const el = track.querySelectorAll<HTMLElement>(".reel")[START];
    if (el) {
      const tr = track.getBoundingClientRect();
      const er = el.getBoundingClientRect();
      track.scrollLeft += er.left + er.width / 2 - (tr.left + tr.width / 2);
    }
    let raf = 0;
    let idle = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActive);
      // fallback pra browser sem scrollend
      clearTimeout(idle);
      idle = window.setTimeout(normalize, 160);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("scrollend", normalize);
    window.addEventListener("resize", onScroll);
    updateActive();
    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("scrollend", normalize);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(idle);
    };
  }, [updateActive, normalize]);

  // trocou o vídeo central → volta ao mudo e reseta play
  useEffect(() => {
    setSound(false);
    setPlaying(null);
  }, [active]);

  // no mobile o vídeo central roda sozinho; som só se a pessoa ligar
  useEffect(() => {
    videos().forEach((v, i) => {
      if (isTouch && i === active) {
        // i é índice do DOM (0..N*REPS-1); o clipe real está em i % N
        v.muted = !(clips[i % N].audio && sound);
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active, isTouch, sound]);

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
          Atendimentos, ambiente e experiências da Mais Beleza, do jeitinho que acontece.
        </p>
      </div>

      <div className="reels-wrap">
        <button
          type="button"
          className="reels-nav prev"
          aria-label="Vídeo anterior"
          onClick={() => goTo(active - 1)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="reels-track" ref={trackRef}>
          {loopClips.map((c, i) => (
            <figure
              className={`reel${i === active ? " is-active" : ""}${playing === i ? " is-playing" : ""}`}
              key={`${c.file}-${i}`}
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

              {isTouch && clips[i % N].audio && i === active && (
                <button
                  type="button"
                  className="reel-sound"
                  aria-label={sound ? "Desativar som" : "Ativar som"}
                  aria-pressed={sound}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSound((s) => !s);
                  }}
                >
                  {sound ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
                    </svg>
                  )}
                </button>
              )}

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
