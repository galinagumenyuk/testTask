import React from "react";
import s from "./Blog.module.css"
import jpeg from "../../images/home/blog.jpg";
import jpeg2 from "../../images/home/blog@2x.jpg";
import webp from "../../images/home/blog.webp";
import webp2 from "../../images/home/blog@2x.webp";

const Blog = () => { 
    return (
        <div className={s.container} id="blog">
            
            <div className={s.wrapper}>
                <h3 className={s.subtitle}>April 16 2020</h3>
                <h2 className={s.title}>Blog Post One</h2>
                <p className={s.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                <button type="button" className={s.btn}>Read Our Blog</button>
            </div>
            <img
                src={webp}
                srcSet={`${webp2} 2x, ${jpeg}, ${jpeg2} 2x`}
                alt="person1"
                className={s.img}/>
        </div>
    )
}

export default Blog;