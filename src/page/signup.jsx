import { useState } from "react";
import api from "../api";

export default function Signup() {
  const [data, setData] = useState({});

  const signup = async () => {
    await api.post("/auth/signup", data);
    alert("Account created");
  };

  return (
    <div className="form-container">
      <h2>📝 Signup</h2>
      <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} />
      <input placeholder="Password" type="password" onChange={e => setData({...data, password: e.target.value})} />
      <button onClick={signup}>Create Account</button>
    </div>
  );
}
