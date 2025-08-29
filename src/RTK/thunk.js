import { createAsyncThunk } from "@reduxjs/toolkit";

//🔑 createAsyncThunk 기본 구조
export const fetchAllDataOfPokemonById = createAsyncThunk(
  // 1. 인자 action type 문자열
  "pokemon/fetchAllDataOfPokemonById",
  // 2. 인자 payloadCreator 함수 → async 함수, 여기서 API 호출을 하고 return한 값이 fulfilled일 때 action.payload로 전달됨.
  (maxPokemonId) => {
    // 2-1. maxPokemonId 요청한 숫자로 배열 갯수 생성
    const arrayNum = Array.from({ length: maxPokemonId }, (_, idx) => {
      return idx + 1;
    });
    // 2-2. 포케몬 1마리 정보 불러오기
    const getPokemonData = (pokemonId) => {
      return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
        .then((res) => res.json())
        .then((data) => ({
          id: pokemonId,
          name: data.names.find((el) => el.language.name === "ko").name,
          description: data.flavor_text_entries.find(
            (el) => el.language.name === "ko",
          ).flavor_text,
          front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
        }));
    };

    // 2-3. Promise객체가 배열에 쭈루루루룰룩 등장
    const pokemonPromises = arrayNum.map((id) => getPokemonData(id));

    // 2-4. json으로 바뀐 결과값 return뱉어내
    return Promise.all(pokemonPromises)
      .then((json) => json)
      .catch((err) => {
        throw err; // RTK에서 rejected 상태로 전달
      });
  },
);
