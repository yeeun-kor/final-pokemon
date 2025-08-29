import { useSelector } from "react-redux";
import Card from "../component/Card";

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon.data);
  console.log(pokemonData);
  console.log(pokemonData.map((idx) => idx.id === 1));

  return (
    <>
      {pokemonData.map((el) => (
        <Card pokemonData={el} key={el.id}></Card>
      ))}
    </>
  );
}
