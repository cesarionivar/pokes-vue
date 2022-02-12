export const getPokes = async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
  );
  const pokes = await res.json();

  return pokes.results.map((poke) => ({ name: poke.name.toUpperCase() }));
};
