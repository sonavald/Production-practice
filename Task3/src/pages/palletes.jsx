import { Header } from "./components/header";
import { PalleteBlock } from './components/palleteBlock';
import palletes from "./../pallete.json";
import "./../css/pallete_block.css";


export function HomePage() {
    return (
        <>
            <Header />

            <div className="palletes">
                {palletes.map((pallete, index) => {
                    return <PalleteBlock blockInfo={pallete} key={index} />
                })}
            </div>
        </>
    )
};