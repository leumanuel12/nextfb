import Head from "next/head";
import Posts from "./sections/post-section/posts";
import Status from "./components/Status";
import StoriesPanel from "./sections/stories-section/StoriesPanel";

export async function getServerSideProps() {
  //mock data for now

  const contents = [
    {
      id: "1",
      name: "Post Name 1",
      date: 1675323251238,
      image: "",
      details:
        "test test test test test test test test test test test test test test",
    },
    {
      id: "2",
      name: "Post Name 2",
      date: 1675323522050,
      image: "",
      details:
        "test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2",
    },
    {
      id: "3",
      name: "Post Name 3",
      date: 1675324053100,
      image: "",
      details:
        "test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3",
    },
    {
      id: "4",
      name: "Post Name 4",
      date: 1675323953210,
      image: "",
      details:
        "test4 test4 test4 test4 test4 test4 test4 test4 test4 test4 test4 test4 test4 test4",
    },
  ];

  //console.log(contents);

  return {
    props: {
      posts: contents,
    },
  };
}

export default function Newsfeed({ posts }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Nextjs application v2" />
      </Head>

      <div className="w-10/12 md:w-6/12">
        <StoriesPanel />
        <Status />
        <Posts posts={posts} />
      </div>
    </>
  );
}
