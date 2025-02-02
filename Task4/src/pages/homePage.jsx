import { useState, useContext } from "react";
import { Pagination } from "./components/pagination";
import { FooterV1 } from "./components/footer";
import { BlogCard } from "./components/blog-card";
import { chooseBlogs, showBlogs } from "../scripts/blogsSctipts";

import './../css/header_footer.css';
import './../css/home.css';
import { blogsContext } from "../App";


export function HomePage() {
    const [searchValue, setSearchValue] = useState('');     //змінна з значенням для пошуку
    const [sortProperty, setSortProperty] = useState('id'); //змінна з значенням для сортування
    const [firstBlog, setFirstBlog] = useState(0);          //номер початкового блогу для пагінації
    const blogList = useContext(blogsContext);


    const sortChange = (event) => {

        if (event.target.value === "Most recent")
            setSortProperty('id');
        if (event.target.value === "Name A-Z")
            setSortProperty('title');
        if (event.target.value === "Date")
            setSortProperty('date');
    }

    const subscribeCard =

        <div className="blog-subscribe">
            <div className="icon">
                <img src="./img/send.svg" />
            </div>
            <h3>Weekly newsletter</h3>
            <p>No spam. Just the latest releases and tips, interesting articles, and exclusive interviews in your inbox every week.</p>
            <form>
                <input type="email" placeholder="Enter your email" />
                <label>Read about our <a>privacy policy</a>.</label>
                <input type="button" value="Subscribe" />
            </form>
        </div>;

    return (
        <>
            <article className="home-header">
                <section className="title">
                    <p>Our blog</p>
                    <h1>The latest writings from our team</h1>
                    <span>The latest industry news, interviews, technologies, and resources.</span>

                    <input type="text" name="search" placeholder="Search" value={searchValue} onChange={event => setSearchValue(event.target.value)} />
                </section>
            </article>
            <article className="blogs">
                <section>
                    <select className="sort" onChange={sortChange}>
                        <option>Most recent</option>
                        <option>Name A-Z</option>
                        <option>Date</option>
                    </select>
                </section>
                <section className="blog-cards">

                    {
                        showBlogs(blogList, sortProperty, searchValue, firstBlog, true).map((blog, index) => {
                            if (index === 3)
                                return (
                                    <>
                                        {subscribeCard}
                                        <BlogCard key={blog.id} blogInfo={blog} isCategory={false} />
                                    </>)
                            return <BlogCard key={blog.id} blogInfo={blog} isCategory={false} />
                        })
                    }

                </section>
                <section>

                    <Pagination
                        onChangePage={(numb) => setFirstBlog(numb)}
                        blogsCount={chooseBlogs(blogList, sortProperty, searchValue).length}
                    />
                </section>
            </article>
            <article className="trial">
                <section>
                    <h1>No long-term contracts. No catches.</h1>
                    <p>Start your 30-day free trial today.</p>
                    <div className="trial-buttons">
                        <button>Learn more</button>
                        <button>Get started</button>
                    </div>
                </section>
                <section className="img">

                </section>
            </article >
            <FooterV1 />
        </>
    )
};


