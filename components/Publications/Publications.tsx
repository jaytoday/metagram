import { Avatar, Box, Divider, IconButton, Image, Text } from "@chakra-ui/react"
import { Layout } from "antd"
import React from "react"
import dappStore from "../../stores/dappStore"

const { Header, Footer, Content } = Layout

function Publications() {
    const state = dappStore((state) => state)
    console.log(state.publications, typeof state.publications)
    return (
        <>
            {state.publications?.map((pub) => {
                return (
                    <Layout key={pub.uri} style={styles}>
                        <Header style={styles.header}>
                            <Avatar name={pub.handle} src={pub.avatar} size="sm" />
                            <Text my={2}>{pub.handle}</Text>
                        </Header>
                        <Content style={styles.content}>
                            <Box mb={1}>
                                {
                                    <Box
                                        maxH={320}
                                        rounded="lg"
                                        maxWidth={["100%", "400px", "225px"]}
                                        margin="0 auto"
                                        objectFit="contain"
                                    >
                                        <video autoPlay loop>
                                            <source src={pub.uri} />
                                        </video>
                                    </Box>
                                }
                            </Box>
                        </Content>
                        <Divider />
                        <Footer style={styles.footer} className="flex align-middle gap-2">
                            <Box>
                                <IconButton isRound variant="ghost" aria-label="nft-sticker" />
                            </Box>
                        </Footer>
                    </Layout>
                )
            })}
        </>
    )
}

export default Publications

const styles = {
    maxHeight: 430,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#718096",
    header: {
        height: 40,
        display: "flex",
        alignItems: "center",
        position: "relative",
        gap: 5,
    },
    content: {
        margin: "0 auto",
        overflowY: "auto",
        maxH: 320,
        overflowX: "hidden",
    },
    footer: {
        height: 40,
        display: "flex",
        alignItems: "center",
    },
}
