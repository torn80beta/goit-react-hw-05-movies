import { useLocation } from 'react-router-dom';
import { getMovieReviews } from 'api/api';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const location = useLocation();
  const movieId = location.state.movieid;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      const getReviews = async () => {
        setReviews(await getMovieReviews(movieId));
      };
      getReviews();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    console.log(reviews),
    (
      <section>
        <h2>Reviews</h2>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.created_at}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  );
};

export default Reviews;
