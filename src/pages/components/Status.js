import {
  CameraIcon,
  FaceSmileIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import StatusModal from "./StatusModal";
import { useState } from "react";

export default function Status() {
  const [openStatusModal, setOpenStatusModal] = useState(false);

  function statusModalHandle() {
    setOpenStatusModal(!openStatusModal);
  }

  return (
    <div className="post-container">
      <StatusModal
        openStatusModal={openStatusModal}
        setOpenStatusModal={setOpenStatusModal}
      />
      <div className="post-container-content">
        <Image
          className="w-10 h-10 rounded-full mr-4 object-contain"
          src={`/nextfb_logo_v2.png`}
          alt="create story"
          width="32"
          height="32"
        />

        <button
          className="sm:h-10 w-10/12 rounded-full hover:bg-gray-200 bg-gray-100 px-4 py-1 overflow-hidden relative"
          onClick={() => statusModalHandle()}
        >
          <span className="absolute left-3 top-2 text-gray-500">
            What&apos;s on your mind, Person?
          </span>
        </button>
      </div>

      <div className="border-b border-gray-300 pb-3 w-11/12 mx-auto" />

      <div className="mt-2 block lg:grid grid-cols-3">
        <button className="share-buttons">
          <CameraIcon className="h-6 w-6 text-red-500 mr-2" /> Live video
        </button>
        <button className="share-buttons">
          <PhotoIcon className="h-6 w-6 text-green-500 mr-2" /> Photo/video
        </button>
        <button className="share-buttons">
          <FaceSmileIcon className="h-6 w-6 text-yellow-500 mr-2" />
          Feeling/activity
        </button>
      </div>
    </div>
  );
}
