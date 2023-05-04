import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { CREATE, DELETE } from "../api/api";

export function CreatePage() {
  const { register, handleSubmit } = useForm();
  const redirect = useNavigate();
  const params = useParams();

  const title = register("title", { required: true });
  const description = register("description", { required: true });

  const onHandleSubmit = handleSubmit(async (data) => {
    if (params.id) {
    } else {
      await CREATE(data);
    }
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
      {params.id && (
        <button
          onClick={async () => {
            const res = confirm("Estas seguro ?");

            if (res) {
              await DELETE(params.id);
              redirect("/");
            }
          }}
        >
          DELETE
        </button>
      )}
    </div>
  );
}
