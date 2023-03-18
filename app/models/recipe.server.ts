import { prisma } from "~/db.server";

import type { Recipe } from "@prisma/client";

export async function getRecipes() {
    return prisma.recipe.findMany();
}

export async function getRecipe(slug: string) {
    return prisma.recipe.findUnique({ where: { slug } });
}

export async function createRecipe(recipe: Pick<Recipe, "slug" | "title" | "description">) {
    return prisma.recipe.create({ data: recipe });
}