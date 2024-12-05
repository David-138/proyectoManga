import { Link, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/header";
import "./../css/search.css";
const Search = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = 20;
  const page = parseInt(searchParams.get("page") || "0", 10);

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
    );
  };

  useEffect(() => {
    if (selectedGenres.length === 0) {
      setSearchResults([]);
      return;
    }

    const genreQuery = selectedGenres.join(",");
    fetch(
      `https://kitsu.io/api/edge/manga?filter[genres]=${genreQuery}&page[limit]=${limit}&page[offset]=${
        page * limit
      }&sort=id`
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredPromises = data.data.map((manga) => {
          return fetch(manga.relationships.genres.links.related)
            .then((res) => res.json())
            .then((genreData) => {
              const mangaGenres = genreData.data.map((g) => g.attributes.name);
              return selectedGenres.every((genre) =>
                mangaGenres.includes(genre)
              )
                ? manga
                : null;
            })
            .catch((err) => {
              console.error("Error al verificar los géneros del manga:", err);
              return null;
            });
        });
        Promise.all(filteredPromises).then((filteredResults) => {
          const validResults = filteredResults.filter(
            (result) => result !== null
          );
          setSearchResults(validResults);
        });
      })
      .catch((error) => console.error("Error al realizar la búsqueda:", error));
  }, [page, selectedGenres]);

  const handleNextPage = () => {
    setSearchParams({ page: page + 1 });
  };

  const handlePrevPage = () => {
    setSearchParams({ page: Math.max(page - 1, 0) });
  };

  return (
    <>
      <Header />
      <h1>Búsqueda Avanzada de Manga</h1>
      <div className="advSearch">
        <h3>Selecciona Géneros:</h3>
        <div className="check">
          <label>
            <input
              type="checkbox"
              value="Action"
              onChange={handleGenreChange}
            />
            Action
          </label>
          <label>
            <input
              type="checkbox"
              value="Adventure"
              onChange={handleGenreChange}
            />
            Adventure
          </label>
          <label>
            <input type="checkbox" value="Angst" onChange={handleGenreChange} />
            Angst
          </label>
          <label>
            <input
              type="checkbox"
              value="Adaptation"
              onChange={handleGenreChange}
            />
            Adaptation
          </label>
          <label>
            <input
              type="checkbox"
              value="Anthropomorphism"
              onChange={handleGenreChange}
            />
            Anthropomorphism
          </label>
          <label>
            <input
              type="checkbox"
              value="Blackmail"
              onChange={handleGenreChange}
            />
            Blackmail
          </label>
          <label>
            <input
              type="checkbox"
              value="Comedy"
              onChange={handleGenreChange}
            />
            Comedy
          </label>
          <label>
            <input
              type="checkbox"
              value="Detective"
              onChange={handleGenreChange}
            />
            Detective
          </label>
          <label>
            <input type="checkbox" value="Drama" onChange={handleGenreChange} />
            Drama
          </label>
          <label>
            <input type="checkbox" value="Ecchi" onChange={handleGenreChange} />
            Ecchi
          </label>
          <label>
            <input
              type="checkbox"
              value="Fantasy"
              onChange={handleGenreChange}
            />
            Fantasy
          </label>
          <label>
            <input type="checkbox" value="Ghost" onChange={handleGenreChange} />
            Ghost
          </label>
          <label>
            <input type="checkbox" value="Harem" onChange={handleGenreChange} />
            Harem
          </label>
          <label>
            <input
              type="checkbox"
              value="Henshin"
              onChange={handleGenreChange}
            />
            Henshin
          </label>
          <label>
            <input
              type="checkbox"
              value="Horror"
              onChange={handleGenreChange}
            />
            Horror
          </label>
          <label>
            <input
              type="checkbox"
              value="Magical Girl"
              onChange={handleGenreChange}
            />
            Magical Girl
          </label>
          <label>
            <input
              type="checkbox"
              value="Mystery"
              onChange={handleGenreChange}
            />
            Mystery
          </label>
          <label>
            <input
              type="checkbox"
              value="Parasite"
              onChange={handleGenreChange}
            />
            Parasite
          </label>
          <label>
            <input
              type="checkbox"
              value="Psychological"
              onChange={handleGenreChange}
            />
            Psychological
          </label>
          <label>
            <input
              type="checkbox"
              value="Romance"
              onChange={handleGenreChange}
            />
            Romance
          </label>
          <label>
            <input
              type="checkbox"
              value="Science Fiction"
              onChange={handleGenreChange}
            />
            Science Fiction
          </label>
          <label>
            <input
              type="checkbox"
              value="Super Power"
              onChange={handleGenreChange}
            />
            Super Power
          </label>
          <label>
            <input
              type="checkbox"
              value="Supernatural"
              onChange={handleGenreChange}
            />
            Supernatural
          </label>
          <label>
            <input
              type="checkbox"
              value="Thriller"
              onChange={handleGenreChange}
            />
            Thriller
          </label>
          <label>
            <input
              type="checkbox"
              value="Vampire"
              onChange={handleGenreChange}
            />
            Vampire
          </label>
          <label>
            <input
              type="checkbox"
              value="Virtual Reality"
              onChange={handleGenreChange}
            />
            Virtual Reality
          </label>
          <label>
            <input
              type="checkbox"
              value="Zombie"
              onChange={handleGenreChange}
            />
            Zombie
          </label>
        </div>
      </div>
      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((manga) => (
              <li key={manga.id}>
                <div className="mangaSelect">
                  <Link
                    className="portada"
                    to={`/manga/${manga.id}`}
                    state={{ fromPage: page }}
                  >
                    <img
                      src={manga.attributes.posterImage.small}
                      alt={manga.attributes.titles.en_jp}
                    />
                  </Link>
                  <Link to={`/manga/${manga.id}`} state={{ fromPage: page }}>
                    {manga.attributes.titles.en_jp ||
                      manga.attributes.titles.en}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
      <div>
        <button onClick={handlePrevPage} disabled={page === 0}>
          Anterior
        </button>
        <button onClick={handleNextPage}>Siguiente</button>
      </div>
    </>
  );
};
export default Search;
