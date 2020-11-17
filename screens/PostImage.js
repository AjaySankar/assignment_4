import React from 'react';

import {ActivityIndicator} from 'react-native';
import {Card} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GetPostImageHandle from '../network/getPostImage';

import RequestStates from '../utils/requestStateEnums';

const PostImage = ({imageId}) => {
  const [base64Image, setEncodedImage] = React.useState('');
  const [requestState, updatePostRequestState] = React.useState(
    RequestStates.RequestInProcess,
  );

  React.useEffect(() => {
    if (imageId <= 0) {
      updatePostRequestState(RequestStates.RequestSuccessful);
      return;
    }
    new GetPostImageHandle().fetchImage(imageId).then((response) => {
      if (
        response &&
        response.status &&
        response.body &&
        response.body.image &&
        response.body.image.length > 0
      ) {
        const {
          body: {image},
        } = response;
        setEncodedImage(`data:image/jpeg;base64,${image}`);
        updatePostRequestState(RequestStates.RequestSuccessful);
      } else {
        updatePostRequestState(RequestStates.RequestFailed);
      }
    });
  });

  let imageComponent;
  switch (requestState) {
    case RequestStates.RequestInProcess:
      imageComponent = (
        <Card.Image
          resizeMode="contain"
          PlaceholderContent={<ActivityIndicator />}
        />
      );
      break;
    case RequestStates.RequestSuccessful:
      if (imageId <= 0) {
        imageComponent = (
          <Card.Image
            resizeMode="contain"
            PlaceholderContent={
              <MaterialCommunityIcons name="image-outline" size={50} />
            }
          />
        );
      } else {
        try {
          imageComponent = (
            <Card.Image
              resizeMode="contain"
              source={{
                uri: base64Image,
              }}
              PlaceholderContent={<ActivityIndicator />}
            />
          );
        } catch (e) {
          imageComponent = (
            <Card.Image
              resizeMode="contain"
              PlaceholderContent={
                <MaterialCommunityIcons
                  name="image-broken-variant"
                  color="crimson"
                  size={50}
                />
              }
            />
          );
        }
      }
      break;
    case RequestStates.RequestFailed:
      imageComponent = (
        <Card.Image
          resizeMode="contain"
          PlaceholderContent={
            <MaterialCommunityIcons
              name="image-broken-variant"
              color="crimson"
              size={50}
            />
          }
        />
      );
      break;
  }
  return imageComponent;
};

export default PostImage;
