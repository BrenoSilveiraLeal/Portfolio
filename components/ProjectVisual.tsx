'use client';

import type { Project } from '@/data/projects';
import Image from 'next/image';
import { useRef, useState } from 'react';

export function ProjectVisual({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isStartingRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const previewVideo = project.visual === 'insidely'
    ? '/videos/insidely-preview.mp4'
    : project.visual === 'casa'
      ? '/videos/casa-da-inovacao-preview-20261109-v3.mp4'
      : undefined;
  const hasVideoPreview = Boolean(previewVideo);
  const cover = project.visual === 'insidely'
    ? '/images/projects/insidely-preview.jpg'
    : project.visual === 'casa'
      ? '/images/projects/casa-da-inovacao-preview-20261109-v3.jpg'
      : project.cover;

  const startPreview = () => {
    if (!hasVideoPreview || !videoRef.current || isStartingRef.current || isPlaying) return;
    isStartingRef.current = true;
    videoRef.current.currentTime = 0;
    void videoRef.current.play().catch(() => {
      isStartingRef.current = false;
      setIsPlaying(false);
    });
  };

  const stopPreview = () => {
    if (!hasVideoPreview || !videoRef.current) return;
    isStartingRef.current = false;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return <div
    className={`project-visual project-visual-${project.visual}`}
    onMouseEnter={startPreview}
    onMouseLeave={stopPreview}
    onFocus={startPreview}
    onBlur={stopPreview}
  >
    {cover ? <Image
      src={cover}
      alt={`Captura de tela do projeto ${project.name}`}
      fill
      sizes="(max-width: 800px) 92vw, 80vw"
      style={{ opacity: isPlaying ? 0 : 1 }}
    /> : <div className="project-asset-needed"><span>Captura do projeto</span><strong>{project.name}</strong><small>Imagem em preparação</small></div>}
    {hasVideoPreview && <video
      ref={videoRef}
      className="project-video-preview"
      src={previewVideo}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      onPlaying={() => {
        isStartingRef.current = false;
        setIsPlaying(true);
      }}
      style={{ opacity: isPlaying ? 1 : 0 }}
    />}
    <div className="preview-overlay"><span>{project.category}</span><span>Ver projeto ↗</span></div>
  </div>;
}
