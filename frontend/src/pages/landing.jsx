import { Link, useNavigate } from "react-router-dom";
import "../App.css";
function LandingPage() {
    const router=useNavigate();
    return ( <div className="landingPageContainer">
        <nav>
            <div className="navHeader">
                <h2>Apna Video Call</h2>
            </div>
            <div className="navlist">
                <p onClick={()=>{
                    router("/1231")
                    // window.location.href="/2304";
                }}>Join as Guest</p>
                <p  onClick={()=>{router("/auth")}}>Register</p>
                <div role="button" onClick={()=>{router("/auth")}}>
                    <p>Login</p>
                </div>
            </div>
        </nav>
        <div className="landingMainContainer">
            <div>
                <h1><span style={{color:"#FF9839"}}>Connect</span> with Your Loved Ones</h1>
                <p>Cover a distance by apna video call</p>
                <div role="button">
                    <Link to={"/auth"}>Get Started</Link>
                </div>
            </div>
            <div>
                <img src="/mobile.png" alt="" />
            </div>
        </div>
    </div> );
}

export default LandingPage;