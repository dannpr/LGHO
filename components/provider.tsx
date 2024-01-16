"use client";

import { createContext, useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  getDefaultConfig,
} from "connectkit";


const config = createConfig(
  getDefaultConfig({
    alchemyId: "a78ea67f650a46e8bd97f3262d1cef43",
    walletConnectProjectId: "79b445e0921705d5a1e2477813653d50",
    appName: "Your App Name",
    appDescription: "Your App Description",
    appUrl: "https://family.co",
    appIcon: "https://family.co/logo.png",
  })
);

export const ProviderContext = createContext<{}>({});

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ProviderContext.Provider value={{}}>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </ProviderContext.Provider>
  );
}
