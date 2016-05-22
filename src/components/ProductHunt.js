import classNames from 'classnames';
import ConstraintComponent from './ConstraintComponent';
import DateHeader from './DateHeader';
import ExpanderCell from './ExpanderCell';
import ImmutablePropTypes from 'react-immutable-proptypes';
import LimitGroup from './LimitGroup';
import NavHeader from './NavHeader';
import NavSidebar from './NavSidebar';
import Post from './Post';
import React from 'react';
import styles from './ProductHunt.scss';

class ProductHunt extends React.Component {
  static propTypes = {
    activePostId: React.PropTypes.number,
    baseURL: React.PropTypes.string,
    className: React.PropTypes.string,
    expanded: React.PropTypes.bool,
    filter: React.PropTypes.string,
    onExpand: React.PropTypes.func,
    onFilterChange: React.PropTypes.func,
    onPostEnter: React.PropTypes.func,
    onPostLeave: React.PropTypes.func,
    posts: ImmutablePropTypes.list,
  };

  constructor(props) {
    super(props);

    this.getPost = this.getPost.bind(this);
  }

  getPost(post) {
    const {
      activePostId,
      baseURL,
      onPostEnter,
      onPostLeave,
    } = this.props;

    return (
      <Post
        active={activePostId === post.get('id')}
        baseURL={baseURL}
        className={styles.post}
        key={post.get('id')}
        onMouseEnter={() => onPostEnter(post.get('id'))}
        onMouseLeave={onPostLeave}
        post={post}
      />
    );
  }

  render() {
    const {
      baseURL,
      className,
      expanded,
      filter, 
      onExpand,
      onFilterChange,
      posts,
    } = this.props;

    return (
      <div className={classNames(styles.container, className)}>
        <NavHeader
          baseURL={baseURL}
          className={styles.header}
        />
        <ConstraintComponent className={styles.main}>
          <div className={styles.mainContent}>
            <NavSidebar
              baseURL={baseURL}
              className={styles.navSidebar}
            />
            <div className={styles.card}>
              <DateHeader
                className={styles.dateHeader}
                date="Today"
                filter={filter}
                onFilterChange={onFilterChange}
              />
              <LimitGroup
                className={styles.posts}
                expanded={expanded}
                expander={<ExpanderCell />}
                itemGetter={this.getPost}
                items={posts}
                limit={10}
                onExpand={onExpand}
              />
            </div>
          </div>
        </ConstraintComponent>
      </div>
    );
  }
}

export default ProductHunt; 
