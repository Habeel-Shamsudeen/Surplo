import { useEffect, useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HeadingLogin } from "../components/HeadingLogin";
import { InputBoxLogin } from "../components/InputBoxLogin";
import { ButtonLogin } from "../components/ButtonLogin";

export function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function getMyData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/me",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if(response.data.loggedIn){
          navigate('/home');
        }
      } catch (err) {}
    }
    getMyData();
  }, []);
  return (
    <div className="flex h-screen justify-center bg-text-800">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white text-center h-max w-80 px-4 p-2 bg-accent bg-primary-300">
          <HeadingLogin label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBoxLogin
            label={"Email"}
            placeholder={"johndoe@example.com"}
            onChange={(e) => setEmail(e.target.value)}
            type={"text"}
          />
          <InputBoxLogin
            label={"Password"}
            placeholder={""}
            onChange={(e) => setPassword(e.target.value)
          }
          type={"password"}
          />
          <ButtonLogin label={"Sign in"} 
          onClick={async () => {
            try {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signin",
                {
                  email,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/home");
            } catch (err) {
              alert(err.response.data.message);
            }
          }}/>
          <BottomWarning
            label={"Don't have an account? "}
            text={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}
