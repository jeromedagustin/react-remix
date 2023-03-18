import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getProjects } from "~/models/projects.server";

export const loader = async () => {
    return json({ projects: await getProjects() });
};

export default function Time() {
    const { projects } = useLoaderData<typeof loader>();
    return (
        <main className="relative min-h-screen bg-black sm:flex sm:items-center sm:justify-center">
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-6xl md:text-6xl">
                    <span className="block uppercase text-blue-500 drop-shadow-md">
                        Who Am I
                    </span>
                </h1>
                <h2 className="text-center uppercase text-blue-500 drop-shadow-md">and why it matters</h2>
                <div className="text-blue-500">Senior Software Engineer at Pennymac</div>
                <div className="text-blue-500">DJ multiple events in Santa Barbara</div>
                <div className="text-blue-500">Worked for Sonos from November 2012 to May 2018</div>
                <div className="text-blue-500">Worked as an audio technician for Formula Drift</div>
                <div className="text-blue-500">Graduated with Computer Engineering degree from California Polytechnic University, Pomona</div>
                <div className="text-blue-500">Started surfing in high school</div>
                <div className="text-blue-500">Started playing guitar in 6th grade</div>
                <div className="text-blue-500">Started skateboarding in first grade</div>
                <div className="text-blue-500">Started gaming in first grade</div>
                <div className="text-blue-500">Raised in Camarillo, California</div>
                <div className="text-blue-500">Born Jerome Dean Agustin in Panorama City, California</div>
            </div>
        </main>
    );
}