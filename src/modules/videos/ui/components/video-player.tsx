"use client";
import { MUX_PLAYER_ACCENT_COLOR } from "@/constants";
import Muxplayer from "@mux/mux-player-react";
import { THUMBNAIL_FALLBACK } from "../../constants";

interface VideoPlayerProps {
  playbackId?: string | null | undefined;
  thumbnailUrl?: string | null | undefined;
  autoPlay?: boolean;
  onPlay?: () => void;
}


export const VideoPlayerSkeleton = () => {
  return <div className="aspect-video bg-black/50 rounded-xl"/>
}



export const VideoPlayer = ({
  playbackId,
  thumbnailUrl,
  autoPlay,
  onPlay,
}: VideoPlayerProps) => {
//   if (!playbackId) return null;

  return (
    <Muxplayer
      playbackId={playbackId || ""}
      poster={thumbnailUrl || THUMBNAIL_FALLBACK}
      playerInitTime={0}
      autoPlay={autoPlay}
      thumbnailTime={0}
      className="w-full h-full object-contain"
      accentColor={MUX_PLAYER_ACCENT_COLOR}
      onPlay={onPlay}
      
    />
  );
};
