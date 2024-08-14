import { ChangeEvent, ReactNode, useRef } from "react";

interface FileUploadProps {
    setFile: Function;
    accept: string;
    children: ReactNode;
}

const FileUpload = ({setFile, accept, children}: FileUploadProps): ReactNode => {
    
    const ref = useRef<HTMLInputElement>()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files[0])
    }

    return (
        <div onClick={() => ref.current.click()}>
            <input 
                accept={accept} 
                ref={ref} 
                style={{display: "none"}} 
                type="file"
                onChange={onChange}/>
            {children}
        </div>
    );
};

export default FileUpload;