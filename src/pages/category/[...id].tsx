import { ReactElement } from "react";
import { Configure, Pagination } from "react-instantsearch-hooks-web";
import CategoryLayout from "@/layouts/CategoryLayout";
import { getAllFirstLevelCategoryIds, getCategoryDataArray } from "lib/category";
import FilterBar from "@/components/FilterBar";
import ThemeGrid from "@/components/ThemeGrid";
import { filtersHome } from "lib/filters";

type Props = {
  data: {
    primaryCategoryId: string;
    configureFilters: string;
    filters: any[];
  };
};

const CategoryPage = (props: Props) => {
  console.log(props);
  const { primaryCategoryId, configureFilters, filters = [] } = props.data;
  return (
    <>
      <Configure filters={configureFilters} />
      <FilterBar filters={filtersHome} />
      <div className="themes container mx-auto px-8 py-24">
        <h1 className="mb-6 text-3xl text-black">{primaryCategoryId}</h1>
        <ThemeGrid className="pb-6" />
        <Pagination />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllFirstLevelCategoryIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = getCategoryDataArray(params.id);

  if (!data.categories.length) {
    return {
      notFound: true,
    };
  }

  const primaryCategoryId = data.categories[0].id;
  const configureFilters = data.categories
    .map((category) => `categories.${category.group}: ${category.id}`)
    .join(" AND ");

  return {
    props: {
      data: {
        ...data,
        primaryCategoryId,
        configureFilters,
      },
    },
  };
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <CategoryLayout>{page}</CategoryLayout>;
};

export default CategoryPage;
