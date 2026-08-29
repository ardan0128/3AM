import getMembersAll from '@/api/member/api';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: members } = useQuery({
    queryKey: ['members'],
    queryFn: getMembersAll,
  });

  return (
    <>
      <h1>page: Home</h1>
      <a>Test</a>
      {members?.map((member) => {
        return (
          <div className="text-white" key={member.id}>
            {member.name}
          </div>
        );
      })}
    </>
  );
}
