import type { MemberPros } from '../types';

export default function CardBack({ member }: { member: MemberPros }) {
  return (
    <>
      <div
        className={`h-full flex-1 rounded-xl border-2 border-gray-600`}
        key={member.id}
      >
        Back
      </div>
    </>
  );
}
