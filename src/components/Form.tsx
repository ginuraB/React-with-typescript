import React from "react";
import { useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null && ageRef.current !== null) {
      console.log("Name is" + " " + nameRef.current.value);
      console.log("Age is" + " " + ageRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="namexxx" className="form-label">
          Name
        </label>
        <input
          ref={nameRef}
          id="namexxx"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="agexxx" className="form-label">
          Age
        </label>
        <input
          ref={ageRef}
          id="agexxx"
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
