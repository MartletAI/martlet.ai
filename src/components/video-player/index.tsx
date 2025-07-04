"use client";

import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  ariaLabel?: string;
}

export default function VideoPlayer({
  src,
  poster,
  ariaLabel = "Martlet AI platform demo: Key features and workflows for healthcare providers",
}: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => setIsLoading(false);
    const handleError = () => setIsError(true);

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    // Check if video is already loaded (cached)
    if (video.readyState >= 3) {
      setIsLoading(false);
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <figure
      className="relative flex items-center justify-center w-full max-w-[965px] aspect-[965/545] bg-white rounded-[25px] shadow-[0px_25px_80px_0px_#0483FD1A]"
      aria-label={ariaLabel}
    >
      {/* Loading state */}
      {isLoading ? (
        <div
          className="absolute inset-0 flex items-center justify-center rounded-[25px] bg-white"
          aria-live="polite"
          aria-busy="true"
        >
          <div
            className="animate-spin rounded-full h-10 w-10 border-t-1 border-b-1 border-blue-500"
            aria-hidden="true"
          ></div>
          <span className="sr-only">Loading video...</span>
        </div>
      ) : null}

      {/* Error state */}
      {isError ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white rounded-[25px]"
          aria-live="assertive"
        >
          <p role="alert">
            Failed to load video. Please refresh or try again later.
          </p>
        </div>
      ) : null}

      {/* Video element */}
      <video
        ref={videoRef}
        controls
        autoPlay
        loop
        muted
        preload="metadata"
        poster={poster}
        className={`w-[100%] h-[100%] rounded-[25px] ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        playsInline
        disablePictureInPicture
        aria-describedby="video-desc"
      >
        <source src={`${src}.mp4`} type="video/mp4" />
        <source src={`${src}.webm`} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <figcaption id="video-desc" className="sr-only">
        A screen recording showing {ariaLabel}
      </figcaption>
    </figure>
  );
}
