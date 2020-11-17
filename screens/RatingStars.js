import React from 'react';
import {AirbnbRating} from 'react-native-ratings';

import RatePostHandle from '../network/ratePost';

const RatingStars = ({postId}) => {
  const [rating, setPostRating] = React.useState(0);

  const onUserRating = (rating) => {
    new RatePostHandle().ratePost(postId, rating).then((response) => {
      const {status} = response;
      if (status) {
        setPostRating(rating);
      }
    });
  };

  return (
    <AirbnbRating
      defaultRating={rating}
      onFinishRating={onUserRating}
      isDisabled={rating > 0}
      showRating={false}
      size={20}
    />
  );
};

export default RatingStars;
