import React from "react";
import { useState, useEffect } from "react";
import fetch from "node-fetch";
import { useParams } from "react-router-dom";

function Employees() {
  const { id } = useParams();

  const [employees, setEmployees] = useState(null);

  useEffect(async () => {
    const result = await fetch(
      `http://anp.dev.wefluens.com:5000/employees/${id}`
    );
    const data = await result.json();
    setEmployees(data);
    console.log(data);
  }, []);

  if (!employees) {
    return (
      <>
        <p>
          Company Website:{" "}
          <a href="https://wefluens.com">https://wefluens.com</a>
        </p>
        <p>
          Company Instagram:{" "}
          <a href="https://www.instagram.com/wefluens/">
            https://www.instagram.com/wefluens/
          </a>
        </p>
        <p>
          Company YouTube:{" "}
          <a href="https://www.youtube.com/channel/UCjSeG4jioG6iqQYWDmr6gpg">
            https://www.youtube.com/channel/UCjSeG4jioG6iqQYWDmr6gpg
          </a>
        </p>
        <p>
          Company Facebook:{" "}
          <a href="https://www.facebook.com/wefluens/">
            https://www.facebook.com/wefluens/
          </a>
        </p>
        <p>
          Comapny TikTok:{" "}
          <a href="https://vm.tiktok.com/JJewnfW/">
            https://vm.tiktok.com/JJewnfW/
          </a>
        </p>
        <p>Company Address: 1334 Brittmoore Rd, #1603, Houston, TX 77043</p>
        <p>Company Phone Number: 713-929-3923</p>
      </>
    );
  }

  return (
    <div className="App">
      <h1>Name: {employees.name}</h1>
      <p>Phone: {employees.phone}</p>
      <p>Email: {employees.email}</p>
      <p>
        Photo: <img width="50" src={employees.image}></img>
      </p>
      <p>
        Company Website: <a href="https://wefluens.com">https://wefluens.com</a>
      </p>
      <p>
        Company Instagram:{" "}
        <a href="https://www.instagram.com/wefluens/">
          https://www.instagram.com/wefluens/
        </a>
      </p>
      <p>
        Company YouTube:{" "}
        <a href="https://www.youtube.com/channel/UCjSeG4jioG6iqQYWDmr6gpg">
          https://www.youtube.com/channel/UCjSeG4jioG6iqQYWDmr6gpg
        </a>
      </p>
      <p>
        Company Facebook:{" "}
        <a href="https://www.facebook.com/wefluens/">
          https://www.facebook.com/wefluens/
        </a>
      </p>
      <p>
        Comapny TikTok:{" "}
        <a href="https://vm.tiktok.com/JJewnfW/">
          https://vm.tiktok.com/JJewnfW/
        </a>
      </p>
      <p>Company Address: 1334 Brittmoore Rd, #1603, Houston, TX 77043</p>
      <p>Company Phone Number: 713-929-3923</p>
    </div>
  );
}

export default Employees;
