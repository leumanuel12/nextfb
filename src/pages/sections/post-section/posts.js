import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);

export default function Posts({ posts }) {
  if (!posts) return;

  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} className="post-container mt-4">
            <p>{post.name}</p>
            <p>
              <ReactTimeAgo date={post.date} locale="en-US" />
            </p>
            <p>{post.details}</p>
          </div>
        );
      })}
    </>
  );
}
