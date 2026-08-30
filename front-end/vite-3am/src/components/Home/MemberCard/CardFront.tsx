import type { MemberPros } from '../types';

export default function CardFront({ member }: { member: MemberPros }) {
  return (
    <>
      <div
        className={`h-full rounded-xl border-2 text-white`}
        style={{ borderColor: `${member.mainColor}` }}
        key={member.id}
      >
        {member.name}
      </div>
    </>
  );
}
