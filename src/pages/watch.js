import Head from "next/head";

export default function Watch() {
  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APPNAME} - Watch</title>
        <meta name="description" content="Nextjs application v2" />
      </Head>

      <div className="text-lg">Watch</div>
    </div>
  );
}
