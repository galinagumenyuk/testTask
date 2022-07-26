import React from "react";
import s from "./Blog.module.css"

const Blog = () => { 
    return (
        <div className={s.container}>
            
            <div className={s.wrapper}>
                <h3 className={s.subtitle}>April 16 2020</h3>
                <h2 className={s.title}>Blog Post One</h2>
                <p className={s.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                <button type="button" className={s.btn}>Read Our Blog</button>
                
            </div>
            <img src={require("../../images/home/blog.jpg")} alt="table" className={s.img} />
        </div>
    )
}

export default Blog;