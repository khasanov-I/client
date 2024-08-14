import { ReactNode } from "react";
import { ITrack } from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

interface TrackPageProps {}

const TrackPage = ({}: TrackPageProps): ReactNode => {

    const track: ITrack = {
        _id: '1',
        name: "Трек 1",
        artist: "Исполнитель 1",
        text: "Текст 1",
        listens: 0,
        picture: "http://localhost:5000/image/unnamed.png",
        audio: "http://localhost:5000/audio/polog.mp3",
        comments: [],
    }

    const router = useRouter()

    return (
        <MainLayout>
            <Button variant="outlined" style={{fontSize: 32}} onClick={() => router.push('/tracks')}>
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200} />
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
                <TextField label='Ваше имя' fullWidth />
                <TextField rows={4} label='Комментарий' multiline fullWidth />
                <Button>Отправить</Button>
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