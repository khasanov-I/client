import { ReactNode, useState } from "react";
import { ITrack } from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { wrapper } from "../../store";
import axios from "axios";
import { useInput } from "../../hooks/useInput";
import { text } from "stream/consumers";

const TrackPage = ({serverTrack}): ReactNode => {

    const [track, setTrack] = useState<ITrack>(serverTrack)

    const router = useRouter()
    const username = useInput('')
    const comment = useInput('')

    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/track/comment', {
                username: username.value,
                text: comment.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <MainLayout 
            title={"Музыкальная платформа - " + track.name + " - " + track.artist}
            keywords={"Музыка, артисты, " + track.name + ", " + track.artist}>
            <Button variant="outlined" style={{fontSize: 32}} onClick={() => router.push('/tracks')}>
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={'http://localhost:5000/' + track.picture} width={200} height={200} />
                <div style={{margin: '20px 0'}}>
                    <h1>Название трека - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова песни</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField {...username} label='Ваше имя' fullWidth />
                <TextField {...comment} rows={4} label='Комментарий' multiline fullWidth />
                <Button onClick={addComment}>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment => <div>
                    <div>Автор - {comment.username}</div>
                    <div>Комментарий - {comment.text}</div>
                </div>)}
            </div>
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const response = await axios.get('http://localhost:5000/track/' + context.params.id)
        return {
            props: {
                serverTrack: response.data
            }
        }
    }
)