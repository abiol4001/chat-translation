"use client"

import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import FirebaseAuthProvider from './FirebaseAuthProvider'
import SubscriptionProvider from './SubscriptionProvider'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// const queryClient = new QueryClient()

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    // <QueryClientProvider client={queryClient}>
    <SessionProvider>
      <FirebaseAuthProvider>
        <SubscriptionProvider>
          <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </NextThemesProvider>
        </SubscriptionProvider>
      </FirebaseAuthProvider>
    </SessionProvider>
    // {/* </QueryClientProvider> */}
  )
}

export default Providers