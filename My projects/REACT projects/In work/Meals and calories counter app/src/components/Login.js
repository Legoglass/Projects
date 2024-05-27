export function Login({
  userName,
  password,
  setUserName,
  setPassword,
  createAccounts,
  errorMessage,
  handeleLogin,
}) {
  return (
    <div className="maine-login-container col-12 d-flex h-100 justify-content-center align-items-center ">
      <div className="login-container col-10 d-flex flex-column justify-content-evenly align-items-center col-lg-4 col-sm-6 ">
        <p className="login-paragraph">Creat an account or login</p>
        <div className="d-flex flex-column">
          <input
            className="login-input"
            type="text"
            placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <input
            className="login-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="d-flex flex-column ">
          <button
            className="button-87 m-0"
            onClick={() => createAccounts(userName, password)}
          >
            Create account
          </button>
          <button className="button-87 " onClick={handeleLogin}>
            Login
          </button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}
