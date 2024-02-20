import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Tag from "../../assets/tag.svg";
import { movieContext } from "../../context";
import { getImageUrl } from "../../utils/cine_utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Ratting from "./Ratting";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(movieContext);

  function handleClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  function handleClick(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  function addToCardMovie(event, movie) {
    event.stopPropagation();
    event.preventDefault();

    const found = state.movies.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      dispatch({
        type: "ADD_TO_CARD",
        payload: {
          ...movie,
        },
      });
      setShowModal(false);
      toast.success(`Movie  ${movie.title} added successfully !`, {
        position: "bottom-right",
      });
    } else {
      toast.error(`This ${movie.title} has already added`, {
        position: "bottom-right",
      });
      setShowModal(false);
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          onAddToCard={addToCardMovie}
          onClose={handleClose}
          movie={selectedMovie}
        />
      )}
      <a href="#" onClick={() => handleClick(movie)}>
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Ratting value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => addToCardMovie(e, movie)}
            >
              <img src={Tag} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </figure>
      </a>
    </>
  );
}
