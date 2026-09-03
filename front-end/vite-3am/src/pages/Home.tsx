import getMembersAll from '@/api/member/api';
import CardList from '@/components/Home/Card/CardList';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: members, isLoading } = useQuery({
    queryKey: ['members'],
    queryFn: getMembersAll,
    initialData: [],
  });

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <CardList members={members} />
      </div>
    </>
  );
}
