import type { MemberProps } from '../types';

export default function CardBack({ member }: { member: MemberProps }) {
  return (
    <>
      <div
        className={`h-full flex-1 rounded-xl border-2 border-gray-600`}
        style={{ backgroundColor: `${member.theme.cardBackColor}` }}
        key={member.id}
      ></div>
    </>
  );
}
