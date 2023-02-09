import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useGlobalContext } from "./context/globalcontext";

export default function Login() {
  const { loggedIn, setLoggedIn } = useGlobalContext();

  //useEffect(() => {
  //  console.log(loggedIn);
  //}, []);

  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APPNAME} - Login</title>
        <meta name="description" content="Nextjs application v2" />
      </Head>

      <div className="md:flex grid-cols-2 justify-center">
        <div className="col-span-1 md:min-h-screen md:-mt-20 flex justify-center items-center mt-10">
          <div className="w-[70%]">
            <div className="text-6xl text-blue-600 font-bold">NextFB</div>
            <div className="block mt-4 text-3xl text-black">
              Connect with friends and the world around you on NextFB.
            </div>
            <Link
              href="/"
              className="block mt-4 border w-72 border-gray-400 p-2 rounded-md hover:bg-blue-600 hover:text-white"
              onClick={() => setLoggedIn(true)}
            >
              Continue without logging in for now.
            </Link>
          </div>
        </div>
        <div className="col-span-1 md:min-h-screen md:-mt-20 flex justify-center items-center mt-10 md:mr-10">
          <form className="p-4 bg-white rounded-md shadow-lg">
            <input
              type="text"
              placeholder="Email or phone number"
              className="p-3 w-72 sm:w-96 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="block mt-3 p-3 w-72 sm:w-96 border border-gray-300 rounded-md"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold mt-3 p-3 w-72 sm:w-96 rounded-md">
              Log In
            </button>
            <div className="text-blue-600 flex justify-center py-4 border-b border-gray-300 hover:underline">
              Forgot password?
            </div>

            <div className="flex justify-center w-full">
              <button className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold mt-5 mb-2 p-3 w-52 rounded-md">
                Create new account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};
