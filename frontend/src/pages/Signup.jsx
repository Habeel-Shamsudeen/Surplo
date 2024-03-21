import React, { useEffect, useState } from "react";
import { SubHeading } from "../components/Auth/SubHeading";
import { BottomWarning } from "../components/Auth/BottomWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HeadingLogin } from "../components/Auth/HeadingLogin";
import { InputBoxLogin } from "../components/Auth/InputBoxLogin";
import { ButtonLogin } from "../components/Auth/ButtonLogin";
export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phno, setPhno] = useState("");
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
          navigate('/foodsurplus/expired');
        }
      } catch (err) {}
    }
    getMyData();
  }, []);
  
  return (
    <div className="flex h-screen bg-background justify-center bg-text-200">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-primary-300 text-center h-max w-96 px-4 p-2">
          <HeadingLogin label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <div className="flex">
            <InputBoxLogin
              label={"First Name"}
              placeholder={"Jacob"}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type={"text"}
            />
            <InputBoxLogin
              label={"Last Name"}
              placeholder={"Jomy"}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type={"text"}
            />
          </div>

          <InputBoxLogin
            label={"Email"}
            placeholder={"jocob@example.com"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type={"text"}
          />
          <InputBoxLogin
            label={"phone number"}
            placeholder={"999999999"}
            onChange={(e) => {
              setPhno(e.target.value);
            }}
            type={"text"}
          />
          <InputBoxLogin
            label={"Password"}
            placeholder={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={"password"}
          />
          <ButtonLogin label={"Sign up"} onClick={async () => {
              try {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    email,
                    firstName,
                    lastName,
                    password,
                    phno
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/home");
              } catch (error) {
                alert(error.response.data.message);
              }
            }}/>
          <BottomWarning
            label={"Already have an account?"}
            text={" Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}
