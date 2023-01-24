import React, { useState, useEffect } from "react";
import "./App.css";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import Main from "@/layouts/main";

function App() {
	return (
		<CssVarsProvider>
			<div className="App">
				<Main />
			</div>
		</CssVarsProvider>
	);
}

export default App;
