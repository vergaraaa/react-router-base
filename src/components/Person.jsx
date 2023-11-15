import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Person = () => {

    const { name, lastname} = useParams();
    const navigate = useNavigate();

    const send = e => {
        e.preventDefault();
        let name = e.target.name.value;
        let lastname = e.target.lastname.value;

        let url = `/person/${name}/${lastname}`;

        if(name.length <= 0 && lastname.length <= 0) {
            return navigate("/home");
        }
        else if(name === "contact") {
            return navigate("/contact");
        }

        navigate(url);
    }

  return (
    <div>
        { !name && <h1>No person to show</h1> }
        { name && <h1>Person page: {name} {lastname}</h1> }
        <p>This is the person page</p>

        <form onSubmit={send}>
            <input type="text" name="name" />
            <input type="text" name="lastname" />
            <input type="submit" name="send" value="Send" />
        </form>
    </div>
  )
}
