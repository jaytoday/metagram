import React from "react"
import { Heading, Box, Wrap, WrapItem, Avatar, VStack } from "@chakra-ui/react"

function Teams() {
    const team = [
        {
            name: "0xpeter",
            title: "full-stack",
            image: "",
        },

        {
            name: "harsh",
            title: "front-end",
            image: "",
        },

        {
            name: "0x",
            title: "back-end",
            image: "",
        },
    ]
    return (
        <Box as="section" mb={30}>
            <Heading textAlign="center" mb={12}>
                Team
            </Heading>
            <Wrap display="flex" justifyContent="center">
                {team.map((member) => {
                    return (
                        <WrapItem key={member.name}>
                            <VStack mx={7}>
                                <Avatar size="2xl" name={member.name} />
                                <caption>{member.name}</caption>
                                <caption>{member.title}</caption>
                            </VStack>
                        </WrapItem>
                    )
                })}
            </Wrap>
        </Box>
    )
}

export default Teams
