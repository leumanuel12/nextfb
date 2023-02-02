import Head from "next/head";

export default function Gaming() {
  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APPNAME} - Gaming</title>
        <meta name="description" content="Nextjs application v2" />
      </Head>

      <div className="text-lg">Gaming</div>
    </div>
  );
}
