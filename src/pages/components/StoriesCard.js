import Image from "next/image";
export default function StoriesCard() {
  return (
    <div className="stories-card-base">
      {/* story picture */}
      <p className="h-32 flex bg-black rounded-t-xl">
        <Image
          className="bg-black rounded-t-lg object-contain"
          src={`/witcher3.png`}
          alt="create story"
          width="112"
          height="192"
        />

        {/* mini profile icon */}
        <span className="w-9 h-9 rounded-full bg-blue-500 p-1  absolute top-3 left-3" />

        <span className="absolute bottom-2 pl-1 w-24 text-xs font-medium overflow-hidden">
          Name Here
        </span>
      </p>
    </div>
  );
}
