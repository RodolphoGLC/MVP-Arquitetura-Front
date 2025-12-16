import { useEffect, useState } from "react";
import { pokeApi } from "../services/pokeApi";
import { api } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/TeamBuilder.css";

export default function TeamBuilder() {
  const { id } = useParams(); // 👈 id do time (se existir)
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState([]);
  const [team, setTeam] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const isEditing = Boolean(id);

  useEffect(() => {
    pokeApi.getAllPokemons().then(setPokemons);

    if (isEditing) {
      api.getTeamById(id).then((data) => {
        setName(data.name);
        setTeam(
          data.pokemons.map((p) => ({
            id: p.pokemon_id,
            name: p.name,
            image: p.image,
          }))
        );
      });
    }
  }, [id]);

  const addPokemon = (pokemon) => {
  if (team.length >= 6) return;
  if (team.find((p) => p.id === pokemon.id)) return;

  setTeam([
    ...team,
    {
      ...pokemon,
      type: pokemon.types[0], // 👈 tipo principal
    },
  ]);
};

  const removePokemon = (id) => {
    setTeam(team.filter((p) => p.id !== id));
  };

  const save = async () => {
    if (!name || team.length === 0) return;

    const payload = {
      name,
      pokemons: team.map((p) => ({
        pokemon_id: p.id,
        name: p.name,
        image: p.image,
      })),
    };

    if (isEditing) {
      await api.updateTeam(id, payload);
    } else {
      await api.createTeam(payload);
    }

    navigate("/");
  };

  const filteredPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="builder-container">
      <header className="builder-header">
        <h1>{isEditing ? "Edit Team" : "Create Pokémon Team"}</h1>
        <button className="secondary-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
      </header>

      {/* Nome do time + salvar */}
      <div className="team-name-row">
        <input
          className="input team-name-input"
          placeholder="Team name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="primary-btn save-btn"
          disabled={!name || team.length === 0}
          onClick={save}
        >
          {isEditing ? "Update Team" : "Save Team"}
        </button>
      </div>

      <div className="team-preview">
        <h3>Your Team ({team.length}/6)</h3>
        <div className="team">
          {team.map((p) => (
            <div
              key={p.id}
              className={`pokemon-card type-${p.type}`}
              onClick={() => removePokemon(p.id)}
              title="Click to remove"
            >
              <img src={p.image} alt={p.name} />
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      <input
        className="input"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredPokemons.map((p) => (
          <div
            key={p.id}
            className={`pokemon-card type-${p.types[0]}`}
            onClick={() => addPokemon(p)}
          >
            <img src={p.image} alt={p.name} />
            <span>{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
