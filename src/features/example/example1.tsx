import * as React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const Example1 = () => {
	return (
		<React.Fragment>
			<h1>Example 1</h1>
			<Outlet />
		</React.Fragment>
	);
};
export default Example1;
