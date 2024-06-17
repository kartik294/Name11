import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleFirstName = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setFirstName(value);
      setError("");
    } else {
      setError("Please enter valid characters (letters and spaces only)");
    }
  };

  const handleLastName = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setLastName(value);
      setError("");
    } else {
      setError("Please enter valid characters (letters and spaces only)");
    }
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
      <h1>Full Name</h1>
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
      {fullName && <p>FullName: {fullName}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
