import { useState } from "react";

import Button from "../../Button";

const EmailCard = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/; //regex to verify email basically \S is any non-space character

    if (emailRegex.test(email))
      return true; //if valid we return true else false
    else return false;
  };

  const handleSubmit = () => {
    const valid = validateEmail(email);

    if (!valid) setError(true);
  };

  const handleEmail = (event) => {
    if (error) setError(false);

    setEmail(event.target.value);
  };

  return (
    <div className="email-card-container">
      <h5 className="raleway">Get early access today</h5>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      <div className="input-container">
        <input
          type="text"
          value={email}
          placeholder="email@example.com"
          onChange={handleEmail}
          className={`email-input`}
        />
        {error && <p className="error">Please enter a valid email address</p>}
      </div>
      <Button onClick={handleSubmit} label="Get Started For Free" />
    </div>
  );
};

export default EmailCard;
