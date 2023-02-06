import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaceSmileIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import dynamic from "next/dynamic";

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

export default function StatusModal({ openStatusModal, setOpenStatusModal }) {
  const open = openStatusModal;
  const setOpen = setOpenStatusModal;

  const cancelButtonRef = useRef(null);

  const [statusMessage, setStatusMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [disablePost, setDisablePost] = useState(true);

  const setStatusMsgStyle = (msg) => {
    let style = "";
    msg > 80 ? (style = "text-md") : (style = "text-2xl");
    return style;
  };

  const onEmojiClick = (emojiObj) => {
    //console.log(emojiObj.getImageUrl("facebook"));
    setStatusMessage(statusMessage + emojiObj.emoji);
  };

  return (
    open && (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={open}
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full justify-center text-center items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                show={open}
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-lg">
                  <div className="flex justify-end px-2 absolute top-4 right-0">
                    <button className="bg-gray-200 rounded-full p-1">
                      <XMarkIcon
                        className="h-6 w-6 stroke-2"
                        onClick={() => {
                          setOpen(false);
                          setShowEmoji(false);
                        }}
                      />
                    </button>
                  </div>
                  <div className="p-5 flex justify-center border-b">
                    <div className="font-bold text-black text-xl">
                      Create Post
                    </div>
                  </div>
                  <div className="p-5 flex grid-cols-2 pb-2">
                    {/* Mini profile icon (START) */}
                    <div className="col-span-1 w-11 mr-2">
                      <button>
                        <Image
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white"
                          src={`/nextfb_logo_v2.png`} //TODO: update this once database is setup
                          alt={`/nextfb_logo_v2.png`} //TODO: update this once database is setup
                          width="40"
                          height="40"
                        />
                      </button>
                    </div>
                    {/* Mini profile icon (END) */}

                    {/* Post User Name (START) */}
                    <div className="col-span-1 justify-start">
                      <div className="text-sm font-medium text-black">
                        Person Name
                      </div>
                      <button className="flex text-xs justify-center rounded-md font-medium bg-gray-200 text-black px-3 py-1">
                        Public
                      </button>
                    </div>
                    {/* Post User Name (END) */}
                  </div>

                  <div className="p-3">
                    <textarea
                      className={
                        "w-full h-[80px] min-h-fit focus-within:outline-none placeholder:text-2xl placeholder:text-gray-600 " +
                        setStatusMsgStyle(statusMessage.length)
                      }
                      placeholder="What's on your mind, Person?"
                      value={statusMessage}
                      onChange={(e) => {
                        setStatusMessage(e.target.value);
                        if (e.target.value.length > 0) {
                          setDisablePost(false);
                        } else {
                          setDisablePost(true);
                        }
                      }}
                      onClick={() => {
                        if (showEmoji) setShowEmoji(!showEmoji);
                      }}
                    />

                    {/* -------------- EMOJI SECTION (START) -------------- */}
                    <button
                      className="border border-gray-200 p-1 rounded-full float-right mb-2"
                      onClick={() => setShowEmoji(!showEmoji)}
                    >
                      <FaceSmileIcon className="w-7 h-7" />
                    </button>
                  </div>

                  {showEmoji && (
                    <div className="m-3">
                      <Picker
                        width="100%"
                        height="25rem"
                        emojiStyle="facebook"
                        lazyLoadEmojis="true"
                        onEmojiClick={onEmojiClick}
                        emojiVersion="7.0.2"
                        skinTonesDisabled="true"
                        autoFocusSearch={false}
                      />
                    </div>
                  )}
                  {/* -------------- EMOJI SECTION (END) -------------- */}

                  <button
                    className={
                      "font-bold w-11/12 rounded-md ml-5 mb-3 py-1 disabled " +
                      (disablePost
                        ? "bg-gray-300 text-gray-400"
                        : "bg-blue-600 text-white")
                    }
                    disabled={disablePost}
                    aria-disabled={disablePost}
                  >
                    Post
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
  );
}
