import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

//dynamic metadata
//reserved function
//executed when page is rendered
export async function generateMetadata() {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `Browse the latest ${numberOfPosts} posts`,
    description: "Browse all our posts",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
