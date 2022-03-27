import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect } from "react"
import init from "../lib/auth"
import { ThemeProvider } from "next-themes"
import { ChakraProvider } from "@chakra-ui/react"
import dappStore from "../stores/dappStore"
import theme from "../components/theme"

function MyApp({ Component, pageProps }: AppProps) {
    const state = dappStore((state) => state)

    useEffect(() => {
        ;(async () => {
            if (window.ethereum) {
                await init(state)
            }
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ChakraProvider theme={theme}>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </ChakraProvider>
    )
}

export default MyApp
