
import { NextUIProvider } from "@nextui-org/system";
import "../ui/styles/globals.css";

export const metadata = {
  title: "Pet Lovers ",
  description: "An pet loving system!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
            {children}
        </NextUIProvider>
      </body>
    </html>
  );
}

