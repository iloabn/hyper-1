import GA from "../components/GA";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GA gaId="G-XXXXXXXXXX" />
      </head>
      <body>{children}</body>
    </html>
  );
}
