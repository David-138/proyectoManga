import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
function Header() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (showBuscar) {
      setShowBuscar(!showBuscar);
    }
  };
  const [showBuscar, setShowBuscar] = useState(false);
  const toggleBuscar = () => {
    setShowBuscar(!showBuscar);
    if (showMenu) {
      setShowMenu(!showMenu);
    }
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const token = localStorage.getItem("token");
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      setLoading(true);

      fetch(`https://kitsu.io/api/edge/manga?filter[text]=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al buscar manga:", error);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);
  return (
    <div className="header">
      <div className="headermenu">
        <img
          className="imgmenu"
          src="/assets/img/menu.png"
          alt=""
          onClick={toggleMenu}
        />
        <nav>
        <Link to="/">Inicio</Link>
        {!token ? (
          <Link to="/login">
            <button>Iniciar Sesión</button>
          </Link>
        ) : (
          <>
            <Link to="/Profile">
              <button>Perfil</button>
            </Link>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </>
        )}
      </nav>

        <img
          className="imgbuscar"
          src="/assets/img/lupa.png"
          alt=""
          onClick={toggleBuscar}
        />
      </div>
      <div className="headerlist">
        <ul className={showMenu ? "" : "hidden"}>
          <li>
            <a href="/">Main</a>
          </li>
          <li>
            <a href="/Stats">My Stats</a>
          </li>
          <li>
            <a href="/Achievements">Achievements</a>
          </li>
          <li>
            <a href="/Entry">New Entry</a>
          </li>
          <li>
            <a href="/Search">Advanced search</a>
          </li>
          <li>
            <a href="/MangaList">Manga List</a>
          </li>
        </ul>
      </div>
      <div className={showBuscar ? "buscar" : "hidden"}>
        <div className="barraBusqueda">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Buscar manga por nombre"
          />
        </div>
        {loading && <p>Buscando...</p>}
        <div className="resultado">
          {searchResults.length > 0 ? (
            searchResults.map((manga) => (
              <div className="mangaSelect">
                <Link className="portada" to={`/manga/${manga.id}`}>
                  <img
                    src={manga.attributes.posterImage.small}
                    alt={manga.attributes.titles.en_jp}
                  />
                </Link>
                <Link to={`/manga/${manga.id}`}>
                  {manga.attributes.titles.en_jp || manga.attributes.titles.en}
                </Link>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
