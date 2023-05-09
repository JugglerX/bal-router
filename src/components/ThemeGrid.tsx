import { useHits } from "react-instantsearch-hooks-web";
import ThemeCard from "./ThemeCard";

type Props = {
  loading?: boolean;
  className?: string;
};

const ThemeGrid = (props: Props) => {
  const { hits } = useHits();
  return (
    <>
      <div
        className={`${props.className} grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-6 lg:gap-x-6 xl:grid-cols-3`}
      >
        {hits.map((hit, index) => (
          <ThemeCard key={hit.themeKey} hit={hit} themeUrl={`/theme/${hit.themeKey}`} />
        ))}
      </div>
    </>
  );
};

export default ThemeGrid;
