
const POKE_API = "https://pokeapi.co/api/v2";

export const pokeApi = {
  getAllPokemons: async () => {
    const res = await fetch(`${POKE_API}/pokemon?limit=151`);
    const data = await res.json();

    return Promise.all(
      data.results.map(async (p) => {
        const r = await fetch(p.url);
        const d = await r.json();
        return {
          id: d.id,
          name: d.name,
          image: d.sprites.other["official-artwork"].front_default,
          types: d.types.map(t => t.type.name)
        };
      })
    );
  },
};
