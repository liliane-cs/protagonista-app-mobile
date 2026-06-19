import { apiCursos, apiLivros, apiProfissionais } from "./api";
import { Curso } from "../types/cursos";
import { Profissional } from "../pages/Profissionais/types";
import { Livro } from "../types/livros";
import { Apoio } from "../types/apoios";
import { Oportunidade } from "../types/oportunidades";

// Profissionais

export const getProfissionais = async (): Promise<Profissional[]> => {
  const response = await apiProfissionais.get("/profissionais");
  return response.data;
};

export const getProfissionaisById = async (
  id: string,
): Promise<Profissional> => {
  const response = await apiProfissionais.get(`/profissionais/${id}`);
  return response.data;
};

export const cadastrarProfissional = async (
  profissional: Omit<Profissional, "id">,
): Promise<Profissional> => {
  const response = await apiProfissionais.post(`/profissionais`, profissional);
  return response.data;
};

export const atualizarProfissional = async (
  id: string,
  dadosAtualizados: Partial<Profissional>,
): Promise<Profissional> => {
  const response = await apiProfissionais.put(
    `/profissionais/${id}`,
    dadosAtualizados,
  );
  return response.data;
};

export const deletarProfissional = async (id: string): Promise<void> => {
  await apiProfissionais.delete(`/profissionais/${id}`);
};

// Cursos

export const getCurso = async (): Promise<Curso[]> => {
  const response = await apiCursos.get("/cursos");
  return response.data;
};

// Oportunidades

export const getOportunidade = async (): Promise<Oportunidade[]> => {
  const response = await apiCursos.get("/oportunidades");
  return response.data;
};

export const getOportunidadeById = async (
  id: string,
): Promise<Oportunidade> => {
  const response = await apiCursos.get(`/oportunidades/${id}`);
  return response.data;
};

// Livros

export const getLivros = async (titulo: string): Promise<Livro> => {
  const response = await apiLivros.get(
    `/search.json?q=${encodeURIComponent(titulo)}&limit=1`,
  );
  return response.data.docs[0];
};

// Apoio

export const getApoio = async (): Promise<Apoio[]> => {
  const response = await apiProfissionais.get("/apoio");
  return response.data;
};
