import Header from "@/components/header";
import { AppRoutes } from "@/routes";
import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { useColorScheme } from "@mui/material/styles";
import SideNav, { SideNavHeader } from "@/components/sidenav";

const Main = () => {
	const { mode, setMode } = useColorScheme();

	useEffect(() => {
		setMode("dark");
	}, []);

	return (
		<BrowserRouter>
			<div className="flex">
				<Header></Header>
				<SideNav></SideNav>
				<main className="flex-1 p-3">
					<SideNavHeader />
					<AppRoutes />
				</main>
			</div>
		</BrowserRouter>
	);
};

export default Main;
