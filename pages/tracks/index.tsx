import { Box, Button, Card, Grid } from "@mui/material"
import MainLayout from "../../layouts/MainLayout"
import { useRouter } from "next/navigation"
import { ITrack } from "../../types/track"
import TrackList from "../../components/TrackList"

const Index = () => {

    const router = useRouter()
    const tracks: ITrack[] = [
        {
            _id: '1',
            name: "Трек 1",
            artist: "Исполнитель 1",
            text: "Текст 1",
            listens: 0,
            picture: "http://localhost:5000/image/f6dcbe47-5aa3-430a-ac53-0bed7cfeab49.png",
            audio: "audio/ad9b36ef-9b59-4997-ad0a-519250b62633.mp3",
            comments: [],
        },

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
                <TrackList tracks={tracks}/>
            </Card>
        </Grid>
    </MainLayout>
}

export default Index