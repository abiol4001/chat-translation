"use client"

import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import FirebaseAuthProvider from './FirebaseAuthProvider'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// const queryClient = new QueryClient()

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    // <QueryClientProvider client={queryClient}>
    <SessionProvider>
      <FirebaseAuthProvider>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </NextThemesProvider>
      </FirebaseAuthProvider>
    </SessionProvider>
    // {/* </QueryClientProvider> */}
  )
}

export default Providers