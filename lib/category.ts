import categoriesMetaJson from "../data/categories/categoriesMeta.json";
import categories from "../data/categories/categories.json";
import { filtersHome } from "./filters";
import { CategoryMeta } from "@/types";

const categoriesMeta = categoriesMetaJson as CategoryMeta[];

export function getCategoryGroup(categoryId) {
  const category = categories.find((category) => category.id === categoryId);
  if (category) {
    return category.props[0];
  }
}

export function getCategory(categoryId: string) {
  const categoryMeta = categoriesMeta.find((category) => category.id === categoryId);
  if (!categoryMeta) {
    return null;
  }
  return categoryMeta;
}

export function getCategoryDataArray(params: any) {
  const categoryIds = Object.values(params);
  let categories = [];

  categoryIds.forEach((categoryId: string) => {
    if (!getCategory(categoryId)) {
      categories = [];
      return;
    }
    const category = {
      id: categoryId,
      group: getCategoryGroup(categoryId),
    };
    categories.push(category);
  });

  return {
    categories,
    filters: filtersHome,
  };
}

export function getAllFirstLevelCategoryIds() {
  const paths = categories.map((category) => {
    return {
      params: {
        id: [category.id],
      },
    };
  });
  return paths;
}
