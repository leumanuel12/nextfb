import Head from "next/head";

export default function Groups() {
  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APPNAME} - Groups</title>
        <meta name="description" content="Nextjs application v2" />
      </Head>

      <div className="text-lg">Groups</div>
    </div>
  );
}
