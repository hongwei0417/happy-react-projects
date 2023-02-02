import { featureConfigs } from "@/feature-configs";
import Home from "@/features/home";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const features = featureConfigs.flatMap((i) => i.routes);

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    ...features,
  ]);

  return routes;
};
