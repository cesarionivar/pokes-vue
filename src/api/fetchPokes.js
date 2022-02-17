export const getPokes = async () => {
  let pokemons = [];

  const pokes = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100&offset=1'
  ).then((res) => res.json());

  for await (const poke of pokes.results) {
    const res = await getEachPokeInfo(poke.url);
    pokemons.push(res);
  }

  pokemons = pokemons.map((poke) => ({
    name: poke?.name,
    image: poke?.sprites?.front_default,
  }));

  return pokemons;
};

export const getEachPokeInfo = async (url) => {
  const res = await fetch(url).then((res) => res.json());
  return res;
};
