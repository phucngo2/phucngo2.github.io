import {
  CERTIFICATION_ROUTE,
  EXPERIENCE_ROUTE,
  HOME_ROUTE,
  PROJECTS_ROUTE,
  SKILLS_ROUTE,
} from "config";
import { useMemo } from "react";
import { useRouter } from "shared/hooks";

export const getIntroductionRoutes = (isAnchorRedirectWithinPage?: boolean) => {
  let routes = {
    CERTIFICATION_ROUTE,
    EXPERIENCE_ROUTE,
    HOME_ROUTE,
    PROJECTS_ROUTE,
    SKILLS_ROUTE,
  };
  type RoutesObject = typeof routes;
  type RoutesObjectKey = keyof RoutesObject;
  let routesObjKeys = Object.keys(routes) as RoutesObjectKey[];
  return routesObjKeys.reduce((obj: RoutesObject, key: RoutesObjectKey) => {
    obj[key] = isAnchorRedirectWithinPage
      ? routes[key].replace(/^./g, "#")
      : routes[key];
    return obj;
  }, {} as RoutesObject);
};

export const useIntroductionRoutes = (isAnchorRedirectWithinPage?: boolean) => {
  const { location } = useRouter();
  return useMemo(
    () => getIntroductionRoutes(isAnchorRedirectWithinPage),
    [location]
  );
};
