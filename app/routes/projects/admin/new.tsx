import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import invariant from "tiny-invariant";

import { createProject } from "~/models/projects.server";

export const action = async ({ request }: ActionArgs) => {
    const formData = await request.formData();

    const title = formData.get("title");
    const slug = formData.get("slug");
    const description = formData.get("description");

    const errors = {
        title: title ? null : "Title is required",
        slug: slug ? null : "Slug is required",
        description: description ? null : "Description is required",
    };
    const hasErrors = Object.values(errors).some(
        (errorMessage) => errorMessage
    );
    if (hasErrors) {
        return json(errors);
    }

    // TODO: remove me
    await new Promise((res) => setTimeout(res, 1000));

    invariant(
        typeof title === "string",
        "title must be a string"
    );
    invariant(
        typeof slug === "string",
        "slug must be a string"
    );
    invariant(
        typeof description === "string",
        "markdown must be a string"
    );

    await createProject({ title, slug, description });

    return redirect("/projects/admin");
};


const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export default function NewProject() {
    const errors = useActionData<typeof action>();

    const transition = useTransition();
    const isCreating = Boolean(transition.submission);

    return (
        <Form method="post">
            <p>
                <label>
                    Project Title:{" "}
                    {errors?.title ? (
                        <em className="text-red-600">{errors.title}</em>
                    ) : null}
                    <input type="text" name="title" className={inputClassName} />
                </label>
            </p>
            <p>
                <label>
                    Project Slug:{" "}
                    {errors?.slug ? (
                        <em className="text-red-600">{errors.slug}</em>
                    ) : null}
                    <input type="text" name="slug" className={inputClassName} />
                </label>
            </p>
            <p>
                <label htmlFor="description">
                    Markdown:{" "}
                    {errors?.description ? (
                        <em className="text-red-600">
                            {errors.description}
                        </em>
                    ) : null}
                </label>
                <br />
                <textarea
                    id="description"
                    rows={20}
                    name="description"
                    className={`${inputClassName} font-mono`}
                />
            </p>
            <p className="text-right">
                <button
                    type="submit"
                    className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
                    disabled={isCreating}
                >
                    {isCreating ? "Creating..." : "Create Post"}
                </button>
            </p>
        </Form>
    );
}