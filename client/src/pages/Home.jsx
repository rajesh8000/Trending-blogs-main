import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-20 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-5xl">Welcome to my Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Explore a diverse array of blog posts covering a wide spectrum of
          topics related to tech work, mobile applications, health tech
          innovations, and the dynamic world of startups. From insightful
          discussions on the latest trends in software development and
          engineering to practical guides for building and scaling successful
          tech ventures, our blog is your go-to resource for staying informed
          and inspired in today's fast-paced tech industry.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>

      {posts.length > 0 && (
        <div className="flex justify-center mt-8">
          <Link
            to={'/search'}
            className="text-lg text-teal-500 hover:underline text-center"
          >
            View all posts
          </Link>
        </div>
      )}
    </div>
  );
}
