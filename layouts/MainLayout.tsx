import { ReactNode } from "react"
import Navbar from "../components/Navbar"
import { Container } from "@mui/material"
import IPlayer from "../components/IPlayer"
import Head from "next/head"

interface MainLayoutProps {
    title?: string,
    children: ReactNode,
    description?: string,
    keywords?: string
}

const MainLayout = ({children, title, description, keywords}: MainLayoutProps): ReactNode => {
    return <>
    <Head>
        <title>{title || 'Музыкальная площадка'}</title>
        <meta name="description" content={"Музыкальная площадка, здесь каждый может оставить свой трек" + description}/>
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content={keywords || "Музыка, треки, артисты"}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
        <Navbar />
        <Container className="container">
            {children}
        </Container>
        <IPlayer />

        <style>
            {
                `
                    .container {
                        margin: 90px 0
                    }
                `
            }
        </style>
    </>
}

export default MainLayout