import classNames from 'classnames';
import ExpanderCell from './ExpanderCell';
import Immutable from 'immutable';
import LimitGroup from './LimitGroup';
import NavHeader from './NavHeader';
import NavSidebar from './NavSidebar';
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
      activePostId: null,
      posts: Immutable.List(),
    };

    this.handlePostEnter = this.handlePostEnter.bind(this);
    this.handlePostLeave = this.handlePostLeave.bind(this);
    this.getPost = this.getPost.bind(this);
  }

  componentDidMount() {
    ProductHuntWebAPIUtils.getPosts(Immutable.Map({
      filter: 'popular',
    })).then(posts => {
      this.setState({
        posts,
      });
    });
  }

  getPost(post) {
    const { baseURL } = this.props;
    const { activePostId } = this.state;

    return (
      <Post
        active={activePostId === post.get('id')}
        baseURL={baseURL}
        className={styles.post}
        key={post.get('id')}
        onMouseEnter={() => this.handlePostEnter(post.get('id'))}
        onMouseLeave={this.handlePostLeave}
        post={post}
      />
    );
  }

  handlePostEnter(id) {
    this.setState({
      activePostId: id,
    });
  }

  handlePostLeave() {
    this.setState({
      activePostId: null,
    });
  }

  render() {
    const { baseURL, className } = this.props;
    const { posts } = this.state;

    return (
      <div className={classNames(styles.container, className)}>
        <NavHeader
          baseURL={baseURL}
          className={styles.header}
        />
        <div className={styles.main}>
          <NavSidebar
            className={styles.navSidebar}
          />
          <LimitGroup
            className={styles.posts}
            expander={<ExpanderCell />}
            itemGetter={this.getPost}
            items={posts}
            limit={10}
          />
        </div>
      </div>
    );
  }
}

export default ProductHunt; 
