import { useEffect, useState } from "react";
import { BottomWarning } from "../components/Auth/BottomWarning";
import { SubHeading } from "../components/Auth/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HeadingLogin } from "../components/Auth/HeadingLogin";
import { InputBoxLogin } from "../components/Auth/InputBoxLogin";
import { ButtonLogin } from "../components/Auth/ButtonLogin";

export function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function getMyData() {
      try {
        const response = await axios.get(
          "https://surplo-api.vercel.app/api/v1/user/me",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if(response.data.loggedIn){
          navigate('/foodsurplus/expired');
        }
      } catch (err) {}
    }
    getMyData();
  }, []);
  return (
    <div className="flex h-screen justify-center bg-text-200">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white text-center h-max w-80 px-4 p-2 bg-accent bg-primary-300 shadow-md">
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
                "https://surplo-api.vercel.app/api/v1/user/signin",
                {
                  email,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate('/foodsurplus/expired');
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
