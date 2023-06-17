import "~/styles/globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen items-center justify-center bg-indigo-800">
          <div className="relative h-96 max-w-7xl rounded-lg bg-white p-8 opacity-50 shadow-md">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
