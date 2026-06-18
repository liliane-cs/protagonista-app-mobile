import axios from "axios";

const baseUrlProfissionais =
  "https://6a2455f8420469ff067afedb.mockapi.io/api/v1";

const baseUrlCursos = "https://6a2450f1420469ff067afb7c.mockapi.io/api/v1";

const baseUrlLivros = "https://openlibrary.org";

export const apiProfissionais = axios.create({
  baseURL: baseUrlProfissionais,
});

export const apiCursos = axios.create({
  baseURL: baseUrlCursos,
});

export const apiLivros = axios.create({
  baseURL: baseUrlLivros,
});
