import Head from "next/head";
import Posts from "./sections/post-section/posts";
import Status from "./components/Status";
import StoriesPanel from "./sections/stories-section/StoriesPanel";
import clientPromise from "lib/mongodb";

export async function getServerSideProps() {
  try {
    const response = await clientPromise;
    const db = response.db("posts");
    const result = await db.collection("posts").find({}).toArray();

    //console.log(result);

    return {
      props: {
        posts: JSON.parse(JSON.stringify(result)),
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default function Newsfeed({ posts }) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APPNAME} - Home</title>
        <meta name="description" content="Nextjs application v2" />
      </Head>

      <div className="w-screen sm:w-10/12 md:w-6/12">
        <StoriesPanel />
        <Status />
        <Posts posts={posts} />
      </div>
    </>
  );
}
