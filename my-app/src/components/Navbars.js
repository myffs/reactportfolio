import { Link } from "react-router-dom";
import "../css/Navbars.css";
import mainsimge from "../photo/mainsimge.gif"


function Navbars() {
    return (
        <div className="navbars">
            <header class="header" id="header">
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        <Link to="/anasayfa"><img src={mainsimge} id="mainsimge" />
                            
</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav link-effect-2" id="link-effect-2">
                                <li class="nav-item">
                                    <Link to="/anasayfa" class="raise">Anasayfa</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/blog" class="raise" >Blog</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/hakkimda" class="raise" >Hakkımda</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Navbars