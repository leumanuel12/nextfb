import { FilmIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import CreateStory from "./CreateStory";
import StoriesCard from "./StoriesCard";

export default function StoriesPanel() {
  const [activePanel, setActivePanel] = useState("stories");

  const activeButton = " border-b-4 border-blue-600 text-blue-600 ";
  const activeButtonText = " text-blue-600 ";

  return (
    <div className="shadow-lg my-4">
      <div className="stories-container rounded-t-lg">
        <button
          onClick={() => setActivePanel("stories")}
          className={
            "stories-buttons" + (activePanel === "stories" ? activeButton : "")
          }
        >
          <BookOpenIcon
            className={
              "h-5 w-5 mr-1 mt-1" +
              (activePanel === "stories" ? activeButtonText : "")
            }
          />
          Stories
        </button>
        <button
          onClick={() => setActivePanel("reels")}
          className={
            "stories-buttons" + (activePanel === "reels" ? activeButton : "")
          }
        >
          <FilmIcon
            className={
              "h-5 w-5 mr-1 mt-1" +
              (activePanel === "reels" ? activeButtonText : "")
            }
          />
          Reels
        </button>
        <button
          onClick={() => setActivePanel("rooms")}
          className={
            "stories-buttons" + (activePanel === "rooms" ? activeButton : "")
          }
        >
          <VideoCameraIcon
            className={
              "h-5 w-5 mr-1 mt-1" +
              (activePanel === "rooms" ? activeButtonText : "")
            }
          />
          Rooms
        </button>
      </div>

      <div className="stories-container p-3 rounded-b-lg flex overflow-x-auto relative">
        {activePanel === "stories" && (
          /* ------------- CREATE STORY CARD (START) ------------- */
          <>
            <CreateStory />
            <StoriesCard />
            <StoriesCard />
            <StoriesCard />
            <StoriesCard />
            <StoriesCard />
            <StoriesCard />
            <StoriesCard />
          </>

          /* ------------- CREATE STORY CARD (END) ------------- */
        )}
      </div>
    </div>
  );
}
