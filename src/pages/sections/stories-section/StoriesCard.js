import Image from "next/image";

//TODO: Once database is setup, update the image url to become dynamic. pass it as props in the StoriesCard.js

export default function StoriesCard({ id, name, imgurl }) {
  return (
    <button className="stories-card-base flex bg-black rounded-xl">
      {/* story picture */}
      <Image
        className="bg-black rounded-lg object-contain w-[112px] h-[192px]"
        src={imgurl}
        alt="create story"
        width="112"
        height="192"
        priority={id}
      />

      {/* mini profile icon */}
      <p className="w-10 h-10 rounded-full bg-blue-500 p-1  absolute top-2 left-2">
        <Image
          className="bg-black w-[32px] h-[32px] rounded-full object-contain"
          src={imgurl}
          alt="create story"
          width="32"
          height="32"
          priority={id}
        />
      </p>

      <p className="absolute bottom-2 pl-2 w-24 text-xs text-white font-medium overflow-hidden">
        {name}
      </p>
    </button>
  );
}
