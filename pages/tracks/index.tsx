import { Box, Button, Card, Grid } from "@mui/material"
import MainLayout from "../../layouts/MainLayout"
import { useRouter } from "next/navigation"
import { ITrack } from "../../types/track"

const Index = () => {

    const router = useRouter()
    const tracks: ITrack[] = [
        {
            _id: '1',
            name: "Трек 1",
            artist: "Исполнитель 1",
            text: "Текст 1",
            listens: 0,
            picture: "http://localhost:5000/image/unnamed.png",
            audio: "http://localhost:5000/audio/polog.mp3",
            comments: [],
        },
        {
            _id: '2',
            name: "Трек 2",
            artist: "Исполнитель 2",
            text: "Текст 2",
            listens: 0,
            picture: "http://localhost:5000/image/unnamed.png",
            audio: "http://localhost:5000/audio/polog.mp3",
            comments: [],
        },
        {
            _id: '3',
            name: "Трек 3",
            artist: "Исполнитель 3",
            text: "Текст 3",
            listens: 0,
            picture: "http://localhost:5000/image/unnamed.png",
            audio: "http://localhost:5000/audio/polog.mp3",
            comments: [],
        }
    ]

    return <MainLayout>
        <Grid container justifyContent='center'>
            <Card style={{
                width: "900px"
            }}>
                <Box p={3}>
                    <Grid container justifyContent='space-between'>
                        <h1>Список треков</h1>
                        <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                    </Grid>
                </Box>
            </Card>
        </Grid>
    </MainLayout>
}

export default Index