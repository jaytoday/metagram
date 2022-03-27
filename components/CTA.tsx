import { Button, Image } from "@chakra-ui/react"
import Blockie from "./Blockie"
import init from "../lib/auth"
import dappStore from "../stores/dappStore"
import React from "react"
import useCustomToast from "../hooks/useCustomToast"

export default function CTA() {
    const state = dappStore((state) => state)
    const toast = useCustomToast()

    return (
        <>
            {state.isConnected ? (
                <Button borderRadius={5} onClick={undefined}>
                    {/* <Blockie /> */}
                    Logout
                </Button>
            ) : (
                <Button
                    borderRadius={5}
                    onClick={() =>
                        window.ethereum
                            ? init(state)
                            : toast("warning", "please use a crypto enabled browser!", "cta")
                    }
                >
                    <Image src="/metamask.png" alt="metamask" width={25} pr={2} /> Connect
                </Button>
            )}
        </>
    )
}
