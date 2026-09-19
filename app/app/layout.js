import "./globals.css";

export const metadata = {
  title: "CreateVerse AI",
  description:
    "Next-generation all-in-one AI Creator Studio for creating videos, images, scripts, voice, music, characters, cartoons, ads and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
