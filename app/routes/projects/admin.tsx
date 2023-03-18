import { json } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
} from "@remix-run/react";

import { getProjects } from "~/models/projects.server";

export const loader = async () => {
  return json({ projects: await getProjects() });
};

export default function ProjectsAdmin() {
  const { projects } = useLoaderData<typeof loader>();

  console.log('pro', projects);


  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Projects Admin
      </h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <ul>
            {projects.map((projects) => (
              <li key={projects.slug}>
                <Link
                  to={`/projects/${projects.slug}`}
                  className="text-blue-600 underline"
                >
                  {projects.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}