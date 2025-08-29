import { useNavigate } from "react-router-dom"

export default function Card({pokemonData}) {
  //클릭했을 때, 상세페이지 /detail/:pokemonId 로 이동 시키겠다.
  const navigate = useNavigate()
return(<>
        <section className="w-40 border items-center flex flex-col rounded-md gap-3 py-3" onClick={()=>navigate(`/detail/${pokemonData.id}`)}>
          <img src={pokemonData.front} alt="" className="w-32"/>
          <div>{pokemonData.name}</div>
        </section>
</>)
};
