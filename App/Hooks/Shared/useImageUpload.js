import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAppState } from '../../Redux/appAction';
import HttpClient from '../../Utilities/HttpClient';
import ImagePicker from 'react-native-image-picker';
import { BASE_URL } from '../../Config/Contants';
import ToastHandler from '../../Utilities/ToastHandler';

function useImageUpload(image) {
  const [imageUrl, setImageUrl] = useState(image);

  const dispatch = useDispatch();

  function openImagePicker() {
    return new Promise((resolve, reject) => {
      ImagePicker.showImagePicker(
        {
          quality: 0.2,
          noData: true,
          chooseFromLibraryButtonTitle: 'Choose from library',
          takePhotoButtonTitle: 'Take a Photo',
        },
        response => {
          // console.log('Response = ', response);
          if (response.didCancel) {
            ToastHandler.errorToast('User cancelled image picker');
            reject();
          } else if (response.error) {
            // console.log('ImagePicker Error: ', response.error);
            reject();
          } else {
            const source = response;
            resolve(source);
          }
        },
      );
    });
  }

  async function imageUpload() {
    try {
      const imageSource = await openImagePicker();
      dispatch(updateAppState('loadingModal', true));
      let formData = new FormData();
      formData.append('picture', {
        uri: imageSource.uri,
        type: imageSource.type,
        name: imageSource.fileName,
      });
      const responseData = await HttpClient.request(
        '/single_image_upload',
        'POST',
        formData,
      );
      console.log(responseData);
      const { data } = responseData;
      console.log(data.data);
      setImageUrl({ uri: BASE_URL + data.data });
      setTimeout(() => {
        dispatch(updateAppState('loadingModal', false));
      }, 300);
    } catch (error) {
      console.log(error);
      console.log(error.response);
      dispatch(updateAppState('loadingModal', false));
      HttpClient.errorHandler(error);
    }
  }

  return { imageUpload, imageUrl, setImageUrl };
}

export default useImageUpload;
