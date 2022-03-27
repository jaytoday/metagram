import { Grid, GridItem } from "@chakra-ui/react"
import React from "react"
import Create from "./Create"
import Publications from "./Publications"
import dappStore from "../../stores/dappStore"

function Curation() {
    const state = dappStore((state) => state)
    return (
        <Grid h="full" templateColumns={["repeat(100%)", "repeat(12, 2fr)"]} gap={5}>
            <GridItem colSpan={4}>
                <Create />
            </GridItem>
            <GridItem colSpan={8}>{state.publications ? <Publications /> : <></>}</GridItem>
        </Grid>
    )
}

export default Curation
