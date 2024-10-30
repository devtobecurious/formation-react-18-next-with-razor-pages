import httpClient from "../../../Infrastructures/http.client";
import { Film } from "../Models";

const updateMovie = async (film: Film): Promise<Film> => {
    const response = await httpClient.post<Film>(`/films/${film.id}`, film)
    return response.data
}

export default updateMovie