import "../css/Hakkimda.css";
import bootstraps from "../skills/bootstrap.svg";
import css3 from "../skills/css3.svg";
import html5 from "../skills/html5.svg";
import javascript from "../skills/javascript.svg";
import reacts from "../skills/react.svg";
import reactrouter from "../skills/reactrouter.svg";



function Hakkimda(){
    return(
        <div className="hakkimda">


		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2">
					<h2 id="aboutme">Hakkımda</h2>
				</div>
			</div>
			<div class="row">
                <div className="col-md-4">
                     <img src="#" id="hakkimdagif"/>
                </div>
				<div class="col-md-8" id="aciklama">
					<h2 className="maraba">Hello There!</h2>
					<p>There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.</p>
					<p>Far far away, behind the word mountains, Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci there live the blind texts from the countries Vokalia and Consonantia, there live the blind texts. Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.</p>
                    <button>he</button>
				</div>
			</div>
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                   <h2 id="yetenek">Teknik Yeteneklerim</h2>    
                </div> 
            </div>
            <div className="row">
                <div className="col-md-2" ><img src={bootstraps} id="icons"></img><h1 className="iconyazi">BOOTSTRAP</h1></div>
                <div className="col-md-2" ><img src={css3} id="icons"></img><h1 className="iconyazi">CSS</h1></div>
                <div className="col-md-2" ><img src={html5} id="icons"></img><h1 className="iconyazi">HTML</h1></div>
                <div className="col-md-2" ><img src={reacts} id="icons"></img><h1 className="iconyazi">REACT</h1></div>
                <div className="col-md-2" ><img src={javascript} id="icons"></img><h1 className="iconyazi">JAVASCRİPT</h1></div>
                <div className="col-md-2" ><img src={reactrouter} id="icons"></img><h1 className="iconyazi">REACT ROUTER</h1></div>


            </div>
		</div>
	</div>

      
 
    )
}

export default Hakkimda;