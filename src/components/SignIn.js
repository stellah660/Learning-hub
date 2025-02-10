import React, { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Keep Logged In:", keepLoggedIn);
  };

  const [showLoginModal, setShowLoginModal] = useState(false);
  const closeLoginModal = () => setShowLoginModal(false);

  return (
    <div style={styles.container}>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="keep-logged-in"
            name="keep-logged-in"
            checked={keepLoggedIn}
            onChange={(e) => setKeepLoggedIn(e.target.checked)}
            style={styles.checkbox}
          />
          <label htmlFor="keep-logged-in" style={styles.checkboxLabel}>
            Keep me logged in
          </label>
        </div>
        {/* <button type="submit" style={styles.button}>Sign in</button> */}
      </form>
      {/* <div style={styles.divider}>or</div> */}
      <div className="modal-buttons">
                <button className="button close-button" onClick={closeLoginModal}>
                  Close
                </button>
                <button className="button submit-button">Login</button>
              </div>
      <div style={styles.footer}>
        Need an account? <a href="#" style={styles.link}>Create one</a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "20px 30px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  formGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  checkboxGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  checkbox: {
    marginRight: "5px",
  },
  checkboxLabel: {
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  divider: {
    margin: "20px 0",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    fontSize: "14px",
    color: "#666",
  },
  googleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#fff",
  },
  googleLogo: {
    height: "16px",
    marginRight: "10px",
  },
  footer: {
    marginTop: "20px",
    fontSize: "12px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default SignInForm;
