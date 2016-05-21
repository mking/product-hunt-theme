import axios from 'axios';
import Immutable from 'immutable';

class ProductHuntWebAPIUtils {
  static getPosts() {
    return axios({
      url: '/json/product-hunt.json',
    }).then(response => {
      return Immutable.fromJS(response.data).get('posts');
    });
  }
}

export default ProductHuntWebAPIUtils;
