import { ReactNode } from "react";
import { ITrack } from "../types/track";
import { Box, Grid } from "@mui/material";
import TrackItem from "./TrackItem";

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList = ({tracks}: TrackListProps): ReactNode => {
    return (
        <Grid container direction='column'>
            <Box p={2}>
                {tracks.map(track => 
                    <TrackItem track={track} key={track._id} />
                )}
            </Box>
        </Grid>
    );
};

export default TrackList;