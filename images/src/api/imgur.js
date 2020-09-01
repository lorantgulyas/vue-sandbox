import qs from 'qs';
import axios from 'axios';

import { CLIENT_ID } from '../constant';

const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    // NOTE: Navigate user to the new location
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  uploadImages(images, token) {
    const promises = Array.from(images).map(image => {
      const formData = new FormData();
      // retrieves the actual file instead of the reference only
      formData.append('image', image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    });

    return Promise.all(promises);
  }
}
