import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Character, Movie, Quote } from "./types";

const BASE_URL = "https://the-one-api.dev/v2";

export default class AviLoTRSDK {
  private axiosApi: AxiosInstance;

  constructor(apiKey: string) {
    this.axiosApi = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });
  }

  async getMovies(
    limit?: number,
    offset?: number,
    page?: number
  ): Promise<Movie[]> {
    const response: AxiosResponse = await this.axiosApi.get("/movie", {
      params: { limit, offset, page },
    });
    return response.data.docs;
  }

  async getMovieQuotes(id: string): Promise<Quote> {
    const response: AxiosResponse = await this.axiosApi.get(
      `/movie/${id}/quote`
    );
    return response.data.docs;
  }

  async getQuotes(
    limit?: number,
    offset?: number,
    page?: number
  ): Promise<Quote[]> {
    const response: AxiosResponse = await this.axiosApi.get("/quote", {
      params: { limit, offset, page },
    });
    return response.data.docs;
  }

  async getCharacters(
    limit?: number,
    offset?: number,
    page?: number
  ): Promise<Character[]> {
    const response: AxiosResponse = await this.axiosApi.get("/character", {
      params: { limit, offset, page },
    });
    return response.data.docs;
  }

  async getMovieById(id: string): Promise<Movie> {
    const response: AxiosResponse = await this.axiosApi.get(`/movie/${id}`);
    return response.data.docs[0];
  }

  async getQuoteById(id: string): Promise<Quote> {
    const response: AxiosResponse = await this.axiosApi.get(`/quote/${id}`);
    return response.data.docs[0];
  }

  async getCharacterById(id: string): Promise<Character> {
    const response: AxiosResponse = await this.axiosApi.get(`/character/${id}`);
    return response.data.docs[0];
  }
}
