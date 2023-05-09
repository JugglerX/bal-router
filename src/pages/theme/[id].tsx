import { ReactElement } from "react";
import type { Theme } from "../../types";
import { getAllThemeIds, getThemeData } from "lib/themes";
import BasicLayout from "@/layouts/BasicLayout";

type Props = {
  theme: Theme;
};

const ThemePage = (props: Props) => {
  const theme = props.theme;

  return (
    <div className="container relative mx-auto px-8 py-24 lg:py-36">
      <h1 className="mt-6 text-xl text-black sm:text-3xl md:grid-cols-3 md:font-medium md:leading-none lg:mt-12 lg:text-5xl">
        {theme.title}
      </h1>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = getAllThemeIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props) {
  const { params } = props;
  const theme = getThemeData(params.id);
  return {
    props: {
      theme,
    },
  };
}

ThemePage.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>;
};

export default ThemePage;
