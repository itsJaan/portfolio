import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { TouchEvent } from 'react';
import type { ProjectImage } from '../../types';

type LightboxProps = {
  title: string;
  images: ProjectImage[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

const SWIPE_THRESHOLD = 50;

export const Lightbox = ({ title, images, index, onChange, onClose }: LightboxProps) => {
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const total = images.length;
  const current = images[index];

  const goTo = useCallback((next: number) => onChange((next + total) % total), [onChange, total]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') goTo(index + 1);
      if (event.key === 'ArrowLeft') goTo(index - 1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [goTo, index, onClose]);

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) goTo(delta < 0 ? index + 1 : index - 1);
    touchStartX.current = null;
  };

  // Portal: un ancestro con backdrop-filter/transform atraparía el position: fixed dentro de la tarjeta
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8" onClick={(event) => event.stopPropagation()}>
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="text-xs text-slate-400">
            {index + 1} / {total}
          </p>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          aria-label="Close gallery"
        >
          Close ✕
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center px-4 md:px-20"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.caption}
          className="max-h-[75vh] w-auto max-w-full rounded-xl border border-white/10 shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        />

        {total > 1 ? (
          <>
            <NavButton direction="prev" onClick={() => goTo(index - 1)} />
            <NavButton direction="next" onClick={() => goTo(index + 1)} />
          </>
        ) : null}
      </div>

      <div className="px-4 pb-4 pt-3 text-center md:pb-6" onClick={(event) => event.stopPropagation()}>
        <p className="text-sm text-slate-300">{current.caption}</p>
        <div className="mt-4 flex justify-center gap-2">
          {images.map((image, dotIndex) => (
            <button
              key={image.src}
              type="button"
              onClick={() => goTo(dotIndex)}
              aria-label={`Go to screenshot ${dotIndex + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                dotIndex === index ? 'w-6 bg-sky-400' : 'w-1.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
};

const NavButton = ({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) => (
  <button
    type="button"
    onClick={(event) => {
      event.stopPropagation();
      onClick();
    }}
    aria-label={direction === 'prev' ? 'Previous screenshot' : 'Next screenshot'}
    className={`absolute top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/80 p-3 text-lg text-white transition hover:bg-slate-800 md:block ${
      direction === 'prev' ? 'left-5' : 'right-5'
    }`}
  >
    {direction === 'prev' ? '←' : '→'}
  </button>
);
