"use client";
import app from "@/config/app";
import Image from "next/image";
import React, { useState } from "react";

export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    try {
      const response = await app.post("/api/login", data);

      if (response) {
        window.location.href = "/dashboard";
      } else {
        throw new Error("vc é burro");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={data.username}
              onChange={(e) =>
                setData((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={(e) =>
                setData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
