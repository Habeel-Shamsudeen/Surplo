import { useNavigate } from "react-router-dom"
import { AppBarLanding } from "../components/AppBarLanding";

export function LandingPage(){
    const navigate = useNavigate();
    return<div>
        <AppBarLanding name={"habeel"} onChange={()=>{}}/>
        Landing page
        <button onClick={()=>{
            navigate('/signup')
        }}>signup</button>
                <button onClick={()=>{
            navigate('/signin')
        }}>signin</button>
    </div>
}