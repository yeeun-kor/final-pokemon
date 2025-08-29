# 포켓몬 도감 만들기 미니프로젝트

## 📖 포켓몬 도감 (Pokédex)

리액트와 최신 프론트엔드 기술 스택을 활용하여 제작한 포켓몬 도감 애플리케이션입니다.
포켓몬의 이름, 이미지, 설명을 불러오고 검색 및 찜 기능을 제공합니다.

---

## 1. 페이지 설정

```jsx
//main.jsx
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
```

### 1-1. Router설정 (페이지 주소창 설정 ) & main 시맨틱 사용

```jsx
//App.jsx
<>
  <h1 className="text-[40px] text-center">포켓몬 도감</h1>
  <Routes>
    <Route path={"/"} element={<Main></Main>}></Route>
    <Route path={"/detail/:pokemonId"} element={<Detail></Detail>}></Route>
    <Route path={"/search/:content"} element={<Search></Search>}></Route>
</>
```

- 주소창에 path 경로값으로 들어가면, 컴포넌트가 열린다
- 이것에 맞는 `link` 페이지 연결 할 것,.

### 1-2. 링크 페이지 연결 ( nav시맨틱 사용 )

```jsx
//App.jsx
<>
  <nav className=" flex gap-3 justify-center">
    <Link to={"/"}>메인페이지</Link>
    <Link to={"detail"}>상세정보</Link>
    <Link to={"search"}>검색</Link>
    <Link to={"favorite"}>찜목록</Link>
  </nav>
</>
```

## 2. 메인페이지

## 3. 디테일 페이지
