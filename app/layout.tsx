import "./globals.css";
import type { Metadata } from "next";

export const metadate: Metadata = {
    title: "My App",
  description:  "My Next.js App",
};

export default funcation RootLayout({
  children,
}:  {
  children: React.ReactNode;
}) { 
  return ( 
    <html lang="en">
      <body className="sans-serif">
        {children}
      </body>
    </html>
  );
}  
