import axios from 'axios';
import { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
  userId: number;
  body: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error(`Error fetching data`, error);
      });
  }, []);

  return (
    <>
      <h1>page: Home</h1>
      <a>Test</a>
      {posts.map((post) => {
        return (
          <div className="text-white" key={post.id}>
            {post.title}
          </div>
        );
      })}
    </>
  );
}
