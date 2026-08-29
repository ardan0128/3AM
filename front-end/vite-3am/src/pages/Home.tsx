import getMembersAll from '@/api/member/api';
import MemberCard from '@/components/Home/MemberCard';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: members } = useQuery({
    queryKey: ['members'],
    queryFn: getMembersAll,
  });

  return (
    <>
      <div className="flex h-full gap-4 p-4">
        {members?.map((member) => {
          return <MemberCard {...member} />;
        })}
      </div>
    </>
  );
}
