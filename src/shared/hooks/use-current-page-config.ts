import { pageList } from "config";
import { useMemo } from "react";
import { useRouter } from "shared/hooks";

export const useCurrentPageConfig = () => {
  const { location } = useRouter();

  const currentPageConfig = useMemo(() => {
    const pageConfig = pageList.find((page) => page.path === location.pathname);
    return pageConfig ?? pageList[0];
  }, [location.pathname]);

  return { currentPageConfig };
};
