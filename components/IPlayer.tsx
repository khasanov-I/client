import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { ChangeEvent, ReactNode, useEffect } from "react";
import styles from '../styles/IPlayer.module.scss'
import TrackProgress from "./TrackProgress";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";

interface IPlayerProps {}

let audio;

const IPlayer = ({}: IPlayerProps): ReactNode => {

    const track = {
        _id: '3',
        name: "Трек 3",
        artist: "Исполнитель 3",
        text: "Текст 3",
        listens: 0,
        picture: "http://localhost:5000/image/f6dcbe47-5aa3-430a-ac53-0bed7cfeab49.png",
        audio: "http://localhost:5000/audio/ad9b36ef-9b59-4997-ad0a-519250b62633.mp3",
        comments: [],
    }

    const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player)

    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActive} = useActions()

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
            audio.src = track?.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }, [])

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }

    const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {
                    pause ? <PlayArrow /> : <Pause />
                }
            </IconButton>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{track?.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
            <VolumeUp style={{marginLeft: 'auto'}} />
            <TrackProgress left={volume} right={100} onChange={changeVolume} />
        </div>
    );
};

export default IPlayer;