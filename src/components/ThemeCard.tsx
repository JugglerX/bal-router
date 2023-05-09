import { Highlight } from "react-instantsearch-hooks-web";
import Link from "next/link";
import { memo } from "react";

const ThemeCard = (props: any) => {
  const { hit } = props;
  const categories = [...(hit.categories?.ssg || []), ...(hit.categories?.css || []), ...(hit.categories?.cms || [])];

  return (
    <div className="rounded bg-slate-200 p-6">
      <h2 className="text-lg text-black underline hover:text-indigo-400">
        <Link href={`/theme/${hit.themeKey}`}>
          <Highlight
            attribute="title"
            hit={hit}
            classNames={{
              root: "",
              highlighted: "bg-indigo-600 text-black",
              nonHighlighted: "",
              separator: "",
            }}
          />
        </Link>
      </h2>
      {categories.map((category) => {
        return (
          <li key={category} className="text-dark-300 mr-2 inline-flex items-center justify-center">
            {category}
          </li>
        );
      })}
    </div>
  );
};

export default memo(ThemeCard);
