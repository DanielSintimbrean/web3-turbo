import "../styles/globals.css";
import type { AppType } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

import { api } from "@/utils/api";
import { TailwindIndicator } from "@/components/ui/tailwind-indicator";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
        <TailwindIndicator />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
