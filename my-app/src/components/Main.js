import "../css/Main.css";
import background from "../photo/background.png";


function Main() {
    return (

        <div className="main">
            <img src={background} id="arkaplan" />

            <div class="header-content">
                <h4 class="header-subtitle" >Merhaba, Ben</h4>
                <h1 class="header-title">Yasin Delibal</h1>
                <div class="yaziikonlar">
                <h6 class="header-mono" >Full Stack Developer | Student </h6>
                <div class="etiketler ">
                    <a href="https://tr.linkedin.com/in/yasin-delibal-375125180/en?trk=public_profile_locale-url" ><i class="ikonbir fa-brands fa-linkedin fa-2x" ></i></a>
                    <a href="https://github.com/yasindelibal"><i class="ikoniki fa-brands fa-github fa-2x" ></i></a>
                    <a href="mailto:yasindelibal06@gmail.com"><i class="ikonuc fa-solid fa-envelope-open fa-2x" ></i></a>
                </div>
                </div>

            </div>

        </div>
    );
}

export default Main;