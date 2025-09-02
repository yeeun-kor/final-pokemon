import { useEffect, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { fetchAllDataOfPokemonById } from "./RTK/thunk";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import Search from "./pages/Search";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDataOfPokemonById(30));
  }, []);

  //검색어 상태 관리
  const [inputValue, setInputValue] = useState("");

  //검색어 입력 쿼리스트링 활용
  const navigate = useNavigate();

  //페이지명 바뀔 씨 검색어 초기화
  //useRef로 DOM 직접 건들이기 , state관리 노우
  const location = useLocation();
  const inputRef = useRef(null);

  useEffect(() => {
    // if (inputRef.current) {
    //   console.log("page reset");
    //   inputRef.current.value = ""; // 직접 DOM 초기화
    setInputValue("");
  }, [location.pathname]);

  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className=" flex gap-3 justify-center">
        <Link to={"/"} onClick={() => setInputValue("")}>
          메인페이지
        </Link>
        <Link to={"/favorite"}>찜목록</Link>
        <div className="flex items-center">
          <input
            value={inputValue}
            type="text"
            placeholder="포켓몬검색"
            className="border-b border-[darkgrey] px-2 w-32 "
            //검색어 입력하면 바로 url이동 하도록
            onChange={(e) => {
              setInputValue(e.target.value);
              navigate(`/search?pokemon=${e.target.value}`);
            }}
          />
          <FaMagnifyingGlass />
        </div>
      </nav>
      <main className="flex gap-3 flex-wrap justify-center pt-5">
        <Routes>
          <Route path={"/"} element={<Main></Main>}></Route>
          <Route
            path={"/detail/:pokemonId"}
            element={<Detail></Detail>}
          ></Route>
          <Route path={"/search"} element={<Search></Search>}></Route>
          <Route path={"/favorite"} element={<Favorites></Favorites>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
