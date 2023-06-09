import { useLocation, useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/api';
import { useEffect, useState } from 'react';
import {
  StyledReviewLi,
  StyledReviewsUl,
  StyledReviewNotification,
} from './Reviews.styled';

const Reviews = () => {
  const location = useLocation();
  const params = useParams();
  const movieId = !location.state ? Number(params) : location.state.movieid;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
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
    // console.log(movieId),
    <section>
      {(!reviews.length && (
        <StyledReviewNotification>
          We don't have any reviews for this movie
        </StyledReviewNotification>
      )) || (
        <StyledReviewsUl>
          {reviews.map(review => (
            <StyledReviewLi key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.created_at}</p>
              <p>{review.content}</p>
            </StyledReviewLi>
          ))}
        </StyledReviewsUl>
      )}
    </section>
  );
};

export default Reviews;
