import "../css/Blog.css";
import { Link } from "react-router-dom"

function Blog() {
    return (
        <div className="blog">
            <div class="background-one">
                <div class="link-container">
                    <Link to="/blog/kisiselblog" className="link-one">Kişisel</Link>
                </div>
            </div>
            <div class="background-three link-container">
                <Link to="/blog/dokuman" className="link-three">Yazılım</Link>
            </div>
        </div>
    )
}

export default Blog;