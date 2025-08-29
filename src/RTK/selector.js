//pokemonId값에 맞는 pokemon 의 상태를 가져오기

import { createSelector } from "@reduxjs/toolkit";
export const selectPokemonById = (pokemonId) =>
  createSelector(
    //원본상태 데이터의 data:[]에서 접근하기.
    /*
    {
  pokemon: {
    entities: { 1: {...}, 2: {...} }, // <- 객체
    ids: [1,2],                       // <- 배열
  }
} */
    (state) => state.pokemon.data,

    //어떤값 가져올건데?
    //pokemon 이 위에 상태에서 가져온 값.
    //가져온 값에서 특정 포켓몬 id값만 가지고 나오고 싶음.
    (pokemon) => pokemon.find((el) => el.id === pokemonId)
  );
