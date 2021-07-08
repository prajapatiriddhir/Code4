import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginSuccessAction } from "../../store/action/login.action";

import classes from "./style.module.css";

const dummyCredential = {
  email: "test@gmail.com",
  password: "123",
};

const loginWithApi = (email, password) => {
  if (
    email === dummyCredential.email &&
    password === dummyCredential.password
  ) {
    return true;
  }

  return false;
};

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const response = loginWithApi(form.email, form.password);
    if (response) {
      dispatch(loginSuccessAction(form));
      history.replace("/");
      return;
    }

    setError("Invalid username or password");
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <p className={classes.loginTitle}>Login Page</p>
      <input
        placeholder="Email"
        className={classes.input}
        type="email"
        required
        value={form.email}
        name="email"
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        className={classes.input}
        type="password"
        value={form.password}
        required
        name="password"
        onChange={handleChange}
      />

      {!!error && <span className={classes.errortext}>{error}</span>}

      <button className={classes.button}>Login</button>
    </form>
  );
}
