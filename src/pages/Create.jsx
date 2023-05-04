import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { CREATE, DELETE, UPDATE, LIKE } from "../api/api";

export function CreatePage() {
  const { register, handleSubmit, setValue } = useForm();
  const redirect = useNavigate();
  const params = useParams();

  const title = register("title", { required: true });
  const description = register("description", { required: true });

  const onHandleSubmit = handleSubmit(async (data) => {
    if (params.id) {
      UPDATE(params.id, data);
    } else {
      await CREATE(data);
    }
    redirect("/");
  });

  useEffect(() => {
    const load = async () => {
      if (params.id) {
        const res = await LIKE(params.id);

        setValue("title", res.data.title);
        setValue("description", res.data.description);
      }
    };
    load();
  });
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input type="text" placeholder="Ingresa un titulo" {...title} />
        <textarea
          rows={3}
          placeholder="ingresa una description"
          {...description}
        ></textarea>

        <button type="submit">{params.id ? "UPDATE" : "CREATE"}</button>
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
