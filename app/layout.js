import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Hillsdale High School Music Department",
  description: "The Hillsdale High School Music Department is formed by the band and choir. Any students who are in grades 9 from 12 may join.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
