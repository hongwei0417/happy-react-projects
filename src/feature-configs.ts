import { RouteObject } from "react-router-dom";
import { exampleRoutes } from "@/routes/example-routes";

export type FeatureConfig = {
	name: string;
	title: string;
	routes: RouteObject[];
};

export const featureConfigs: FeatureConfig[] = [
	{
		name: "example",
		title: "Example",
		routes: exampleRoutes,
	},
];
