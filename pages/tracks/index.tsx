import { Box, Button, Card, Grid } from "@mui/material"
import MainLayout from "../../layouts/MainLayout"
import { useRouter } from "next/navigation"
import TrackList from "../../components/TrackList"
import { useTypedSelector } from "../../hooks/useTypeSelector"
import { wrapper } from "../../store"
import { fetchTracks } from "../../store/actions-creators/track"
import { useDispatch } from "react-redux"

const Index = () => {

    const router = useRouter()

    const {tracks, error} = useTypedSelector(state => state.track)

    if (error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }

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

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const dispatch = store.dispatch
        await dispatch(await fetchTracks())
        return {
            props: {}
        }
    }
)