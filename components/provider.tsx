"use client";
import { NextUIProvider } from "@nextui-org/react";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "a78ea67f650a46e8bd97f3262d1cef43", // or infuraId
    walletConnectProjectId: "79b445e0921705d5a1e2477813653d50",

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);
import { createContext, useEffect, useState } from "react";

export const ProviderContext = createContext<{}>({});

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ProviderContext.Provider value={{}}>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <NextUIProvider>{children}</NextUIProvider>
          <ConnectKitButton />
        </ConnectKitProvider>
      </WagmiConfig>
    </ProviderContext.Provider>
  );
}
