import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { usePokemonContext } from "../context/PokemonProvider";

export const Pokemones = () => {
  const { allPokemons } = usePokemonContext();
  const navigate = useNavigate();
  const [selectedPokemon, setSelectedPokemon] = useState(allPokemons[0]);

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (selectedPokemon === null) return null;
    navigate(`/pokemon/${selectedPokemon.name}`, {state: {selectedPokemon}});
  };

  return (
    <Container className="d-flex flex-column align-items-center my-5">
      <h3>Selecciona un Pokemón</h3>
      <Form onSubmit={handlerSubmit}>
        <Form.Select
          className="text-center"
          placeholder="Pokemones"
          aria-label="Selecciona un Pokemón"
          value={selectedPokemon ? selectedPokemon.name : ""}
          onChange={(e) => {
            const selectedName = e.target.value;
            const selectedsPokemon = allPokemons.find(
              (pokemon) => pokemon.name === selectedName
            );
            setSelectedPokemon(selectedsPokemon);
          }}
          size="sm"
          style={{ width: "300px" }}
        >
          {allPokemons.map((pokemon) => (
            <option key={pokemon.id} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </Form.Select>
        <div className="d-flex justify-content-center mt-3">
          <Button variant="dark" type="submit">
            Ver Detalle
          </Button>
        </div>
      </Form>
    </Container>
  );
};
