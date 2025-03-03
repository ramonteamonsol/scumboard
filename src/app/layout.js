import "./../styles/globals.css";
import Layout from "@/components/common/Layout";

export const metadata = {
  title: "Ramon - He’s not a hero, he’s not a villain—he’s just f*cking Ramon",
  description: "Welcome to Ramon's World - He’s not a hero, he’s not a villain—he’s just f*cking Ramon",
  icons: "./favicon.webp",
  openGraph: {
    title: "Ramon - He’s not a hero, he’s not a villain—he’s just f*cking Ramon",
    description: "Born from chaos, fueled by degenerates, and designed to expose scammers, fraudsters, and all-around assholes, Ramon is here to do what no one else has the guts to do: burn the system down and rebuild it from the ground up. 🚀",
    url: "https://www.ramon.meme/",
    siteName: "Ramon",
    images: [
      {
        url: "https://i.ibb.co/Dfjm5KP2/Ramon-Social-Preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ramon's World",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramon - He’s not a hero, he’s not a villain—he’s just f*cking Ramon",
    description: "Born from chaos, fueled by degenerates, and designed to expose scammers, fraudsters, and all-around assholes, Ramon is here to do what no one else has the guts to do: burn the system down and rebuild it from the ground up. 🚀 🚀",
    images: ["https://i.ibb.co/Dfjm5KP2/Ramon-Social-Preview.jpg"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout >{children}</Layout>
      </body>
    </html>
  );
}
