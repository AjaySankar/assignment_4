import React from 'react';
import {AirbnbRating} from 'react-native-ratings';

const RatingStars = ({postId}) => {
  const [rating, setPostRating] = React.useState(0);

  return (
    <AirbnbRating
      defaultRating={rating}
      onFinishRating={setPostRating}
      isDisabled={rating > 0}
      showRating={false}
      size={20}
    />
  );
};

export default RatingStars;
