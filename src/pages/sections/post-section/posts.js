import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

TimeAgo.addDefaultLocale(en);

export default function Posts({ posts }) {
  if (!posts) return;

  return (
    <>
      {posts
        .map((post) => {
          return (
            <div
              key={post._id.toString()}
              className="post-container mt-4 relative"
            >
              <div className="flex grid-cols-3 pb-2">
                {/* Mini profile icon (START) */}
                <div className="col-span-1 w-11 mr-2">
                  <button>
                    <Image
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white"
                      src={post.image ? post.image : `/nextfb_logo_v2.png`} //TODO: update this once database is setup
                      alt={post.image ? post.image : `/nextfb_logo_v2.png`} //TODO: update this once database is setup
                      width="40"
                      height="40"
                    />
                  </button>
                </div>
                {/* Mini profile icon (END) */}

                {/* Poster Name and Elapsed time (START) */}
                <div className="col-span-1 w-full justify-start">
                  <div className="text-sm font-medium hover:underline">
                    <Link href="#">{post.name}</Link>
                  </div>
                  <div className="flex text-xs">
                    <ReactTimeAgo date={parseInt(post.date)} locale="en-US" />
                    <GlobeAmericasIcon className="pl-1 h-5 w-5" />
                  </div>
                </div>
                {/* Poster Name and Elapsed time (END) */}

                {/* Post settings (START) */}
                <div className="col-span-1 flex justify-end px-2 md:absolute md:top-2 md:right-0">
                  <button className="md:hover:bg-gray-200 rounded-full p-1">
                    <EllipsisHorizontalIcon className="h-6 w-6 stroke-2" />
                  </button>
                  <button className="md:hover:bg-gray-200 rounded-full p-1">
                    <XMarkIcon className="h-6 w-6 stroke-2" />
                  </button>
                </div>
                {/* Post settings (END) */}
              </div>

              <div className="p-1">{post.details}</div>

              {post.image ? (
                <button>
                  <Image
                    className="object-contain p-1"
                    src={post.image}
                    alt={post.image}
                    width="620"
                    height="400"
                    priority={post._id.toString()}
                    quality="40"
                  />
                </button>
              ) : null}

              {/* Comments / Reactions / Share Section */}
              <div className="border-t border-gray-200 grid-cols-2 pt-1 flex justify-center">
                <button className="post-reaction">Like</button>
                <button className="post-reaction">Comment</button>
                <button className="post-reaction">Share</button>
              </div>
            </div>
          );
        })
        .reverse()}
    </>
  );
}
