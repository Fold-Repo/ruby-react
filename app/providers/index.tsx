'use client'

import { useState } from 'react';
import { HeroUIProvider } from '@heroui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function Providers({ children }: { children: React.ReactNode }) {

    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 10,
                gcTime: 1000 * 60 * 60,
                refetchOnWindowFocus: false,
                retry: 2,
                retryDelay: 5000
            },
        }
    }));

    return (
        <QueryClientProvider client={queryClient}>
            <HeroUIProvider>
                {children}
            </HeroUIProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}