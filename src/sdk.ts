import axios, { AxiosInstance, AxiosResponse } from "axios";

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
  ): Promise<any[]> {
    const response: AxiosResponse = await this.axiosApi.get("/movie", {
      params: { limit, offset, page },
    });
    return response.data;
  }

  async getMovieById(id: string): Promise<any> {
    const response: AxiosResponse = await this.axiosApi.get(`/movie/${id}`);
    return response.data;
  }

  async getMovieQuotes(id: string): Promise<any> {
    const response: AxiosResponse = await this.axiosApi.get(
      `/movie/${id}/quote`
    );
    return response.data;
  }

  async getQuotes(
    limit?: number,
    offset?: number,
    page?: number
  ): Promise<any[]> {
    const response: AxiosResponse = await this.axiosApi.get("/quote", {
      params: { limit, offset, page },
    });
    return response.data;
  }

  async getQuoteById(id: string): Promise<any> {
    const response: AxiosResponse = await this.axiosApi.get(`/quote/${id}`);
    return response.data;
  }

  async getCharacters(
    limit?: number,
    offset?: number,
    page?: number
  ): Promise<any[]> {
    const response: AxiosResponse = await this.axiosApi.get("/character", {
      params: { limit, offset, page },
    });
    return response.data;
  }

  async getCharacterById(id: string): Promise<any> {
    const response: AxiosResponse = await this.axiosApi.get(`/character/${id}`);
    return response.data;
  }
}
