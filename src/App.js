import React from "react";
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import Home from "./pages/Home";
import Create from './pages/Create'
import View from './pages/View'
import Edit from './pages/Edit';


const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/create",
		element: <Create />,
	},
	{
		path: "/edit",
		element: <Edit />,
	},
	{
		path: "/view",
		element: <View />,
	},
]);

const theme = createTheme({
	typography: {
		allVariants: {
			fontFamily: ['Noto Sans', 'Inter', 'Poppins', 'Noto Sans Hebrew', 'sans-serif'].join(','),
			textTransform: 'none',
		}
	},
	palette: {
		primary: {
			light: '#279EF5',
			main: '#279EF5',
			dark: '#002884',
			contrastText: '#fff',
		},
		secondary: {
			light: '#F4F5F7',
			main: '#F4F5F7',
			dark: '#ba000d',
			contrastText: '#000',
		}
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</>
	);
}

export default App;
