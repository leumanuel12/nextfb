import { PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function CreateStory() {
  return (
    <div className="stories-card-base overflow-hidden">
      {/* Profile pic in stories  */}
      <p className="h-32 flex bg-black rounded-t-xl">
        <Image
          className="bg-black rounded-t-lg object-contain"
          src={`/nextfb_logo_v2.png`}
          alt="create story"
          width="112"
          height="128"
        />
      </p>

      {/* Plus icon */}
      <p className="rounded-full bg-white p-1  absolute top-28 left-9">
        <span className="flex m-auto p-1 rounded-full bg-blue-600 text-white">
          <PlusIcon className="h-6 w-6 stroke-2" />
        </span>
      </p>

      <p className="h-16 w-full bg-white-500 rounded-b-lg px-2 z-10">
        <span className="absolute bottom-2 pl-4 text-xs font-medium">
          Create story
        </span>
      </p>
    </div>
  );
}
