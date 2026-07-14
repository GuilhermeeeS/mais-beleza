"use client";

import { useEffect, useRef, useState } from "react";

const clips = [
  { file: "carrossel-atendimento", label: "Atendimento" },
  { file: "carrossel-vista", label: "Day Spa" },
  { file: "carrossel-experiencia", label: "Experiência" },
  { file: "carrossel-ambiente-1", label: "Ambiente" },
  { file: "carrossel-ambiente-2", label: "Ambiente" },
  { file: "carrossel-ambiente-3", label: "Ambiente" },
  { file: "carrossel-marca", label: "Detalhes" },
  { file: "depoimento", label: "Depoimento", audio: true },
];

export function CarrosselVideos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [soundIdx, setSoundIdx] = useState<number | null>(null);

  // toca quando o vídeo entra na tela (mudo), pausa quando sai
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const vids = Array.from(track.querySelectorAll("video"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting && e.intersectionRatio >= 0.55) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: [0, 0.55, 1] }
    );
    vids.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  // som: no máximo um por vez
  useEffect(() => {
    const vids = Array.from(trackRef.current?.querySelectorAll("video") ?? []);
    vids.forEach((v, i) => {
      (v as HTMLVideoElement).muted = i !== soundIdx;
    });
  }, [soundIdx]);

  return (
    <section className="carrossel-sec" id="na-pratica" aria-label="Vídeos da Mais Beleza">
      <div className="container carrossel-head">
        <span className="eyebrow">Na prática</span>
        <h2 className="display-md reveal">Momentos reais de cuidado</h2>
        <p className="lead">
          Atendimentos, ambiente e experiências da Mais Beleza — do jeitinho que acontece.
        </p>
      </div>

      <div className="reels-track" ref={trackRef}>
        {clips.map((c, i) => (
          <figure className="reel" key={c.file}>
            <video
              src={`/videos/${c.file}.mp4`}
              poster={`/videos/${c.file}.jpg`}
              muted
              loop
              playsInline
              preload="none"
            />
            <span className="reel-cap">{c.label}</span>
            {c.audio && (
              <button
                type="button"
                className="reel-sound"
                aria-label={soundIdx === i ? "Desativar som" : "Ativar som"}
                aria-pressed={soundIdx === i}
                onClick={() => setSoundIdx(soundIdx === i ? null : i)}
              >
                {soundIdx === i ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
                  </svg>
                )}
              </button>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
