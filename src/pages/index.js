import Head from "next/head";
import NewsFeed from "./components/Posts";
import Status from "./components/Status";
import StoriesPanel from "./components/StoriesPanel";

export default function Newsfeed() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Nextjs application v2" />
      </Head>

      <div className="w-10/12 md:w-6/12">
        <StoriesPanel />
        <Status />
        <NewsFeed />
      </div>
    </>
  );
}
