import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BigBlockColor } from "./color";
import palletes from "./../../pallete.json";
import  {CopyColor} from "./../../scripts/copingColor";

export function BigPallete() {
    const param_id = useParams();
    
    const pallete = palletes.find(p => p.id === param_id.id);

    return (
        <>
            <div className="bigPallete">
                <div className="previous"><NavLink to="/">← Back</NavLink></div>
                <div className="colors">
                    {pallete.colors.map((colorInst, index) => {
                        return <BigBlockColor bgcolor={colorInst.color} colorName={colorInst.name} key={index}/>
                    })}
                    
                </div>
                <div className="name">{pallete.paletteName}</div>
                
                <div className="copied">
                    <div className="copied-alert">
                        GOT IT!
                        <span className="color-code"></span>
                    </div>
                </div>
            </div>
        </>
    )
};