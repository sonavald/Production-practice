import { useContext, useState } from "react";
import { FooterV1 } from "./components/footer";
import { BlogCard } from "./components/blog-card";
import { Pagination } from "./components/pagination";
import { filterCategory, showBlogs } from "../scripts/blogsSctipts";
import "./../css/categories.css";
import { blogsContext } from "../App";

export function BlogCategories() {
    const [firstBlog, setFirstBlog] = useState(0);
    const [category, setCategory] = useState("");
    const blogList = useContext(blogsContext);    

    const changeCategory = (e) => {
        document.querySelectorAll(".categories li").forEach(li => li.classList.remove("active"));
        if (e.target.tagName === "LI") {
            if (e.target.textContent === "View all")
                setCategory("");
            else
                setCategory(e.target.textContent);
            e.target.classList.add("active");
            if (window.screen.width < 980)
                document.querySelector(".mob-drop-down span").textContent = e.target.textContent;
        }
        if (window.screen.width < 980)
            e.target.parentNode.classList.toggle("displayed");
    }

    const showCateg = () => {
        document.querySelector(".categories").classList.toggle("displayed");
    }

    return (
        <>
            <article className="category-header">
                <section className="title">
                    <p>Our blog</p>
                    <h1>Resources and insights</h1>
                    <span>The latest industry news, interviews, technologies, and resources.</span>
                </section>
            </article>
            <article className="blogs-container">
                <aside>
                    <input placeholder="Search"/>
                    <p>Blog Categories</p>
                    {
                        (window.screen.width < 980) && (
                            <div className="mob-drop-down" onClick={showCateg}>
                                <span>View all</span><img src="./img/arrows/chevron-down.svg" />
                            </div>
                        )
                    }
                    <ul className="categories" onClick={changeCategory}>
                        <li className="active">View all</li>
                        <li>Design</li>
                        <li>Product</li>
                        <li>Software Engineering</li>
                        <li>Customer success</li>
                        <li>Leadership</li>
                        <li>Managment</li>
                    </ul>
                </aside>
                <section className="blogs">
                    {
                        showBlogs(blogList, "", category, firstBlog, false).map((blog) => {
                            return <BlogCard key={blog.id} blogInfo={blog} isCategory={true} />
                        })
                    }

                    <div className="pag-container">
                        
                        <Pagination
                            onChangePage={(numb) => setFirstBlog(numb)}
                            blogsCount={filterCategory(blogList, category).length}
                        />
                    </div>
                </section>

            </article>
            <FooterV1 />

            <script>



            </script>
        </>
    )
};