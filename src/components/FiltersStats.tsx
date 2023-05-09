import { useConnector } from "react-instantsearch-hooks-web";
import connectStats from "instantsearch.js/es/connectors/stats/connectStats";

export function useStats(props) {
  return useConnector(connectStats, props);
}

const FiltersStats = (props) => {
  const { hitsPerPage, nbHits, areHitsSorted, nbSortedHits, nbPages, page, processingTimeMS, query } = useStats(props);
  const pageNumber = page as number;
  const displayPage = pageNumber + 1;

  return (
    <>
      <div className="font-mono text-xs text-black">
        <span className="mr-1 font-medium">Page:</span>
        <span>{displayPage}</span>/<span>{nbPages as number}</span>
      </div>
      <div className="ml-4 font-mono text-xs text-black">
        <span className="mr-1 font-medium">Results</span>
        <span className="rounded-full bg-indigo-500 py-1 px-2">{nbHits as number}</span>
      </div>
    </>
  );
};

export default FiltersStats;
