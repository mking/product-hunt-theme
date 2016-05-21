import classNames from 'classnames';
import Immutable from 'immutable';
import LinearGroup from './LinearGroup';
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
      <LinearGroup
        className={classNames(styles.container, className)}
        orientation="vertical"
      >
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
      </LinearGroup>
    ); 
  }
}

export default ProductHunt; 
