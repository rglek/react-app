import { Control, useFieldArray, useForm, useWatch } from "react-hook-form";
import Headers from "./components/Header";
import "./styles.css";

type LeadCapabilityDetail = {
  detail: {
    employeeComment: string;
    amount: number;
    id?: number;
    leadCompetencyId?: number;
    leadStatusId?: number;
    managerComment?: string | undefined;
  }[];
};

let renderCount = 0;

function getTotal(payload: LeadCapabilityDetail["detail"]) {
  let total = 0;

  for (const item of payload) {
    total = total + (Number.isNaN(item.amount) ? 0 : item.amount);
  }

  return total;
}

function TotalAmout({ control }: { control: Control<LeadCapabilityDetail> }) {
  const cartValues = useWatch({
    control,
    name: "detail",
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
      detail: [{ employeeComment: "Pedro", amount: 0 }],
    },
  });
  const { fields, append, prepend, remove } = useFieldArray({
    name: "detail",
    control,
    rules: {
      required: "Please append at least 1 item",
    },
  });
  renderCount++;

  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <form
        onSubmit={handleSubmit((data) => {
          console.log("Submit data", data);
        })}
      >
        {fields.map((field, index) => {
          return (
            <section key={field.id}>
              <label>
                <span>Name {`detail.${index}.name`}</span>
                <input
                  {...register(`detail.${index}.employeeComment`, {
                    required: true,
                  })}
                />
              </label>
              <label>
                <span>amount</span>
                <input
                  type="number"
                  {...register(`detail.${index}.amount`, {
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
              amount: 0,
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
              amount: 0,
            });
          }}
        >
          prepend
        </button>

        <TotalAmout control={control} />

        <p>{errors.detail?.root?.message}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
