import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getProjects } from "~/models/projects.server";

export const loader = async () => {
    return json({ projects: await getProjects() });
};

export default function Posts() {
    const { projects } = useLoaderData<typeof loader>();
    return (
        <main>
            <Link to="admin" className="text-red-600 underline">
                Admin
            </Link>
            <h1>Projects</h1>
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
        </main>
    );
}