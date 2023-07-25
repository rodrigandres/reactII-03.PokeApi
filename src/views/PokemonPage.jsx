import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { usePokemonContext } from "../context/PokemonProvider";

export const PokemonPage = () => {
  const { getPokemonsByID } = usePokemonContext();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const selectedPokemon = location?.state?.selectedPokemon;

  const { name } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonsByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(selectedPokemon.id);
  }, []);

  console.log(selectedPokemon);

  return (
    <main
      className={`container main-pokemon ${
        pokemon.types && pokemon.types[0].type.name
      }`}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="header-main-pokemon">
            <h1 style={{ textTransform: "capitalize" }}>{name}</h1>
            <div className="container-img-pokemon">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </div>

            <div className="container-info-pokemon main-">
              <div className="card-types info-pokemon-type">
                {pokemon.types.map((type) => (
                  <span key={type.type.name} className={`${type.type.name}`}>
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="info-pokemon">
                <div className="group-info">
                  <p>Altura</p>
                  <span>{pokemon.height}</span>
                </div>
                <div className="group-info">
                  <p>Peso</p>
                  <span>{pokemon.weight}KG</span>
                </div>
              </div>
              <div className="stat-list">
                <h2>Estadísticas</h2>
                <ul>
                  {pokemon?.stats?.map((stat) => (
                    <li key={stat?.stat?.name}>
                      <span>
                        {stat?.stat?.name}: {stat?.base_stat}
                      </span>
                      <div
                        className={`progress-bar ${
                          pokemon.types && pokemon.types[0].type.name
                        }`}
                      >
                        <div
                          className="progress-bar-inner"
                          style={{ width: `${(stat?.base_stat / 100) * 100}%` }}
                        >
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
