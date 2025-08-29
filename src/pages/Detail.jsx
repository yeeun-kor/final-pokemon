import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";

export default function Detail() {
  //주소창에서 넘어온 id값 받아오기
  const { pokemonId } = useParams();
  const data = useSelector(selectPokemonById(Number(pokemonId)));
  console.log(data.back);

  //이미지 클릭시 앞,뒤 토글이 되도록 상태 관리

  return (
    <div className="flex flex-col gap-3 justify-center items-center border-gray-500 border  p-8 rounded-xl">
      <div className="text-2xl">{data.name}</div>
      <div className="whitespace-pre-wrap text-center">{data.description}</div>
      <img src={data.front} alt="" className="w-48" onClick={() => {}} />
    </div>
  );
}
