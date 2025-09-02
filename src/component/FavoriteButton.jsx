import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/pokemonSlice";

//좋아요 되어있는지 확인하기 위한, 포켓몬 id필요
export default function FavoriteButton({ pokemonId }) {
  //좋아요 되어있는지, 아닌지 확인하는 some 함수 사용 -> 리턴값이 참 거짓으로 받아옴
  //근데 여기서 some로직을 모르겠네 ;
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  );

  //버튼 토글 버튼 만들기 위해 상태 설정
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite(pokemonId)
            : favoriteSlice.actions.addToFavorite(pokemonId)
        );
      }}
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
