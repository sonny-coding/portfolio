import React, { useEffect } from "react";
import { useToggle } from "@/hooks/useToggle";
import { useKeyPress } from "@/hooks/useKeyPress";
import AppHeader from "@/components/AppHeader";
import BlogPreviewCard from "@/components/blog-preview/BlogPreviewCard";
import BlogPreviewList from "@/components/BlogPreviewList";

const Home = () => {
  const [searchBar, toggleSearchBar] = useToggle();
  const [dark, toggleDark] = useToggle();
  const combo = useKeyPress("k");

  useEffect(() => {
    toggleSearchBar();
    console.log(combo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [combo]);

  return (
    <div className="flex flex-col items-center justify-center w-full p-3">
      <AppHeader
        dark={dark}
        toggleDark={toggleDark}
        toggleSearchBar={toggleSearchBar}
      />
      {searchBar && <div>SEARCHBAR</div>}
      <BlogPreviewList />
    </div>
  );
};

export default Home;
