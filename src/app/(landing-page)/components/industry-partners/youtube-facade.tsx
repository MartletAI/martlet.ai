"use client";

import { useState, useCallback } from "react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

export function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleThumbnailError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      // Fallback chain: maxresdefault → sddefault → hqdefault
      if (img.src.includes("maxresdefault")) {
        img.src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
      } else if (img.src.includes("sddefault")) {
        img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }
    },
    [videoId]
  );

  if (isLoaded) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Play video: ${title}`}
      className="group relative w-full h-full cursor-pointer border-0 p-0 bg-transparent"
    >
      {/* YouTube thumbnail with fallback chain */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        width={790}
        height={400}
        loading="lazy"
        onError={handleThumbnailError}
        className="w-full h-full object-cover"
      />

      {/* Play button overlay — matches YouTube's native play button */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 68 48"
          width="68"
          height="48"
          className="transition-opacity duration-200 opacity-80 group-hover:opacity-100"
        >
          {/* Red rounded rectangle background */}
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="#f00"
          />
          {/* White triangle play icon */}
          <path d="M45 24 27 14v20" fill="#fff" />
        </svg>
      </span>
    </button>
  );
}
