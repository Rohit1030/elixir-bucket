import { useEffect } from "react";

const PageTitle = ({ title }: { title: string }) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title + " | " + prevTitle;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
  return <></>;
};

export default PageTitle;
