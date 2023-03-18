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
            <div className="relative sm:pb-16 sm:pt-8">
                <Link to="admin" className="text-red-600 underline">
                    Admin
                </Link>
                <h1 className="text-red-600">Projects</h1>
                <ul>
                    {projects.map((project: any) => (
                        <li key={project.slug}>
                            <Link
                                to={project.slug}
                                className="text-blue-600 underline"
                            >
                                {project.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}