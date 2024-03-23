import Nav from "@/components/Navbar/Nav";
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
       <Nav/>

        {children}
        
        
        </body>
    </html>
  );
}
