import { Link } from "@remix-run/react";
import { AudioPlayer } from "~/components/Audioplayer ";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-black sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              {/* <img
                className="h-full w-full object-cover"
                src="https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg"
                alt="Sonic Youth On Stage"
              /> */}
              <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-6xl md:text-6xl">
                <span className="block uppercase text-blue-500 drop-shadow-md">
                  Jerome Dean Agustin
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-blue-500 sm:max-w-3xl ">
                Software Engineer, DJ, Musician, Photographer
              </p>
              <div className="mx-auto max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <Link
                  to="/projects"
                  className="text-xl text-blue-600 underline"
                >
                  Projects
                </Link>
              </div>
              <div className="mx-auto max-w-7xl text-center">
                <Link
                  to="/posts"
                  className="text-xl text-blue-600 underline"
                >
                  Blog Posts
                </Link>
              </div>
              <div className="mx-auto max-w-7xl text-center">
                <Link
                  to="/time"
                  className="text-xl text-blue-600 underline"
                >
                  Time
                </Link>
              </div>
              {/* <div className="mx-auto max-w-7xl text-center">
                <AudioPlayer tracks={[]} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
