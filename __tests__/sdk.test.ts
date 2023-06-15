// test/sdk.test.ts
import dotenv from "dotenv";

dotenv.config();

import AviLoTRSDK from "../src/sdk";

describe("AviLoTRSDK", () => {
  const apiKey: string = process.env.API_KEY || "";
  let sdk: AviLoTRSDK;

  beforeEach(() => {
    sdk = new AviLoTRSDK(apiKey);
  });

  afterEach(() => {});

  it("should retrieve movies", async () => {
    const movies = await sdk.getMovies();
    expect(movies).toBeDefined();
    expect(movies.length).toBeGreaterThan(0);
  });

  it("should retrieve a specific movie", async () => {
    const movieId = "5cd95395de30eff6ebccde57";
    const movie = await sdk.getMovieById(movieId);
    expect(movie).toBeDefined();
    expect(movie._id).toEqual(movieId);
  });

  it("should retrieve quotes", async () => {
    const quotes = await sdk.getQuotes();
    expect(quotes).toBeDefined();
    expect(quotes.length).toBeGreaterThan(0);
  });

  it("should retrieve a specific quote", async () => {
    const quoteId = "5cd96e05de30eff6ebcce7f0";
    const quote = await sdk.getQuoteById(quoteId);
    expect(quote).toBeDefined();
    expect(quote._id).toEqual(quoteId);
  });

  it("should retrieve characters", async () => {
    const characters = await sdk.getCharacters();
    expect(characters).toBeDefined();
    expect(characters.length).toBeGreaterThan(0);
  });

  it("should retrieve a specific character", async () => {
    const characterId = "5cd99d4bde30eff6ebccfe9e";
    const character = await sdk.getCharacterById(characterId);
    console.log(character, "character");
    expect(character).toBeDefined();
    expect(character._id).toEqual(characterId);
  });
});
