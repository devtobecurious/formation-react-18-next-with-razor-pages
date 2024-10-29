import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

declare const film: { id: number, label: string };

const filmSchema = z.object({
    label: z.string().min(1, { message: 'Required' }),
});

const Read = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: film,
        mode: "onChange",
        resolver: zodResolver(filmSchema)
    });

    const onSubmit = data => {
        console.info(errors)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("label", { required: true })} />
                {errors.label && <span>{errors.label?.message}</span>}
                <button disabled={!isValid}>Ajouter</button>
            </form>
        </>
    )
}

export default Read;