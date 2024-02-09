import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type userData = {
  id: number;
  userName: string;
};
const Binded = (pars: userData) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userData>();
  const [name, setExample] = React.useState("");

  //   const { setValue } = useFormContext();

  const onSubmit: SubmitHandler<userData> = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it
  //   const apiData: userData = { id: 1, userName: "Pedro" };
  const [food, setFood] = useState("");
  return (
    <>
      <form>
        <div>
          <input
            type="text"
            {...register("userName")}
            onChange={(event) => {
              const value = event.target.value;
              //apiData.userName = value;
              // setFood(value);
            }}
          ></input>
        </div>
      </form>
      <p>{pars.userName}</p>
    </>
  );
};

export default Binded;
