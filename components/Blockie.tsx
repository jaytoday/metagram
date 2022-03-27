import { Avatar } from "@chakra-ui/react"
import dappStore from "../stores/dappStore"
//@ts-ignore
import Blockies from "react-blockies"

/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Elemenet
 */

function Blockie() {
    const address = dappStore((state) => state).address
    if (!address) return <Avatar src="/broken-image.jpg" />

    return (
        <Blockies
            seed={(address as unknown as string).toLowerCase()}
            className="identicon"
            size={7}
        />
    )
}

export default Blockie
