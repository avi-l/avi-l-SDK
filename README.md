# SDK Design

## Overview

The Avi-L-LoTR-SDK (Avi's Lord of the Rings SDK) is a JavaScript library that provides convenient access to the API of "The One API" for retrieving information related to the Lord of the Rings movies, characters, and quotes. This SDK aims to simplify the integration of the API into JavaScript applications by providing a streamlined interface.

## Features

- Retrieve a list of movies
- Retrieve details of a specific movie
- Retrieve quotes from a movie or a specific quote
- Retrieve a list of characters
- Retrieve details of a specific character

## Installation

To install the Avi-L-LoTR-SDK, you can use npm or yarn:

```shell
npm install avi-l-lotr-sdk
```

or

```shell
yarn add avi-l-lotr-sdk
```

## Usage

### Initialization

To start using the SDK, you need to initialize it:

- Note you will need an API key. It's proper to keep this safe
- Don't save your API key in your code base.

```javascript
import AviLoTRSDK from "avi-l-lotr-sdk";

const apiKey = "PUT_YOUR_API_KEY_HERE"; //Make sure you have one!
const sdk = new AviLoTRSDK(apiKey);

export const fetchMoviesViaSDK = async () => {
  try {
    const movies = await sdk.getMovies();
    console.log("movies", movies);
  } catch (error) {
    console.error(error);
  }
};
```

The SDK provides the following methods:

- `getMovies(limit?, offset?, page?)`: Retrieves a list of movies.
- `getMovieById(id: string)`: Retrieves a specific movie by its ID.
- `getMovieQuotes(id: string)`: Retrieves quotes from a specific movie.
- `getQuotes(limit?, offset?, page?)`: Retrieves a list of quotes.
- `getQuoteById(id: string)`: Retrieves a specific quote by its ID.
- `getCharacters(limit?, offset?, page?)`: Retrieves a list of characters.
- `getCharacterById(id: string)`: Retrieves a specific character by its ID.

Where limit, offset, and page are options, you can use them for pagination

### Examples

#### Get a list of movies

```javascript
const movies = await sdk.getMovies();
console.log(movies);
```

#### Get a movie by ID

```javascript
const movieId = "12345";
const movie = await sdk.getMovieById(movieId);
console.log(movie);
```

#### Get quotes by a movie ID

```javascript
const movieId = "12345";
const quotes = await sdk.getQuotesByMovieId(movieId);
console.log(quotes);
```

#### Get quotes by a quote ID

```javascript
const quoteId = "54321";
const quote = await sdk.getQuoteById(quoteId);
console.log(quote);
```

#### Get a list of characters

```javascript
const characters = await sdk.getCharacters();
console.log(characters);
```

#### Get a Character by ID

```javascript
const characterId = "67890";
const character = await sdk.getCharacterById(characterId);
console.log(character);
```

### Examples of pagination

```javascript
const movies = await sdk.getMovies({ limit: 10, offset: 0, page: 1 });
const movie = await sdk.getMovieById("123");
const quotes = await sdk.getQuotes({ limit: 10, offset: 0, page: 1 });
const character = await sdk.getCharacterById("456");
const charaters = await sdk.getCharacters({ limit: 10, offset: 0, page: 1 });
```

## Error Handling

If an error occurs during API requests, the SDK will throw an error with relevant information. It's important to handle these errors gracefully in your application.

## Contribution Guidelines

Contributions to the Avi-L-LoTR-SDK are welcome! Please follow the guidelines in the CONTRIBUTING.md file for submitting pull requests and reporting issues.

## License

The Avi-L-LoTR-SDK is licensed under the ISC License. See the LICENSE file for more details
