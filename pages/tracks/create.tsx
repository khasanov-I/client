import { Button, Grid } from "@mui/material"
import StepWrapper from "../../components/StepWrapper"
import MainLayout from "../../layouts/MainLayout"
import { useState } from "react"

const Create = () => {

    const [activeStep, setActiveStep] = useState(0)

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        }
        
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
        
    }

    return <MainLayout>
        <StepWrapper activeStep={activeStep}>
            <h1>Загрузка трека</h1>
        </StepWrapper>
        <Grid container justifyContent='space-between'>
            <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
            <Button onClick={next}>Далее</Button>
        </Grid>
    </MainLayout>
}

export default Create