import { NavLink } from "react-router-dom";
import { BlockColor } from "./color";

export function PalleteBlock({ blockInfo }) {
    return (
        <div className="small-pallete">
            <NavLink to={`/pallete/${blockInfo.id}`}>
                <div className="colors">
                    {blockInfo.colors.map((colorInst, index) => {
                        return <BlockColor bgcolor={colorInst.color} key={index}/>
                    })}
                </div>
                <div className="name">{blockInfo.paletteName}<span>{blockInfo.emoji}</span></div>
            </NavLink>
        </div>
    )
};