import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function ExpiredFood(){
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
          } catch (err) {
            navigate('/signin')
          }
        }
        getMyData();
      }, []);
    return <div>
        expired food
    </div>
    
}