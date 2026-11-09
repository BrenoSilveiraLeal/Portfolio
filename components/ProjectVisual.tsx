'use client';

import type { Project } from '@/data/projects';
import Image from 'next/image';
import { useRef, useState } from 'react';

export function ProjectVisual({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isStartingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const previewVideo = project.visual === 'insidely'
    ? '/videos/insidely-preview-20261109.mp4'
    : project.visual === 'casa'
      ? '/videos/casa-da-inovacao-preview-20261109-v3.mp4'
      : project.visual === 'decora'
        ? '/videos/decora-moveis-preview.mp4'
        : project.visual === 'cuidapet'
          ? '/videos/cuidapet-preview.mp4'
          : undefined;
  const hasVideoPreview = Boolean(previewVideo);
  const cover = project.visual === 'insidely'
    ? '/images/projects/insidely-preview-20261109.jpg'
    : project.visual === 'casa'
      ? '/images/projects/casa-da-inovacao-preview-20261109-v3.jpg'
      : project.visual === 'decora'
        ? '/images/projects/decora-moveis-preview.jpg'
        : project.visual === 'cuidapet'
          ? '/images/projects/cuidapet-preview.jpg'
          : project.cover;

  const startPreview = () => {
    if (!hasVideoPreview) return;
    isHoveredRef.current = true;
    if (!videoRef.current || isStartingRef.current || isPlaying) return;
    isStartingRef.current = true;
    videoRef.current.currentTime = 0;
    void videoRef.current.play().catch(() => {
      isStartingRef.current = false;
      setIsPlaying(false);
    });
  };

  const stopPreview = () => {
    if (!hasVideoPreview || !videoRef.current) return;
    isHoveredRef.current = false;
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
      preload="auto"
      aria-hidden="true"
      onPlaying={() => {
        isStartingRef.current = false;
        const video = videoRef.current;
        if (!video) return;
        if ('requestVideoFrameCallback' in video) {
          video.requestVideoFrameCallback(() => {
            if (isHoveredRef.current) setIsPlaying(true);
          });
        } else if (isHoveredRef.current) {
          setIsPlaying(true);
        }
      }}
      style={{ opacity: isPlaying ? 1 : 0 }}
    />}
    <div className="preview-overlay"><span>{project.category}</span><span>Ver projeto ↗</span></div>
  </div>;
}
