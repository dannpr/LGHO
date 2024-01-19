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

export type Transaction = Array<[string, string, number]>;
export const ProviderContext = createContext<{
  balance?: number;
  setBalance?: (balance: number) => void;
  transactions?: Transaction;
  setTransactions?: (transactions: Transaction) => void;
}>({});

export default function Provider({ children }: { children: React.ReactNode }) {
  const [balance, setBalance] = useState<number>(157.23);
  const [transactions, setTransactions] = useState<Transaction>([["AAVE","AAVE",210.20],["Jhon Doe","Jhon Doe",-32.60]]);
  return (
    <ProviderContext.Provider value={{
      balance,
      setBalance,
      transactions,
      setTransactions,
    }}>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </ProviderContext.Provider>
  );
}
