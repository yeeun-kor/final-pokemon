import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchAllDataOfPokemonById } from "./RTK/thunk";

function App() {
  const dispatch = useDispatch();
  //상태값 꺼내오기
  //useSelector 의 상태는 store에서 생성한 reducer의 이름  pokemon 상태 꺼내오기
  const pokemonData = useSelector((state) => state.pokemon.data);
  console.log(pokemonData);
  //빈배열 why?

  //RTK - thunk 함수명 불러와서 배열 ? 생성
  useEffect(() => {
    dispatch(fetchAllDataOfPokemonById(5));
  }, []);

  return (
    <div className="flex-col gap-3 flex justify-center items-center text-center">
      <h1>포켓몬 프로젝트</h1>
      {pokemonData.map((pokemon) => (
        <ul key={pokemon.id}>
          <li>name : {pokemon.name}</li>
          <li>des : {pokemon.description}</li>
          <div className="flex justify-center">
            <img src={pokemon.front}></img>
            <img src={pokemon.back}></img>
          </div>
        </ul>
      ))}
    </div>
  );
}

export default App;
