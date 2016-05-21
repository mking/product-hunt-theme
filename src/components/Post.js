import ButtonLink from './ButtonLink';
import classNames from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';
import styles from './Post.scss';

class Post extends React.Component {
  static propTypes = {
    baseURL: React.PropTypes.string,
    className: React.PropTypes.string,
    post: ImmutablePropTypes.map.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(e) {
    if (e.target !== e.currentTarget) {
      e.preventDefault();
    }
  }

  render() {
    const { baseURL, className, post } = this.props;

    const topics = post.get('topics');

    return (
      <div
        className={classNames(styles.container, className)}
      >
        <a
          className={styles.link}
          href={`${baseURL}${post.get('url')}`}
          onClick={this.handleLinkClick}
        />
        <img
          className={styles.thumbnail}
          src={post.getIn(['thumbnail', 'image_url'])}
        />
        <div className={styles.right}>
          <div className={styles.name}>
            {post.get('name')}
          </div>
          <div className={styles.tagline}>
            {post.get('tagline')}
          </div>
          <div className={styles.actions}>
            <div className={styles.actionButtons}>
              <ButtonLink
                className={styles.actionButton}
                color="black"
                icon={<i
                  className={classNames(
                    'fa',
                    'fa-caret-up',
                    styles.actionIcon
                  )}
                />}
                title={post.get('vote_count')}
              />
              <ButtonLink
                className={styles.actionButton}
                href={`${baseURL}${post.get('url')}`}
                icon={<i
                  className={classNames(
                    'fa',
                    'fa-comment',
                    styles.actionIcon
                  )}
                />}
                title={post.get('comment_count')}
              />
            </div>
            <div className={styles.actionButtons}>
              {!topics.isEmpty() && <ButtonLink
                buttonStyle="solid"
                className={styles.actionButton}
                color="black"
                href={`${baseURL}/topics/${topics.getIn([0, 'slug'])}`}
                title={topics.getIn([0, 'name'])}
              />}
              {topics.size > 1 && <ButtonLink
                buttonStyle="link"
                className={styles.actionButton}
                title={`+ ${topics.size}`}
              />}
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default Post; 
