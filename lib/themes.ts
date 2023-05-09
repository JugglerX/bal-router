import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Theme } from "@/types";

const themesDataDirectory = path.join(process.cwd(), "data", "themes");

export function getThemeData(id: string): Theme {
  const fullPath = path.join(themesDataDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const frontmatter = matter(fileContents);
  const theme = frontmatter.data as Theme;
  return theme;
}

export function getAllThemeIds() {
  const fileNames = fs.readdirSync(themesDataDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
