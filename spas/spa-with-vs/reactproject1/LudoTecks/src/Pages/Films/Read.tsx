import { useForm } from "react-hook-form";

declare const film: { id: number, label: string };

const Read = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input value={film.label} {...register("label", { required: true })} />

                <button>Ajouter</button>
            </form>
        </>
    )
}

export default Read;