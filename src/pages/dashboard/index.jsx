import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Tesseract from "tesseract.js";

import { logoutAction } from "../../store/action/login.action";

import classes from "./style.module.css";

export default function DashboardPages() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    dispatch(logoutAction());
    history.replace("/login");
  };

  const recognize = async (file) => {
    const {
      data: { text },
    } = await Tesseract.recognize(file, "eng", {
      logger: (m) => console.log(m),
    });

    setOutput(text);
  };

  const handleFileChange = async (e) => {
    setLoading(true);
    await recognize(e.target.files[0]);
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <h2>Code 4</h2>
        <button className={classes.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div>
        <div className={classes.input}>
          <input type="file" multiple={false} onChange={handleFileChange} />
        </div>

        {loading && (
          <p className={classes.loadingText}>We are processing your image...</p>
        )}
        {!loading && !!output && (
          <div className={classes.outputText}>
            <p>{output}</p>
          </div>
        )}
      </div>
    </div>
  );
}
