import classNames from 'classnames';
import Immutable from 'immutable';
import Post from './Post';
import ProductHuntWebAPIUtils from '../utils/ProductHuntWebAPIUtils';
import React from 'react';
import styles from './ProductHunt.scss';

class ProductHunt extends React.Component {
  static propTypes = {
    baseURL: React.PropTypes.string,
    className: React.PropTypes.string,
  };
  
  static defaultProps = {
    baseURL: 'https://www.producthunt.com',
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      posts: Immutable.List(),
    };
  }
  
  componentDidMount() {
    ProductHuntWebAPIUtils.getPosts().then(posts => {
      this.setState({
        posts,
      });
    });
  }
  
  render() {
    const { baseURL, className } = this.props;
    const { posts } = this.state;

    return (
      <div className={classNames(styles.container, className)}>
        {posts.map(post => {
          return (
            <Post
              baseURL={baseURL}
              className={styles.post}
              key={post.get('id')}
              post={post}
            />
          );
        })}
      </div>
    ); 
  }
}

export default ProductHunt; 
