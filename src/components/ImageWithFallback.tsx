"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function ImageWithFallback({
  src,
  alt,
  fill,
  className,
  priority,
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`${className ?? ""} flex items-center justify-center text-center px-3 bg-bg-card text-text-secondary text-sm ${
          fill ? "absolute inset-0" : "w-full h-full"
        }`}
      >
        {alt}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      onError={() => setErrored(true)}
    />
  );
}