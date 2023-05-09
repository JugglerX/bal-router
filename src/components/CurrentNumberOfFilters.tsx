import { useCurrentRefinements } from "react-instantsearch-hooks-web";

const CurrentNumberOfFilters = (props) => {
  const { items, canRefine, refine } = useCurrentRefinements(props);
  let numberOfFilters = 0;
  if (items.length) {
    items.forEach((item) => {
      numberOfFilters += item.refinements.length;
    });
  }
  return <>{numberOfFilters}</>;
};

export default CurrentNumberOfFilters;
