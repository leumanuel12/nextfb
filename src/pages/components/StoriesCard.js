export default function StoriesCard() {
  return (
    <div className="stories-card-base">
      {/* story picture */}
      <p className="h-32 w-full bg-transparent rounded-b-lg px-2 overflow-clip">
        {/* mini profile icon */}
        <span className="w-9 h-9 rounded-full bg-blue-500 p-1  absolute top-3 left-3" />

        <span className="absolute bottom-2 pl-1 w-24 text-xs font-medium overflow-hidden">
          Name Here
        </span>
      </p>
    </div>
  );
}
