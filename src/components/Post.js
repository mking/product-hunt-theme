import ButtonLink from './ButtonLink';
import classNames from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';
import LinearGroup from './LinearGroup';
import React from 'react';
import styles from './Post.scss';

class Post extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    baseURL: React.PropTypes.string,
    className: React.PropTypes.string,
    onMouseEnter: React.PropTypes.func,
    onMouseLeave: React.PropTypes.func,
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
    const { active, baseURL, className, onMouseEnter, onMouseLeave, post } = this.props;

    const topics = post.get('topics');

    return (
      <div
        className={classNames(
          styles.container,
          active && styles['container--active'],
          className
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
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
            <LinearGroup
              orientation="horizontal"
              spacing={10}
            >
              <ButtonLink
                buttonStyle="outline"
                className={styles.actionButton}
                color="black"
                icon={<i
                  className={classNames(
                    styles.actionIcon,
                    'fa',
                    'fa-caret-up'
                  )}
                />}
                title={post.get('vote_count')}
              />
              <ButtonLink
                buttonStyle="outline"
                className={styles.actionButton}
                color="gray"
                href={`${baseURL}${post.get('url')}`}
                icon={<i
                  className={classNames(
                    styles.actionIcon,
                    'fa',
                    'fa-comment'
                  )}
                />}
                title={post.get('comment_count')}
              />
              {active && <ButtonLink
                buttonStyle="outline"
                className={classNames(
                  styles.actionButton,
                  styles['actionButton--external']
                )}
                color="gray"
                href={`${baseURL}${post.get('shortened_url')}`}
                icon={<i
                  className={classNames(
                    styles.actionIcon,
                    'fa',
                    'fa-external-link'
                  )}
                />}
              />}
            </LinearGroup>
            <LinearGroup
              orientation="horizontal"
              spacing={10}
            >
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
                color="gray"
                title={`+ ${topics.size}`}
              />}
            </LinearGroup>
          </div>
        </div>
      </div>
    ); 
  }
}

export default Post; 
