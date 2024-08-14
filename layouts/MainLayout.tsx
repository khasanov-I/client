import { ReactNode } from "react"
import Navbar from "../components/Navbar"
import { Container } from "@mui/material"
import IPlayer from "../components/IPlayer"

const MainLayout = ({children}): ReactNode => {
    return <>
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