import getMembersAll from '@/api/member/api';
import CardList from '@/components/Home/Card/CardList';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: members = [], isPending } = useQuery({
    queryKey: ['members'],
    queryFn: getMembersAll,
  });

  if (isPending) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <div className="flex h-full">
        <CardList members={members} />
      </div>
    </>
  );
}
