import { useRef } from "react";

const RegisterForm = ({ postRegistration }) => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    postRegistration(email, name, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" name="username" placeholder="Username" />
      <input ref={emailRef} type="email" name="email" placeholder="Email" />      <input
        ref={passwordRef}
        type="password"
        name="password"
        placeholder="Passwort"
      />
      <button>Submit</button>
    </form>
  );
};

export default RegisterForm;
