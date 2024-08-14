import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { ReactNode } from "react";
import styles from '../styles/IPlayer.module.scss'
import TrackProgress from "./TrackProgress";

interface IPlayerProps {}

const IPlayer = ({}: IPlayerProps): ReactNode => {

    const track = {
        _id: '3',
        name: "Трек 3",
        artist: "Исполнитель 3",
        text: "Текст 3",
        listens: 0,
        picture: "http://localhost:5000/image/unnamed.png",
        audio: "http://localhost:5000/audio/polog.mp3",
        comments: [],
    }
    const active = false

    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {
                    !active ? <PlayArrow /> : <Pause />
                }
            </IconButton>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => {}} />
            <VolumeUp style={{marginLeft: 'auto'}} />
            <TrackProgress left={0} right={100} onChange={() => {}} />
        </div>
    );
};

export default IPlayer;