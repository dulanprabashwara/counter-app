import { useState } from "react";
import "../form.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [errorusername, setErrorusername] = useState("");
  const [erroremail, setErroremail] = useState("");
  const [errorpassword, setErrorpassword] = useState("");
  const [errorconfirmpassword, setErrorconfirmpassword] = useState("");

  const [usercolor, setUsercolor] = useState("");
  const [emailcolor, setEmailcolor] = useState("");
  const [passwordcolor, setPasswordcolor] = useState("");
  const [confirmpasswordcolor, setConfirmpasswordcolor] = useState("");

  const validate = (e) => {
    e.preventDefault();
    if (username.length > 8) {
      setErrorusername("");
      setUsercolor("green");
    } else {
      setErrorusername("username name must be 8 letters long");
      setUsercolor("red");
    }

    if (email.includes("@gmail")) {
      setErroremail("");
      setEmailcolor("green");
    } else {
      setEmailcolor("red");
      setErroremail("email should have @gmail");
    }
    if (password.length > 8) {
      setErrorpassword("");
      setPasswordcolor("green");
    } else {
      setErrorconfirmpassword("password should be 8 letters long  ");
      setPasswordcolor("red");
    }

    if (password != "" && password == confirmpassword) {
      setErrorconfirmpassword("");
      setConfirmpasswordcolor("green");
    } else {
      setErrorconfirmpassword("password didn't match");
      setConfirmpassword("red");
    }
  };
  return (
    <div className="card">
      <div className="card-image">
        <form>
          <input
            type="text"
            placeholder="name"
            style={{ borderColor: usercolor }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error">{errorusername}</p>
          <input
            type="text"
            placeholder="email"
            style={{ borderColor: emailcolor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className="error">{erroremail}</p>
          <input
            type="password"
            placeholder="password"
            style={{ borderColor: passwordcolor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="error">{errorpassword}</p>
          <input
            type="password"
            placeholder="confirm password"
            style={{ borderColor: confirmpasswordcolor }}
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />

          <p className="error">{errorconfirmpassword}</p>
          <button className="submit-btn" onClick={validate}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
