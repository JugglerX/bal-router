import { SearchBox, SortBy } from "react-instantsearch-hooks-web";
import { memo, useEffect, useState } from "react";
import Refinements from "./Refinements";
import CurrentNumberOfFilters from "./CurrentNumberOfFilters";
import FiltersStats from "./FiltersStats";
import { Filter } from "@/types";

const sortByOptions = {
  items: [
    { label: "Relevance", value: "test" },
    { label: "Created At", value: "test_created_at_desc" },
  ],
};

type Props = {
  filters: Filter[];
};

const FilterBar = (props: Props) => {
  const { filters } = props;
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  useEffect(() => {
    console.log("Mount FilterBar");
    return () => {
      console.log("Unmount FilterBar");
    };
  }, []);

  return (
    <>
      <div className="relative z-20 border-y border-slate-300 bg-slate-100 lg:sticky lg:top-[76px]">
        {/* Container */}

        <div className="container mx-auto px-8">
          <div className="relative flex flex-col items-start md:flex-row md:items-center">
            {/* Filters  */}
            <div className="order-2 flex h-12 w-full justify-between border-t border-dotted border-slate-600 text-sm md:order-1 md:justify-start md:border-t-0 lg:h-auto lg:w-auto">
              <button
                className="group mr-4 flex items-center rounded border bg-indigo-600 px-4 py-2 text-indigo-100 hover:bg-indigo-700"
                onClick={() => setFilterMenuOpen(!filterMenuOpen)}
              >
                <div className="mr-1">
                  <CurrentNumberOfFilters />
                </div>
                <div className="">Filters</div>
              </button>

              <SortBy items={sortByOptions.items} />
            </div>

            {/* Searchbox */}
            <div className="order-3 hidden py-2 md:px-4 lg:order-2 lg:block lg:w-80 xl:w-[460px]">
              <SearchBox
                placeholder="Search"
                submitIconComponent={({ classNames }) => <i className="fa-light fa-search"></i>}
                resetIconComponent={({ classNames }) => <i className="fa-light fa-xmark"></i>}
                classNames={{
                  root: "",
                  form: "relative",
                  input:
                    "pl-10 block w-full rounded-full border-0 py-2 pr-10 text-black ring-1 ring-inset ring-slate-400 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ease-in-out duration-300 focus:ring-offset-indigo-400 sm:text-sm sm:leading-6 bg-slate-900",
                  submit: "text-black top-2 left-4 absolute", // The submit button.
                  reset: "text-black top-2 right-4 absolute", // The reset button.
                  loadingIndicator: "text-black top-3 right-3 absolute", // The loading indicator element.
                  submitIcon: "text-black ", // The submit icon.
                  resetIcon: "text-black", // The reset icon.
                  loadingIcon: "text-black", // The loading icon.
                }}
              />
            </div>

            {/* Stats */}
            <div className="lg:flex-0 order-1 flex h-12 w-full items-center justify-between py-2 md:order-2 md:h-auto md:justify-end md:px-4 lg:order-3 lg:ml-auto lg:w-auto">
              <FiltersStats />
            </div>
          </div>
        </div>

        {/* Open Filters Panel */}
        <div
          className="flex-col border-t border-slate-300 bg-slate-200 transition-all lg:h-auto"
          style={{
            display: filterMenuOpen ? "flex" : "none",
          }}
        >
          <div className="container mx-auto px-8 py-6">
            <div className="grid auto-rows-min grid-cols-2 gap-x-3 gap-y-10 py-6 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
              <Refinements filters={filters} />
            </div>
          </div>

          {/* Close Drawer  */}
          <div className="group cursor-pointer" onClick={() => setFilterMenuOpen(false)}>
            <div className="container mx-auto px-8">
              <div className="flex items-center justify-center py-3">
                <i className="fa-light fa-chevrons-up text-sm text-black group-hover:text-black"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
