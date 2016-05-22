import axios from 'axios';
import Immutable from 'immutable';

class ProductHuntWebAPIUtils {
  static getPosts(options) {
    return axios({
      url: `/json/${options.get('filter')}.json`,
    }).then(response => {
      return Immutable.fromJS(response.data).get('posts');
    });
  }
}

export default ProductHuntWebAPIUtils;
