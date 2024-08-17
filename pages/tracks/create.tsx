import { Button, Grid, TextField } from "@mui/material"
import StepWrapper from "../../components/StepWrapper"
import MainLayout from "../../layouts/MainLayout"
import { useState } from "react"
import FileUpload from "../../components/FileUpload"
import { useInput } from "../../hooks/useInput"
import axios from "axios"
import { useRouter } from "next/navigation"

const Create = () => {

    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter()

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        } else {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('text', text.value)
            formData.append('artist', artist.value)
            formData.append('picture', picture.value)
            formData.append('audio', audio.value)
            axios.post('http://localhost:5000/track', formData)
                .then(res => router.push('/tracks'))
                .catch(e => console.log(e))
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
        
    }

    return <MainLayout>
        <StepWrapper activeStep={activeStep}>
            {activeStep === 0 && 
                <Grid container direction='column' style={{padding: 20}}>
                    <TextField {...name} style={{marginTop: 10}} label='Название трека'/>
                    <TextField {...artist} style={{marginTop: 10}} label='Имя автора'/>
                    <TextField {...text} style={{marginTop: 10}} label='Текст песни' 
                    multiline 
                    rows={3}/>
                </Grid>
            }
            {activeStep === 1 && 
                <FileUpload accept="image/*" setFile={setPicture}>
                    <Button>
                        Загрузить изображение
                    </Button>
                </FileUpload>
            }
            {activeStep === 2 && 
                <FileUpload accept="audio/*" setFile={setAudio}>
                    <Button>
                        Загрузить аудио
                    </Button>
                </FileUpload>    
            }
        </StepWrapper>
        <Grid container justifyContent='space-between'>
            <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
            <Button onClick={next}>Далее</Button>
        </Grid>
    </MainLayout>
}

export default Create