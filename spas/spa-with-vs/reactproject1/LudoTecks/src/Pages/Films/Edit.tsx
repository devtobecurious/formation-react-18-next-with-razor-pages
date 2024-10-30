import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Film } from "./Models";
import updateMovie from "./Services/update-movie";

declare const film: Film;

const filmSchema = z.object({
    label: z.string().min(1, { message: 'Required' }),
});

const Read = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: film,
        mode: "onChange",
        resolver: zodResolver(filmSchema)
    });

    const onSubmit =  async (data: Film) => {
        if (isValid) {
            try {
                data.id = film.id
                await updateMovie(data)

                alert('Film is updated !')
            } catch(error: unknown) {
                console.error('Failed to save film', error)
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register("id")} ></input>
                <input {...register("label", { required: true })} />
                {errors.label && <span>{errors.label?.message}</span>}
                <button disabled={!isValid}>Ajouter</button>
            </form>
        </>
    )
}

export default Read;