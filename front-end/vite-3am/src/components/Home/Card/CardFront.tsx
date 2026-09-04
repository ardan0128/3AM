import type { MemberPros } from '../types';

export default function CardFront({ member }: { member: MemberPros }) {
  return (
    <>
      <div
        className="flex h-full flex-col rounded-xl border-2 text-white"
        style={{ borderColor: `${member.mainColor}` }}
        key={member.id}
      >
        <div className="p-2 text-center text-2xl font-bold">{member.name}</div>
        <div className="shrink-0">
          <img
            className="block w-full"
            src="/images/profiles/molala.webp"
            alt="TEST"
          />
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
            <a href={member.chzzkId} target="_blank" rel="noopener noreferrer">
              cafe
            </a>
          </div>
          <div className="flex flex-1 items-center">
            <a href={member.chzzkId} target="_blank" rel="noopener noreferrer">
              youtube
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
