"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type StoryBeat = {
  id: string;
  title: string;
  detail: string;
  signal: string;
};

const beats: StoryBeat[] = [
  {
    id: "entry",
    title: "Entry Chamber",
    detail: "A bold first impression locks attention in under three seconds.",
    signal: "Hook"
  },
  {
    id: "identity",
    title: "Identity Corridor",
    detail: "The brand voice, tone, and visual direction become unmistakable.",
    signal: "Clarity"
  },
  {
    id: "proof",
    title: "Proof Vault",
    detail: "Case outcomes and product metrics take over the narrative.",
    signal: "Trust"
  },
  {
    id: "system",
    title: "System Core",
    detail: "Process and execution rigor show exactly how delivery happens.",
    signal: "Method"
  },
  {
    id: "launch",
    title: "Launch Gate",
    detail: "The final scene converts momentum into action and inquiry.",
    signal: "Action"
  }
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function RoomStorySection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      if (!rootRef.current) {
        return;
      }

      const section = rootRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollRange = Math.max(sectionHeight - viewportHeight, 1);
      const current = window.scrollY - sectionTop;
      const normalized = clamp(current / scrollRange, 0, 1);

      setProgress(normalized);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIndex = useMemo(
    () => Math.min(beats.length - 1, Math.floor(progress * beats.length)),
    [progress]
  );

  const roomTilt = 8 - progress * 12;
  const roomDepth = progress * 260;
  const portalDepth = 220 + progress * 460;

  return (
    <section ref={rootRef} className="relative h-[420vh] bg-surface-base">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="room-noise absolute inset-0 opacity-45" />
        <div className="room-rings absolute inset-0 opacity-70" />

        <div className="relative mx-auto grid h-full w-full max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.3fr_0.9fr] md:items-center">
          <div className="relative h-[54vh] min-h-[380px] [perspective:1400px] md:h-[72vh]">
            <div
              className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-300 ease-out"
              style={{
                transform: `translateZ(${roomDepth}px) rotateX(${roomTilt}deg)`
              }}
            >
              <div className="absolute inset-0 rounded-[2rem] border border-surface-edge bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.15),rgba(5,9,13,0.7)_58%)] shadow-glow [transform:translateZ(-80px)]" />
              <div className="absolute inset-y-[9%] left-[8%] w-[20%] rounded-2xl border border-surface-edge/80 bg-[linear-gradient(180deg,rgba(251,146,60,0.16),rgba(11,18,24,0.45))] [transform:rotateY(64deg)_translateZ(-140px)]" />
              <div className="absolute inset-y-[9%] right-[8%] w-[20%] rounded-2xl border border-surface-edge/80 bg-[linear-gradient(180deg,rgba(190,242,100,0.1),rgba(11,18,24,0.5))] [transform:rotateY(-64deg)_translateZ(-140px)]" />
              <div className="absolute bottom-[6%] left-[10%] right-[10%] h-[22%] rounded-2xl border border-surface-edge/80 bg-[linear-gradient(180deg,rgba(34,211,238,0.2),rgba(5,9,13,0.85))] [transform:rotateX(78deg)_translateZ(-120px)]" />

              {[0, 1, 2, 3, 4].map((ring) => {
                const z = -portalDepth - ring * 130;
                const scale = 1 - ring * 0.14;
                const opacity = clamp(1 - ring * 0.17 + progress * 0.1, 0.12, 1);
                return (
                  <div
                    key={ring}
                    className="absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] border border-accent-cyan/70 bg-[radial-gradient(circle,rgba(34,211,238,0.14),rgba(5,9,13,0.04)_65%)]"
                    style={{
                      opacity,
                      transform: `translate(-50%, -50%) translateZ(${z}px) scale(${scale})`
                    }}
                  />
                );
              })}

              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-orange/70 bg-[radial-gradient(circle,rgba(251,146,60,0.4),rgba(251,146,60,0.06)_66%)] room-core-pulse" />
            </div>
          </div>

          <div className="relative rounded-3xl border border-surface-edge bg-surface-panel/75 p-6 backdrop-blur md:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-accent-cyan">
              Scroll Story Room
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-tight text-text-base md:text-5xl">
              Move forward to go deeper into the studio narrative.
            </h2>

            <div className="mt-7 grid gap-4">
              {beats.map((beat, index) => {
                const active = index === activeIndex;
                return (
                  <article
                    key={beat.id}
                    className={`rounded-2xl border p-4 transition ${
                      active
                        ? "border-accent-cyan bg-[rgba(34,211,238,0.08)]"
                        : "border-surface-edge bg-surface-base/45"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-accent-lime">
                      {beat.signal}
                    </p>
                    <h3 className="mt-2 font-heading text-xl text-text-base">{beat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-mute">{beat.detail}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-surface-edge">
              <div
                className="h-full bg-gradient-to-r from-accent-cyan to-accent-orange transition-all duration-200"
                style={{ width: `${Math.max(progress * 100, 2)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
