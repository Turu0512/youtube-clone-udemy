import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import { fetchPopularData } from "../api/index";
import { Store } from "../store/index";
import VideoGridItem from "../components/Layout/VideoGridItem/VideoGridItem";
import VideoGrid from "../components/Layout/VideoGrid/VideoGrid";

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchPopularData().then((result) => {
      console.log("data", result);
      setGlobalState({
        type: "SET_POPULAR",
        payload: { popular: result.data.items },
      });
    });
  }, []);
  return (
    <Layout>
      <VideoGrid>
        {globalState.popular &&
          globalState.popular.map((popular) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.high.url}
                title={popular.snippet.title}
              />
            );
          })}
      </VideoGrid>
    </Layout>
  );
};

export default Top;
