import React from "react"
import Image from "next/image"
import { Box, Heading, Text, Stack, Flex } from "@chakra-ui/react"

function Features() {
    const feature = [
        {
            title: "curate",
            description:
                "metagram allows you to freely nftilize your audio or video content, that is, you have a proof of ownership over all your contents",
            image: "/empty.png",
        },

        {
            title: "earn",
            description:
                "let other users drive engagement with your contents, using nft stickers you can stock up your collection, sell them on opensea or use it in interacting with other shared contents",
            image: "/empty.png",
        },

        {
            title: "control",
            description:
                "protect your content. maybe you only want those who have your unique fan NFT to se your music or maybe you want your content to be open for everyone. what you can do is limitless",
            image: "/empty.png",
        },
    ]
    return (
        <Box as="section" mb={40}>
            <Heading textAlign="center" mb={12}>
                Features
            </Heading>
            <Flex justifyContent="space-evenly" alignContent="center" gap={10}>
                {feature.map((feature) => {
                    return (
                        <Box
                            maxW={"445px"}
                            w={"full"}
                            boxShadow={"2xl"}
                            rounded={"md"}
                            p={6}
                            overflow={"hidden"}
                            key={feature.title}
                        >
                            <Box
                                h={"210px"}
                                bg={"gray.100"}
                                mt={-6}
                                mx={-6}
                                mb={6}
                                pos={"relative"}
                            >
                                <Image alt="feature-image" src={feature.image} layout={"fill"} />
                            </Box>
                            <Stack>
                                <Heading fontSize={"2xl"} fontFamily={"body"}>
                                    {feature.title}
                                </Heading>
                                <Text color={"gray.500"}>{feature.description}</Text>
                            </Stack>
                        </Box>
                    )
                })}
            </Flex>
        </Box>
    )
}

export default Features
