import { ExternalLink, ImageOff } from 'lucide-react';
import type { MemberProps } from '../types';

export default function CardFront({ member }: { member: MemberProps }) {
  return (
    <>
      <div
        className="flex h-full flex-col overflow-hidden rounded-xl border-2 text-white"
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

        <div className="flex min-h-0 flex-1 flex-col">
          <div
            className="relative flex flex-1 items-center justify-between px-2"
            style={{
              backgroundImage: `linear-gradient(to right top, #ABA089, #7F755F)`,
            }}
          >
            <span>calendar</span>
            <ExternalLink />
            <a
              href={member.chzzkId}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            />
          </div>

          <div
            className="relative flex flex-1 items-center justify-between px-2"
            style={{
              backgroundImage: `linear-gradient(to right top, #ABA089, #7F755F)`,
            }}
          >
            <span>chzzk</span>
            <ExternalLink />
            <a
              href={`${import.meta.env.VITE_CHZZK_URL}${member.chzzkId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            />
          </div>

          <div
            className="relative flex flex-1 items-center justify-between px-2"
            style={{
              backgroundImage: `linear-gradient(to right top, #ABA089, #7F755F)`,
            }}
          >
            <span>cafe</span>
            <ExternalLink />
            <a
              href={`${import.meta.env.VITE_CAFE_URL}${member.naverCafe}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            />
          </div>

          <div
            className="relative flex flex-1 items-center justify-between px-2"
            style={{
              backgroundImage: `linear-gradient(to right top, #ABA089, #7F755F)`,
            }}
          >
            <span>youtube</span>
            <ExternalLink />
            <a
              href={`${import.meta.env.VITE_YOUTUBE_URL}${member.youtubeHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
