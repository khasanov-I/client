import { ReactNode } from "react";

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e) => void
}

const TrackProgress = ({left, right, onChange}: TrackProgressProps): ReactNode => {
    
    return (
        <div style={{display: 'flex'}}>
            <input 
                min={left} 
                max={right} 
                value={left} 
                onChange={onChange} 
                type="range" />
            <div>{left} / {right}</div>
        </div>
    );
};

export default TrackProgress;