import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { fetchAllDataOfPokemonById } from "./RTK/thunk";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import Search from "./pages/Search";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllDataOfPokemonById(5));
  }, []);

  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className=" flex gap-3 justify-center">
        <Link to={"/"}>메인페이지</Link>
        <Link to={"/detail"}>상세정보</Link>
        <Link to={"/search"}>검색</Link>
        <Link to={"/favorite"}>찜목록</Link>
      </nav>
      <main className="flex gap-3 flex-wrap justify-center pt-5">
        <Routes>
          <Route path={"/"} element={<Main></Main>}></Route>
          <Route path={"/detail/:pokemonId"} element={<Detail></Detail>}></Route>
          <Route path={"/search"} element={<Search></Search>}></Route>
          <Route path={"/favorite"} element={<Favorites></Favorites>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
