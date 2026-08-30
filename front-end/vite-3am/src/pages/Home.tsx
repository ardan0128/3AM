import getMembersAll from '@/api/member/api';
import MemberCard from '@/components/Home/MemberCard';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: members } = useQuery({
    queryKey: ['members'],
    queryFn: getMembersAll,
  });

  const DROP_DURATION = 500;
  const CARD_DELAY = 100;

  const flipDelay: number = (members ?? []).length * CARD_DELAY + DROP_DURATION;

  return (
    <>
      <div className="flex h-full">
        {members?.map((member, index) => {
          return (
            <MemberCard index={index} flipDelay={flipDelay} member={member} />
          );
        })}
      </div>
    </>
  );
}
