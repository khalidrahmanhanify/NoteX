import { defineCollection } from "astro/content/config";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";
const notes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/data/notes",
  }),
  schema: z.object({
    title: z.string(),
    lecture: z.string(),
    semester: z.string(),
    subject: z.string(),
    date: z.coerce.date(),
    order: z.number().optional(),
    description: z.string(),
  }),
});

const semesters = defineCollection({
  loader: file("src/data/semesters.json"),
  schema: z.object({
    semesterName: z.string(),
    slug: z.string(),
    url: z.string(),
    credits: z.number(),
    barColor: z.string(),
    subjects: z.array(
      z.object({
        subjectName: z.string(),
        coverImage: z.string(),
        iconName: z.string(),
        teacher: z.string(),
        location: z.string(),
        day: z.string(),
        path: z.string(),
        materials: z.array(
          z.object({
            title: z.string(),
            file: z.string(),
            date: z.coerce.date().optional(),
          }),
        ),
      }),
    ),
  }),
});

export const collections = { notes, semesters };
