import React from "react";

import Home from "../pages/Home";
import Layout from "../containers/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "../components/Navbar";

const App = () => {
	return (
		<>
			<BrowserRouter>
				{/* <Navbar /> */}
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="*" element={<Home />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	);
};

export default App;
