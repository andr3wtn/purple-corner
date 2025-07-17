"use client";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e:React.FormEvent) {
        e.preventDefault();

        const res = await fetch('/api/admin/login', {
            method: "POST",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify({ username, password })
        });

        if (res.ok) {
            window.location.href = "/admin";
        } else {
            alert("Wrong account or password.");
        }
    }

    return (
    <div className="p-20">
        <h1 className="text-[3rem] m-0">Admin Login Page</h1>
        <form onSubmit={handleLogin} className="flex gap-5">
            <input
                type="text"
                placeholder="Username"
                className="border rounded p-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="border rounded p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="submit"
                className="px-5 bg-purple-700 hover:bg-purple-800 text-white rounded-lg p-3"
            >Login</button>
        </form>
    </div>)
}