import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieReviews } from 'services/movies-api';
import {
  ReviewsSection,
  Review,
  ReviewAuthor,
  ReviewText,
} from './Reviews.styled';
export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(obj => {
      // console.log(obj);
      // console.log(obj.results);
      setReviews(obj.results);
    });
  }, [movieId]);

  return (
    <ReviewsSection>
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <div> We don't have any reviews for this movie.</div>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <Review key={id}>
              <ReviewAuthor>{author}</ReviewAuthor>
              <ReviewText>{content}</ReviewText>
            </Review>
          ))}
        </ul>
      )}
    </ReviewsSection>
  );
};
