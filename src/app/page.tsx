"use client"

import { Provider } from "react-redux";
import Home from "../components/Home";
import { store } from "@/store/store";
import { ThemeProvider } from "next-themes";

export default function HomePage() {
  return(
	<ThemeProvider defaultTheme="dark" attribute="class">
		<Provider store={store}>
			<Home/>
		</Provider>
	</ThemeProvider>
  )
}
