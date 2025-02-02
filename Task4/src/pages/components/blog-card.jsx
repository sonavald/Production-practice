import "./../../css/card.css"
import {monthConvert} from "./../../App";
import { NavLink } from "react-router-dom";

export function BlogCard({ blogInfo, isCategory }) {

    const CARD =
        <div className="card">
            <img className="card-img" src={blogInfo.img} />
            {categoryName(isCategory, blogInfo)}
            <h3 className="tittle"><NavLink to={`blog-detail/${blogInfo.id}`}>{blogInfo.title}</NavLink> <a><img src="./img/arrows/arrow-right-up.svg" /></a></h3>
            <p className="card-title-caption">{blogInfo.titleCaption}</p>
            <div className="acc-post">
                <img src={blogInfo.addInfo.accauntImg} />
                <span>{blogInfo.addInfo.accauntName}</span>
                <span>{monthConvert(blogInfo.addInfo.date)}</span>
            </div>
        </div>;

    function cardContainer(elem) {
        if (isCategory) {
            return (<div className="card-container">
                {elem}
            </div>)
        }
        else
            return elem;
    };

    
    return (
        <>
            {
                cardContainer(CARD)
            }
        </>
    )
};

function categoryName(condition, info) {
    return (
        (condition) ?
            <p className="category-min">
                <span className="category">{info.category + " "}</span>
                <span className="min">{info.min} min read</span>
            </p>
            :
            <p className="tag">{info.category}</p>
    )
};
