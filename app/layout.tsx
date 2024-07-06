"use client";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../store";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "800"],
});
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={poppins.className}>
    <body>
      <Provider store={store}>{children}</Provider>
    </body>
  </html>
);

export default RootLayout;
