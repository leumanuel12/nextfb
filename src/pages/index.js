import Head from "next/head";
import Posts from "./sections/post-section/posts";
import Status from "./components/Status";
import StoriesPanel from "./sections/stories-section/StoriesPanel";

export async function getServerSideProps() {
  //mock data for now

  const contents = [
    {
      postid: "1",
      userid: "100",
      name: "User Name 1",
      sharewith: "public",
      date: 1675323251238,
      image: "",
      details:
        "test test test test test test test test test test test test test test",
    },
    {
      postid: "2",
      userid: "100",
      name: "User Name 1",
      sharewith: "public",
      date: 1675323522050,
      image: "",
      details:
        "test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2",
    },
    {
      postid: "3",
      userid: "101",
      name: "User Name 2",
      sharewith: "public",
      date: 1675324053100,
      image: "",
      details:
        "test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3",
    },
    {
      postid: "4",
      userid: "102",
      name: "User Name 3",
      sharewith: "public",
      date: 1675312953210,
      image: "",
      details:
        "test4 test4 test4 test4 test4 test4 test4 test4 test4 test4 test4 test4 test4 test4",
    },
    {
      postid: "5",
      userid: "103",
      name: "User Name 4",
      sharewith: "public",
      date: 1675312953210,
      image: "",
      details:
        "test5 test5 test5 test5 test5 test5 test5 test5 test5 test5 test5 test5 test5 test5",
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
