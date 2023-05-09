import { ReactElement } from "react";
import { Pagination } from "react-instantsearch-hooks-web";
import { filtersHome } from "lib/filters";
import DefaultLayout from "@/layouts/Default";
import FilterBar from "@/components/FilterBar";
import ThemeGrid from "@/components/ThemeGrid";

const Index = (props) => {
  const { filters } = props.data;
  return (
    <>
      <FilterBar filters={filtersHome} />
      <div className="themes container mx-auto px-8 py-24">
        <h1 className="mb-6 text-3xl text-black">Home</h1>
        <ThemeGrid className="pb-6" />
        <Pagination />
      </div>
    </>
  );
};

export async function getStaticProps(props) {
  return {
    props: {
      data: {
        filters: filtersHome,
      },
    },
  };
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Index;
