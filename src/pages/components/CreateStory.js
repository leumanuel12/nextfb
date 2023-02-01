import { PlusIcon } from "@heroicons/react/24/outline";

export default function CreateStory() {
  return (
    <div className="stories-card-base">
      {/* Profile pic in stories */}
      <p className="h-32 w-full bg-gray-300 rounded-t-lg" />

      {/* Plus icon */}
      <p className="rounded-full bg-white p-1  absolute top-28 left-9">
        <span className="flex m-auto p-1 rounded-full bg-blue-600 text-white">
          <PlusIcon className="h-6 w-6 stroke-2" />
        </span>
      </p>

      <p className="h-16 w-full bg-white rounded-b-lg px-2">
        <span className="absolute bottom-2 pl-4 text-xs font-medium">
          Create story
        </span>
      </p>
    </div>
  );
}
