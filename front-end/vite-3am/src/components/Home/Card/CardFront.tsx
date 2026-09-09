import { ImageOff } from 'lucide-react';
import type { MemberProps } from '../types';

export default function CardFront({ member }: { member: MemberProps }) {
  return (
    <>
      <div
        className="flex h-full flex-col rounded-xl border-2 text-white"
        style={{ borderColor: `${member.mainColor}` }}
        key={member.id}
      >
        <div className="p-2 text-center text-2xl font-bold">{member.name}</div>
        <div
          className="shrink-0"
          style={{ backgroundColor: `${member.mainColor}` }}
        >
          {member.profileImageUrl ? (
            <img
              className="block aspect-square w-full object-cover"
              src={member.profileImageUrl}
              alt="TEST"
            />
          ) : (
            <ImageOff className="block aspect-square h-full w-full object-cover" />
          )}
        </div>
        <div className="flex min-h-0 flex-1 flex-col p-4">
          <div className="flex flex-1 items-center">
            <a href={member.chzzkId} target="_blank" rel="noopener noreferrer">
              calendar
            </a>
          </div>
          <div className="flex flex-1 items-center">
            <a
              href={`${import.meta.env.VITE_CHZZK_URL}${member.chzzkId}`}
              target="_blank"
            >
              chzzk
            </a>
          </div>
          <div className="flex flex-1 items-center">
            <a
              href={`${import.meta.env.VITE_CAFE_URL}${member.naverCafe}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              cafe
            </a>
          </div>
          <div className="flex flex-1 items-center">
            <a
              href={`${import.meta.env.VITE_YOUTUBE_URL}${member.youtubeHandle}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              youtube
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
