import { NavLink, useParams } from "react-router-dom";
import { FooterV1 } from "./components/footer";
import { useContext } from "react";
import { blogsContext, monthConvert } from "../App";

import "./../css/detail.css";

export function BlogDetail() {
    const param_id = useParams().id;
    const blogList = useContext(blogsContext);

    const choosenBlog = blogList.find(obj => obj.id === Number(param_id));
    
    const previousHref = window.location.href.slice(window.location.href.indexOf("/blog-detail"), 1 + window.location.href.indexOf("/blog-detail") );

    return (
        <>
            <article className="detail">

                <section>
                    <div>
                        <img src={choosenBlog.img} />
                        <div>
                            <span className="date">{choosenBlog.addInfo.accauntName + " • " + monthConvert(choosenBlog.addInfo.date)}</span>
                            <h1>{choosenBlog.title}</h1>
                        </div>
                    </div>
                    <div className="paragraphs">
                        {
                            choosenBlog.content.map(paragraph => { return <p>{paragraph}</p> })
                        }
                    </div>
                    <NavLink to={previousHref} className="back-to-previous">
                        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="rgb(24, 29, 39, 1)" /> </g>
                        </svg>
                        Previous page
                    </NavLink>
                </section>
            </article>
            <FooterV1 />
        </>
    )
};