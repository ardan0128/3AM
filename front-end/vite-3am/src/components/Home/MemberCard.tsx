import type { MemberPros } from './types';

export default function MemberCard(member: MemberPros) {
  return (
    <>
      <div
        className={`flex-1 rounded-xl border-2 text-white`}
        style={{ borderColor: `${member.mainColor}` }}
        key={member.id}
      >
        {member.name}
      </div>
    </>
  );
}
