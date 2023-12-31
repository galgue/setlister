import { useCallback, useRef } from "react";

const FADE_SPEED = 0.2;

export const useVolume = (audio?: HTMLAudioElement) => {
  const isFadeInRef = useRef(false);

  const mute = useCallback(() => {
    if (!audio) return;
    audio.volume = 0;
  }, [audio]);

  const unmute = useCallback(() => {
    if (!audio) return;
    audio.volume = 1;
  }, [audio]);

  const fadeOut = useCallback(async () => {
    if (!audio) return;
    isFadeInRef.current = false;
    while (audio.volume > 0 && !isFadeInRef.current) {
      audio.volume = Math.max(0, audio.volume - FADE_SPEED);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }, [audio]);

  const fadeIn = useCallback(async () => {
    if (!audio) return;
    isFadeInRef.current = true;
    while (audio.volume < 1 && isFadeInRef.current) {
      audio.volume = Math.min(1, audio.volume + FADE_SPEED);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }, [audio]);

  return {
    mute,
    unmute,
    fadeOut,
    fadeIn,
  };
};
