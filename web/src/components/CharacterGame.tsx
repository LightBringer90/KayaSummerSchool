"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type CharId = "bunny" | "cat" | "dragon" | "butterfly" | "frog" | "star";
type Mode = "free" | "story";

type Character = {
  id: CharId;
  emoji: string;
  animation: string;
  burst: string;
};

const characters: Character[] = [
  { id: "bunny", emoji: "🐰", animation: "anim-jump", burst: "🌿" },
  { id: "cat", emoji: "🐱", animation: "anim-spin", burst: "✨" },
  { id: "dragon", emoji: "🐲", animation: "anim-shake", burst: "🔥" },
  { id: "butterfly", emoji: "🦋", animation: "anim-fly", burst: "🌸" },
  { id: "frog", emoji: "🐸", animation: "anim-hop", burst: "💧" },
  { id: "star", emoji: "⭐", animation: "anim-twinkle", burst: "✨" },
];

const characterById: Record<CharId, Character> = Object.fromEntries(
  characters.map((c) => [c.id, c]),
) as Record<CharId, Character>;

const storyOrder: CharId[] = [
  "bunny",
  "cat",
  "dragon",
  "butterfly",
  "frog",
  "star",
];

const targetByChar: Record<CharId, { emoji: string; correct: string }> = {
  bunny: { emoji: "🥕", correct: "carrot" },
  cat: { emoji: "🧶", correct: "yarn" },
  dragon: { emoji: "🪵", correct: "log" },
  butterfly: { emoji: "🌸", correct: "flower" },
  frog: { emoji: "💧", correct: "water" },
  star: { emoji: "🌟", correct: "shooting-star" },
};

const decoys: { id: string; emoji: string }[] = [
  { id: "rock", emoji: "🪨" },
  { id: "leaf", emoji: "🍂" },
  { id: "mushroom", emoji: "🍄" },
];

type Burst = {
  id: number;
  charId: CharId;
  emoji: string;
  x: number;
  y: number;
};

export function CharacterGame({
  t,
  locale,
}: {
  t: Dictionary["play"];
  locale: string;
}) {
  const [mode, setMode] = useState<Mode>("free");

  // Free mode state
  const [tickByChar, setTickByChar] = useState<Record<CharId, number>>({
    bunny: 0,
    cat: 0,
    dragon: 0,
    butterfly: 0,
    frog: 0,
    star: 0,
  });
  const [smiles, setSmiles] = useState(0);
  const [bursts, setBursts] = useState<Burst[]>([]);

  // Story mode state
  const [storyIdx, setStoryIdx] = useState<number | null>(null); // null = intro screen
  const [storyTick, setStoryTick] = useState(0);
  const [feedback, setFeedback] = useState<null | "ok" | "wrong">(null);

  const triggerCharAnim = (id: CharId) => {
    setTickByChar((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const fireBursts = (c: Character) => {
    const newBursts: Burst[] = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      charId: c.id,
      emoji: c.burst,
      x: (Math.random() - 0.5) * 120,
      y: -40 - Math.random() * 80,
    }));
    setBursts((b) => [...b, ...newBursts]);
    setTimeout(() => {
      setBursts((b) => b.filter((x) => !newBursts.some((n) => n.id === x.id)));
    }, 900);
  };

  // ---- free mode ----
  const onClickChar = (c: Character) => {
    triggerCharAnim(c.id);
    fireBursts(c);
    setSmiles((s) => s + 1);
  };

  const resetFree = () => setSmiles(0);

  // ---- story mode ----
  const startStory = () => {
    setStoryIdx(0);
    setStoryTick(0);
    setFeedback(null);
  };

  const replayStory = () => startStory();

  const onTargetClick = (id: string) => {
    if (storyIdx === null) return;
    const charId = storyOrder[storyIdx];
    const expected = targetByChar[charId].correct;
    if (id === expected) {
      const c = characterById[charId];
      triggerCharAnim(charId);
      fireBursts(c);
      setFeedback("ok");
      setTimeout(() => {
        setFeedback(null);
        if (storyIdx + 1 >= storyOrder.length) setStoryIdx(storyOrder.length);
        else setStoryIdx(storyIdx + 1);
        setStoryTick((n) => n + 1);
      }, 700);
    } else {
      setFeedback("wrong");
      setTimeout(() => setFeedback(null), 700);
    }
  };

  const charsToRender = characters;

  return (
    <div data-testid="char-game" className="relative">
      <div
        role="tablist"
        aria-label="game mode"
        className="inline-flex rounded-md border border-slate-200 bg-white p-1 mb-8"
      >
        {(["free", "story"] as Mode[]).map((m) => {
          const active = mode === m;
          const activeTone =
            m === "free" ? "bg-brand-500 text-white" : "bg-leaf-500 text-white";
          return (
            <button
              key={m}
              role="tab"
              aria-selected={active}
              data-testid={`mode-${m}`}
              onClick={() => {
                setMode(m);
                if (m === "story") {
                  setStoryIdx(null);
                }
              }}
              className={`px-4 py-1.5 rounded-md text-sm transition-colors ${
                active ? activeTone : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {m === "free" ? t.modeFree : t.modeStory}
            </button>
          );
        })}
      </div>

      {mode === "free" ? (
        <FreePlay
          t={t}
          smiles={smiles}
          onClickChar={onClickChar}
          tickByChar={tickByChar}
          bursts={bursts}
          reset={resetFree}
          chars={charsToRender}
        />
      ) : (
        <StoryMode
          t={t}
          locale={locale}
          storyIdx={storyIdx}
          tickByChar={tickByChar}
          bursts={bursts}
          feedback={feedback}
          onStart={startStory}
          onReplay={replayStory}
          onTargetClick={onTargetClick}
          chars={charsToRender}
          storyTick={storyTick}
        />
      )}
    </div>
  );
}

function FreePlay({
  t,
  smiles,
  onClickChar,
  tickByChar,
  bursts,
  reset,
  chars,
}: {
  t: Dictionary["play"];
  smiles: number;
  onClickChar: (c: Character) => void;
  tickByChar: Record<CharId, number>;
  bursts: Burst[];
  reset: () => void;
  chars: Character[];
}) {
  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="text-brand-800">
          <span className="font-display text-3xl" data-testid="smile-count">
            {smiles}
          </span>{" "}
          <span className="text-sm uppercase tracking-widest">{t.smiles}</span>
        </div>
        <button
          type="button"
          onClick={reset}
          className="btn-outline text-sm"
          data-testid="reset-smiles"
        >
          {t.reset}
        </button>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {chars.map((c, i) => {
          const tones = [
            "bg-brand-50 border-brand-300",
            "bg-sky-50 border-sky-300",
            "bg-leaf-50 border-leaf-300",
          ];
          return (
          <li
            key={c.id}
            className={`rounded-md p-6 border flex flex-col items-center ${tones[i % 3]}`}
          >
            <CharButton
              c={c}
              tick={tickByChar[c.id]}
              bursts={bursts.filter((b) => b.charId === c.id)}
              onClick={() => onClickChar(c)}
              label={t.characters[c.id]}
            />
            <div className="mt-3 font-display text-lg text-brand-800">
              {t.characters[c.id]}
            </div>
            <div className="text-xs uppercase tracking-widest text-leaf-700">
              {t.hints[c.id]}
            </div>
          </li>
          );
        })}
      </ul>
    </>
  );
}

function StoryMode({
  t,
  locale,
  storyIdx,
  tickByChar,
  bursts,
  feedback,
  onStart,
  onReplay,
  onTargetClick,
  chars,
  storyTick,
}: {
  t: Dictionary["play"];
  locale: string;
  storyIdx: number | null;
  tickByChar: Record<CharId, number>;
  bursts: Burst[];
  feedback: null | "ok" | "wrong";
  onStart: () => void;
  onReplay: () => void;
  onTargetClick: (id: string) => void;
  chars: Character[];
  storyTick: number;
}) {
  const finished = storyIdx !== null && storyIdx >= storyOrder.length;
  const inProgress =
    storyIdx !== null && storyIdx >= 0 && storyIdx < storyOrder.length;

  if (storyIdx === null) {
    return (
      <div
        data-testid="story-intro"
        className="rounded-md bg-white p-8 border border-brand-100 shadow-sm text-center"
      >
        <p className="text-brand-800/80 max-w-xl mx-auto">{t.story.intro}</p>
        <button
          type="button"
          onClick={onStart}
          className="btn-primary mt-6"
          data-testid="story-start"
        >
          {t.story.start}
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div
        data-testid="story-finished"
        className="rounded-md bg-leaf-50 p-8 border border-leaf-100 text-center"
      >
        <div className="text-6xl">🎉</div>
        <h2 className="mt-4 font-display text-3xl text-brand-800">
          {t.story.finishedTitle}
        </h2>
        <p className="mt-3 text-brand-800/80 max-w-xl mx-auto">
          {t.story.finishedBody}
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link href={`/${locale}/unplug`} className="btn-primary">
            {t.story.finishedCta}
          </Link>
          <button
            type="button"
            onClick={onReplay}
            className="btn-outline"
            data-testid="story-replay"
          >
            {t.story.replay}
          </button>
        </div>
      </div>
    );
  }

  const currentCharId = storyOrder[storyIdx!];
  const currentChar = characterById[currentCharId];
  const stepText = t.story.steps[currentCharId];
  const successText = t.story.success[currentCharId];

  const targets = buildTargets(currentCharId, storyTick);

  return (
    <>
      <div className="flex items-center justify-between mb-4 text-sm text-sky-700">
        <span data-testid="story-step">
          {t.step} {storyIdx! + 1} {t.of} {storyOrder.length}
        </span>
        <div className="flex gap-1.5">
          {storyOrder.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-6 rounded-full ${
                i < storyIdx!
                  ? "bg-leaf-500"
                  : i === storyIdx
                    ? "bg-brand-500"
                    : "bg-sky-100"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        data-testid="story-prompt"
        className={`rounded-md px-5 py-4 mb-6 border text-base font-medium ${
          feedback === "ok"
            ? "bg-leaf-100 border-leaf-400 text-leaf-800"
            : feedback === "wrong"
              ? "bg-brand-100 border-brand-400 text-brand-800"
              : "bg-sky-100 border-sky-300 text-sky-900"
        }`}
      >
        {feedback === "ok"
          ? successText
          : feedback === "wrong"
            ? t.story.wrong
            : stepText}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-md bg-leaf-50 p-6 border border-leaf-300 flex flex-col items-center">
          <CharButton
            c={currentChar}
            tick={tickByChar[currentChar.id]}
            bursts={bursts.filter((b) => b.charId === currentChar.id)}
            onClick={() => {}}
            label={t.characters[currentChar.id]}
            highlight={inProgress}
          />
          <div className="mt-3 font-display text-lg text-brand-800">
            {t.characters[currentChar.id]}
          </div>
        </div>

        <ul
          data-testid="story-targets"
          className="grid grid-cols-3 sm:grid-cols-4 gap-4"
        >
          {targets.map((tg) => (
            <li key={tg.id}>
              <button
                type="button"
                onClick={() => onTargetClick(tg.id)}
                data-testid={`target-${tg.id}`}
                aria-label={tg.id}
                className="w-full aspect-square rounded-md bg-sky-50 border-2 border-sky-300 grid place-items-center text-4xl hover:bg-brand-50 hover:border-brand-300 active:scale-95 transition"
              >
                {tg.emoji}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function buildTargets(charId: CharId, salt: number) {
  const correct = {
    id: targetByChar[charId].correct,
    emoji: targetByChar[charId].emoji,
  };
  const list = [correct, ...decoys];
  // deterministic shuffle by salt for stable testing yet some variance
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (salt * 9301 + 49297 + i * 7) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function CharButton({
  c,
  tick,
  bursts,
  onClick,
  label,
  highlight,
}: {
  c: Character;
  tick: number;
  bursts: Burst[];
  onClick: () => void;
  label: string;
  highlight?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={`char-${c.id}`}
      aria-label={label}
      className={`relative w-32 h-32 grid place-items-center select-none focus:outline-none ${
        highlight ? "ring-4 ring-sky-200 rounded-full" : ""
      }`}
    >
      <span
        key={tick}
        className={`text-7xl inline-block ${c.animation}`}
        style={{ transformOrigin: "center bottom" }}
      >
        {c.emoji}
      </span>
      {bursts.map((b) => (
        <span
          key={b.id}
          className="absolute text-2xl pointer-events-none anim-burst"
          style={{ left: `calc(50% + ${b.x}px)`, top: `calc(50% + ${b.y}px)` }}
        >
          {b.emoji}
        </span>
      ))}
    </button>
  );
}
