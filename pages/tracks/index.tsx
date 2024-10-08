import { Box, Button, Card, Grid, TextField } from "@mui/material"
import MainLayout from "../../layouts/MainLayout"
import { useRouter } from "next/navigation"
import TrackList from "../../components/TrackList"
import { useTypedSelector } from "../../hooks/useTypeSelector"
import { AppDispatch, wrapper } from "../../store"
import { fetchTracks, searchTracks } from "../../store/actions-creators/track"
import { useDispatch } from "react-redux"
import { ChangeEvent, useState } from "react"

const Index = () => {

    const router = useRouter()
    const dispatch: AppDispatch = useDispatch()

    const [query, setQuery] = useState<string>('')

    const [timer, setTimer] = useState(null)

    const search = async (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        if (timer) {
            clearTimeout(timer)
        }
        setTimer(
            setTimeout(async () => {
                await dispatch(await searchTracks(e.target.value))
            }, 500)
        )   
    }

    const {tracks, error} = useTypedSelector(state => state.track)

    if (error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }


    return <MainLayout title="Список треков - музыкальная платформа">
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
                <TextField fullWidth value={query} onChange={search}/>
                <TrackList tracks={tracks}/>
            </Card>
        </Grid>
    </MainLayout>
}

export default Index

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const dispatch = store.dispatch
        await dispatch(await fetchTracks())
        return {
            props: {}
        }
    }
)