export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen flex items-center justify-center`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
