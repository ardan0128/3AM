import { ImageOff } from 'lucide-react';
import type { MemberProps } from '../types';
import CardButton from './CardButton';

export default function CardFront({ member }: { member: MemberProps }) {
  return (
    <>
      <div
        className="flex h-full flex-col overflow-hidden rounded-xl border-2 text-white"
        style={{ borderColor: `${member.theme.mainColor}` }}
        key={member.id}
      >
        <div className="p-2 text-center text-2xl font-bold">{member.name}</div>

        <div
          className="shrink-0"
          style={{ backgroundColor: `${member.theme.shade4}` }}
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

        <CardButton
          buttonProps={{
            buttonName: 'calendar',
            buttonLink: `calendar/${member.chzzkId}`,
            target: '_self',
            mainColor: member.theme.mainColor,
            shade1: member.theme.shade1,
          }}
        />

        <CardButton
          buttonProps={{
            buttonName: 'chzzk',
            buttonLink: `${import.meta.env.VITE_CHZZK_URL}${member.chzzkId}`,
            target: '_blank',
            mainColor: member.theme.mainColor,
            shade1: member.theme.shade1,
          }}
        />

        <CardButton
          buttonProps={{
            buttonName: 'cafe',
            buttonLink: `${import.meta.env.VITE_CAFE_URL}${member.naverCafe}`,
            target: '_blank',
            mainColor: member.theme.mainColor,
            shade1: member.theme.shade1,
          }}
        />

        <CardButton
          buttonProps={{
            buttonName: 'youtube',
            buttonLink: `${import.meta.env.VITE_YOUTUBE_URL}${member.youtubeHandle}`,
            target: '_blank',
            mainColor: member.theme.mainColor,
            shade1: member.theme.shade1,
          }}
        />
      </div>
    </>
  );
}
