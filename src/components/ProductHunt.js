import classNames from 'classnames';
import DateHeader from './DateHeader';
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
      filter: 'popular',
      posts: Immutable.List(),
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handlePostEnter = this.handlePostEnter.bind(this);
    this.handlePostLeave = this.handlePostLeave.bind(this);
    this.getPost = this.getPost.bind(this);
  }

  componentDidMount() {
    this.getPosts();
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

  getPosts() {
    const { filter } = this.state;

    return ProductHuntWebAPIUtils.getPosts(Immutable.Map({
      filter,
    })).then(posts => {
      this.setState({
        posts,
      });
    });
  }

  handleFilterChange(filter) {
    this.setState({
      filter,
    }, () => {
      this.getPosts();
    });
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
    const { filter, posts } = this.state;

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
          <div className={styles.card}>
            <DateHeader
              className={styles.dateHeader}
              date="Today"
              filter={filter}
              onFilterChange={this.handleFilterChange}
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
      </div>
    );
  }
}

export default ProductHunt; 
