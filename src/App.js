import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleFirstName = (event) => {
    const value = event.target.value;
    setFirstName(value);
    setError("");
  };

  const handleLastName = (event) => {
    const value = event.target.value;
    setLastName(value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName.trim()} ${lastName.trim()}`);
      setError("");
    } else {
      setFullName("");
      setError("Please fill in both fields");
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstName}
            placeholder="Enter the first Name"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastName}
            placeholder="Enter the last Name"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
