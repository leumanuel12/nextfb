import {
  BookOpenIcon,
  FilmIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import CreateStory from "./CreateStory";
import StoriesCard from "./StoriesCard";
import useSWR from "swr";

const dataFetch = async () => {
  //mock images temporary - note-to-self: consider use useSWR()
  const result = [
    {
      id: "0",
      name: "User 0",
      imgurl: "/aj raval.jpg",
    },
    {
      id: "1",
      name: "User 1",
      imgurl: "/witcher3.png",
    },
    {
      id: "2",
      name: "User 2",
      imgurl: "/witcher3_1.png",
    },
    {
      id: "3",
      name: "User 3",
      imgurl: "/witcher3_2.png",
    },
    {
      id: "4",
      name: "User 4",
      imgurl: "/witcher3_3.png",
    },
  ];

  return result;
};

export default function StoriesPanel() {
  const [activePanel, setActivePanel] = useState("stories");

  const activeButton = " border-b-4 border-blue-600 text-blue-600 ";
  const notActiveButton = " hover:bg-gray-100 hover:rounded-lg hover:mb-1";
  const activeButtonText = " text-blue-600 ";

  const { data, error } = useSWR("stories", dataFetch);

  //console.log(data);

  return (
    <div className="shadow-md my-4 rounded-lg">
      <div className="stories-container rounded-t-lg pt-1">
        <button
          onClick={() => setActivePanel("stories")}
          className={
            "stories-buttons" +
            (activePanel === "stories" ? activeButton : notActiveButton)
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
            "stories-buttons" +
            (activePanel === "reels" ? activeButton : notActiveButton)
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
            "stories-buttons" +
            (activePanel === "rooms" ? activeButton : notActiveButton)
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

      <div className="stories-container p-3 rounded-b-lg flex overflow-x-auto relative scroll">
        {activePanel === "stories" && (
          /* ------------- CREATE STORY CARD (START) ------------- */
          <>
            <CreateStory />

            {data
              ? data.map((imgs) => {
                  //console.log(imgs.id);
                  return (
                    <StoriesCard
                      id={imgs.id}
                      name={imgs.name}
                      imgurl={imgs.imgurl}
                      key={imgs.id}
                    />
                  );
                })
              : null}
          </>

          /* ------------- CREATE STORY CARD (END) ------------- */
        )}
      </div>
    </div>
  );
}
