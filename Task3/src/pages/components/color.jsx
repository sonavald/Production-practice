import  {CopyColor} from "./../../scripts/copingColor";

export function BlockColor({ bgcolor }) {
    return (
        <div className="color" style={{ backgroundColor: bgcolor }}></div>
    )
};

export function BigBlockColor({ bgcolor, colorName }) {
    
    return (
        <>
 
            <div className="color" style={{ backgroundColor: bgcolor }}>
                <a className="hex-copy">COPY</a>
                <span>{colorName}</span>
            </div>
        </>
    )
};
