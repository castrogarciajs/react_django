import { useForm } from "react-hook-form";
import { create } from "../api/api";

export function CreatePage() {
  const { register, handleSubmit } = useForm();

  const title = register("title", { required: true });
  const description = register("description", { required: true });

  const onHandleSubmit = handleSubmit(async (data) => {
    const response = await create(data);
    console.log(response);
  });
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input type="text" placeholder="Ingresa un titulo" {...title} />
        <textarea
          rows={3}
          placeholder="ingresa una desscription"
          {...description}
        ></textarea>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
