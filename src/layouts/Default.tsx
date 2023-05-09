import { ReactNode, useEffect } from "react";
import { InstantSearch } from "react-instantsearch-hooks-web";
import singletonRouter, { useRouter } from "next/router";
import { createInstantSearchRouterNext } from "react-instantsearch-hooks-router-nextjs";
import algoliasearch from "algoliasearch";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { getCategoryGroup } from "lib/category";

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_API_KEY);
const searchIndex = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = (props: DefaultLayoutProps) => {
  const router = useRouter();
  console.log("DefaultLayout router", router);
  const { children } = props;

  useEffect(() => {
    console.log("Mount DefaultLayout");
    return () => {
      console.log("Unmount DefaultLayout");
    };
  }, []);

  const onStateChange = ({ uiState, setUiState }) => {
    console.log("uiState", uiState);
    setUiState(uiState);
  };

  const routerNext = createInstantSearchRouterNext({
    singletonRouter,
    routerOptions: {
      // createURL({ qsModule, location, routeState }) {
      //   const { origin, pathname, hash } = location;
      //   const queryString = qsModule.stringify(routeState);
      //   console.log("createUrl routeState", routeState);
      //   // console.log("createUrl queryString", queryString);
      //   if (!queryString) {
      //     return `${origin}${pathname}${hash}`;
      //   }
      //   return `${origin}${pathname}?${queryString}${hash}`;
      // },
      // parseURL({ qsModule, location }) {
      //   const parsedUrl = qsModule.parse(location.search.slice(1));
      //   // console.log("parseUrl location", location);
      //   console.log("parseUrl input", parsedUrl);
      //   // console.log("parseUrl", parsedUrl);
      //   const pathArray = location.pathname.split("/");
      //   if (pathArray.length) {
      //     if (pathArray[0] === "") {
      //       pathArray.shift();
      //     }
      //     if (pathArray[0] === "category") {
      //       const categoryId = pathArray[1];
      //       const categoryGroup = getCategoryGroup(categoryId);
      //       const categoryFilterKey = `categories.${categoryGroup}`;
      //       parsedUrl[searchIndex] = {
      //         ...parsedUrl[searchIndex],
      //         refinementList: {
      //           ...(parsedUrl[searchIndex]?.refinementList && { ...parsedUrl[searchIndex]?.refinementList }),
      //           [categoryFilterKey]: [categoryId],
      //         },
      //       };
      //     }
      //   }
      //   console.log("parseUrl output", parsedUrl);
      //   return parsedUrl;
      // },
      // push(url) {
      //   console.log("push", url);
      //   router.replace(url);
      // },
      // start(onUpdate) {
      //   router.events.on("routeChangeComplete", (url, { shallow }) => {
      //     console.log(`start ${url}`);
      //     onUpdate();
      //   });
      // },
      // dispose() {
      //   router.events.off("routeChangeComplete", () => {});
      // },
    },
  });

  return (
    <>
      <Header />
      <div className="min-h-screen">
        <InstantSearch
          searchClient={searchClient}
          indexName={searchIndex}
          routing={{ router: routerNext }}
          // onStateChange={onStateChange}
        >
          {children}
        </InstantSearch>
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
