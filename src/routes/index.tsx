import Home from "@/features/home";
import { useRoutes } from "react-router-dom";
import { featureRoutes } from "./feature-routes";

export const AppRoutes = () => {
	const features = featureRoutes.flatMap((i) => i);

	const routes = useRoutes([
		{
			path: "/",
			element: <Home />,
		},
		...features,
	]);

	return routes;
};
