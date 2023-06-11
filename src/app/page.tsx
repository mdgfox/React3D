"use client"

import { Provider } from "react-redux";
import Home from "../components/Home";
import { store } from "@/store/store";

export default function HomePage() {
  return( 
    <Provider store={store}>
      <Home/>
    </Provider>
  )
}
