import React from "react";

const Form = () => {
  const nameRef = useRef(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      console.log(nameRef.current.value);
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
        <input id="agexxx" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
