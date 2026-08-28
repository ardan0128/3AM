import type { Member } from '@/types/Member';
import type { Team } from '@/types/Team';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Post = {
  id: number;
  title: string;
  userId: number;
  body: string;
};

export default function Home() {
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await axios.get<Post[]>(
        `https://jsonplaceholder.typicode.com/posts`
      );

      return res.data;
    },
  });

  // const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   axios
  //     .get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
  //     .then((res) => {
  //       setPosts(res.data);
  //     })
  //     .catch((error) => {
  //       console.error(`Error fetching data`, error);
  //     });
  // }, []);

  return (
    <>
      <h1>page: Home</h1>
      <a>Test</a>
      {posts?.map((post) => {
        return (
          <div className="text-white" key={post.id}>
            {post.title}
          </div>
        );
      })}
    </>
  );
}
