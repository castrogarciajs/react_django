import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { create } from "../api/api";

export function CreatePage() {
  const { register, handleSubmit } = useForm();
  const redirect = useNavigate();

  const title = register("title", { required: true });
  const description = register("description", { required: true });

  const onHandleSubmit = handleSubmit(async (data) => {
    await create(data);
    redirect("/");
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
