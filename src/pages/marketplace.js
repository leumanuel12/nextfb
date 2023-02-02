import Head from "next/head";

export default function MarketPlace() {
  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APPNAME} - Market Place</title>
        <meta name="description" content="Nextjs application v2" />
      </Head>

      <div className="text-lg">Market Place</div>
    </div>
  );
}
