import Head from "next/head";

export default function Login() {
  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APPNAME} - Login</title>
        <meta name="description" content="Nextjs application v2" />
      </Head>
    </div>
  );
}
