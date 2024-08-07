import Header from "@/components/header";
import "./globals.css";

//the metadata set in layout will be used in every page which uses the layout. the metadata will be merged with page metadata if exists
export const metadata = {
  title: "NextPosts",
  description: "Browse and share amazing posts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
