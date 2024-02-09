import { Control, useFieldArray, useForm, useWatch } from "react-hook-form";


type LeadCapabilityDetail = {
  dets: {
    employeeComment: string;
    id?: number;
    leadCompetencyId?: number;
    leadStatusId: number;
    managerComment?: string | undefined;
  }[];
};

let renderCount = 0;

function getTotal(payload: LeadCapabilityDetail["dets"]) {
  let total = 0;

  for (const item of payload) {
    total = total + (Number.isNaN(item.leadStatusId) ? 0 : item.leadStatusId);
  }

  return total;
}

function TotalAmout({ control }: { control: Control<LeadCapabilityDetail> }) {
  const cartValues = useWatch({
    control,
    name: "dets",
  });

  return <p>{getTotal(cartValues)}</p>;
}

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm<LeadCapabilityDetail>({
    defaultValues: {
      dets: [{ employeeComment: "Pedro", leadStatusId: 0 }],
    },
  });
  const { fields, append, prepend, remove } = useFieldArray({
    name: "dets",
    control,
    rules: {
      required: "Please append at least 1 item",
    },
  });
 

  renderCount++;

  return (
    <div>
      {/* <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      /> */}
      <form
        onSubmit={handleSubmit((data) => {
          console.log("Submit data", data);
        })}
      >
        {fields.map((field, index) => {
          return (
            <section key={field.id}>
              <label>
                <div>Name {`dets.${index}.employeeComment`}</div>
                <input
                  {...register(`dets.${index}.employeeComment`, {
                    required: true,
                  })}
                />
              </label>
              <label>
                <span>amount</span>
                <input
                  type="number"
                  {...register(`dets.${index}.leadStatusId`, {
                    valueAsNumber: true,
                  })}
                />
              </label>
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </section>
          );
        })}
        <button
          type="button"
          onClick={() => {
            append({
              employeeComment: "append",
              leadStatusId: 0,
            });
          }}
        >
          Append
        </button>
        <button
          type="button"
          onClick={() => {
            prepend({
              employeeComment: "prepend",
              leadStatusId: 0,
            });
          }}
        >
          prepend
        </button>

        <TotalAmout control={control} />

        <p>{errors.dets?.root?.message}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
