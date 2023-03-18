import { prisma } from "~/db.server";

import type { Project } from "@prisma/client";

export async function getProjects() {
    return prisma.project.findMany();
}

export async function getProject(slug: string) {
    return prisma.project.findUnique({ where: { slug } });
}

export async function createProject(project: Pick<Project, "slug" | "title" | "description">) {
    return prisma.project.create({ data: project });
}