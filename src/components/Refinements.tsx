import { RefinementList } from "react-instantsearch-hooks-web";
import { memo } from "react";
import { Filter } from "@/types";

type Props = {
  filters: Filter[];
};

const Refinements = (props: Props) => {
  const { filters } = props;

  const transformItems = (items) => {
    return items.map((item) => {
      return {
        ...item,
        label: item.label,
      };
    });
  };

  return (
    <>
      {filters.map((filter) => (
        <fieldset key={filter.id}>
          <legend className="block text-xs font-semibold text-black">{filter.name}</legend>
          <RefinementList
            transformItems={transformItems}
            attribute={filter.attribute}
            sortBy={["count:desc", "name:asc"]}
            classNames={{
              root: "pt-3 lg:pt-6 text-xs", // The root element of the widget.
              noRefinementRoot: "hidden", // The root element when there are no refinements.
              searchBox: "", // The search box element.
              noResults: "", // The root element of the widget when there are no results.
              list: "grid cursor-pointer gap-1", // The list element.
              item: "group py-1 cursor-pointer", // Each item element.
              selectedItem: "", // Each selected item element.
              label: "flex items-center cursor-pointer", // The label of each item.
              checkbox:
                "cursor-pointer h-4 w-4 flex-shrink-0 rounded-md group-hover:border-indigo-300 duration-200 border-dark-500 bg-dark-600 text-indigo-600 focus:ring-indigo-500", // The checkbox of each item.
              labelText: "ml-3 text-black cursor-pointer font-mono duration-200 group-hover:text-indigo-300", // The text element of each label.
              count:
                "ml-auto align-end rounded-full hidden md:inline bg-dark-800 px-2.5 py-0.5 text-xs font-medium font-mono text-dark-300", // The count of each item.
              showMore: "mt-2 flex-1 py-1.5 text-xs font-medium text-dark-300 hover:text-black disabled:opacity-50", // The “Show more” button.
              disabledShowMore: "hidden hover:bg-transparent", // The disabled “Show more” button.
            }}
            {...filter.props}
          />
        </fieldset>
      ))}
    </>
  );
};
export default memo(Refinements);
