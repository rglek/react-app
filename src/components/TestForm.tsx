import React from "react";

import { useForm, SubmitHandler, useFormContext } from "react-hook-form";

type Props = {
  example: string;
  exampleRequired: string;
};

const TestForm = (pars: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Props>();
  const [name, setExample] = React.useState("");

  //   const { setValue } = useFormContext();

  const onSubmit: SubmitHandler<Props> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  //   setValue("example", pars.example);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <h4> Example: {pars.example} </h4>
        <input
          // defaultValue="test"
          // {...register("example")}
          value={pars.example}
          onChange={(event) => {
            setExample(event.target.value);
          }}
        />
            <p>
        <strong>Example Current value:</strong>
        {pars.example || "(empty)"}
      </p>

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <div>
          <label htmlFor="name-field">Name:</label>
          <input
            id="name-field"
            value={name}
            // onChange={(event) => {
            //   setName(event.target.value);
            // }}
          />
        </div>
        <input type="submit" />
      </form>
      <p>
        <strong>Current value:</strong>
        {name || "(empty)"}
      </p>
    </>
  );
};

export default TestForm;
function setValue(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
