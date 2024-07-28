import {
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

import MessageCirclePng from "./../../assets/images/message-circle.png";
import MarvinPng from "./../../assets/images/marvin.png";
import TheresaPng from "./../../assets/images/theresa.png";
import SadFacePng from "./../../assets/images/sad-face.png";
import HandWavePng from "./../../assets/images/hand-wave.png";
import RegisterModal from "../../components/register-modal/RegisterModal";
import { useState } from "react";
import LoginModal from "../../components/login-modal/LoginModal";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const [IsRegistrationModalOpen, setIsRegistrationModalOpen] = useState<boolean>(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="h-screen w-screen text-white p-8 mt-6">
        <div className="sm:w-3/4 md:w-3/5 lg:w-1/2 mx-auto">
          <header className="flex flex-col gap-2 py-8">
            <h1 className="text-[28px] font-normal text-gray-200">
              Hello Jane
            </h1>
            <p className="text-gray-400">
              How are you doing today? Would you like to share something with
              the <br />
              community?{" "}
              <span role="img" aria-label="smile">
                🤗
              </span>
            </p>
          </header>

          <section className="bg-neutral-800 rounded-lg border-neutral-700 border-2 p-4 mb-4 cursor-pointer" onClick={() => setIsRegistrationModalOpen(true)}>
            <h2 className="text-gray-300 text-lg mb-4">Create post</h2>
            <div className="flex gap-3 items-center bg-neutral-900 rounded-lg px-3 py-5 mb-4">
              <img
                src={MessageCirclePng}
                className="w-15 h-15"
                alt="message image or icon"
              />
              <input
                type="text"
                placeholder="How are you feeling today?"
                className="bg-transparent flex-1 text-gray-300 outline-none"
              />
            </div>
            <div className="text-end mb-1">
              <button className="bg-blue-400 text-white rounded-md px-8 py-2">
                Post
              </button>
            </div>
          </section>

          <section className="space-y-4">
            <div className="bg-neutral-800 rounded-lg border-neutral-700 border-2 flex flex-col gap-4 p-4 cursor-pointer" onClick={() => setIsRegistrationModalOpen(true)}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={TheresaPng} className="w-8 h-8" />
                  <div>
                    <h3 className="text-gray-300 text-sm">Theresa Webb</h3>
                    <p className="text-gray-400 text-xs">5 mins ago</p>
                  </div>
                </div>
                <EllipsisHorizontalIcon className="w-6 h-6" />
              </div>
              <div className="flex gap-4 bg-neutral-900 rounded-lg px-3 py-5">
                <img src={HandWavePng} className="w-10 h-10" />
                <p className=" text-gray-300">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="flex gap-2 items-center text-gray-400 text-xs">
                <ChatBubbleLeftIcon className="w-4 h-4" />
                <span>24 comments</span>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-lg border-neutral-700 border-2 flex flex-col gap-4 p-4 cursor-pointer" onClick={() => setIsRegistrationModalOpen(true)}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={MarvinPng} className="w-8 h-8" />
                  <div>
                    <h3 className="text-gray-300 text-sm">Marvin McKinney</h3>
                    <p className="text-gray-400 text-xs">8 mins ago • Edited</p>
                  </div>
                </div>
                <EllipsisHorizontalIcon className="w-6 h-6" />
              </div>
              <div className="flex gap-4 bg-neutral-900 rounded-lg px-3 py-5">
                <img src={SadFacePng} className="w-10 h-10" />

                <p className=" text-gray-300">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="flex gap-2 items-center text-gray-400 text-xs">
                <ChatBubbleLeftIcon className="w-4 h-4" />
                <span>24 comments</span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <RegisterModal isOpen={IsRegistrationModalOpen} onClose={() => setIsRegistrationModalOpen(false)} openLogin={() => setIsLoginModalOpen(true)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} openRegistration={() => setIsRegistrationModalOpen(true)} />
    </>
  );
};

export default Home;
