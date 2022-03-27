import type { NextPage } from "next"
import Image from "next/image"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import CTA from "../components/CTA"
import Landing from "../components/Landing"
import Profile from "../components/Profile"
import ColorModeToggle from "../components/colorToggle"
import dappStore from "../stores/dappStore"
import { Layout } from "antd"
import { Box } from "@chakra-ui/react"

const { Header, Footer, Content } = Layout

const Home: NextPage = () => {
    const dappState = dappStore((state) => state)
    return (
        <div className={styles.container}>
            <Head>
                <title>metagram</title>
                <meta name="description" content="metaverse for insta deziens" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Header>
                    <div className={styles.logo}>
                        <Image src="/metagram.png" alt="metagram" width={50} height={40} />
                    </div>
                    <Box sx={_styles}>
                        <ColorModeToggle mr={3} />
                        <CTA />
                    </Box>
                </Header>
                <Content style={{ padding: "0 50px" }}>
                    <div className={styles.site_layout_content}>
                        {dappState.isConnected ? <Profile /> : <Landing />}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>Metagram ©2022 made by Metagram Dao</Footer>
            </Layout>
        </div>
    )
}

export default Home

const _styles = {
    float: "right",
    margin: "16px 0 16px 24px",
}
