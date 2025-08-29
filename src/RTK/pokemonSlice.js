import { createSlice } from "@reduxjs/toolkit";
import { fetchAllDataOfPokemonById } from "./thunk";

export const pokemonSlice = createSlice({
  name: "pokemon",
  //비동기 작업이라 로딩과 에러 필요함.
  initialState: { data: [], loading: true },

  //동기적 상태변경
  reducers: {
    toggleImage : (state)=>{state.data}
  },

  //비동기적 상태변경
  extraReducers: (builder) => {
    // 비동기 상태에 따라 상태값 변경
    builder
      // 처리 fulfilled 일 때
      .addCase(fetchAllDataOfPokemonById.fulfilled, (state, action) => {
        // 상태의 data([]) 값을 변경하겠다.
        // action.payload = Promise.all로 json으로 바뀐 151개의 객체
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllDataOfPokemonById.rejected, (state) => {
        state.loading = false;
      });
  },
});
