import ButtonLink from './ButtonLink';
import classNames from 'classnames';
import React from 'react';
import styles from './SearchInput.scss';

class SearchInput extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    onSearchChange: React.PropTypes.func,
    search: React.PropTypes.string,
    style: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e) {
    this.props.onSearchChange(e.currentTarget.value);
  }

  handleClose() {
    this.props.onSearchChange('');
  }

  render() {
    const {
      className,
      search,
      style,
    } = this.props;

    return (
      <div
        className={classNames(styles.container, className)}
        style={style}
      >
        <input
          className={styles.input}
          onChange={this.handleChange}
          placeholder="Discover your next favorite thing..."
          type="text"
          value={search}
        />
        <div className={styles.searchContainer}>
          <i
            className={classNames(styles.searchIcon, 'fa', 'fa-search')}
          />
        </div>
        {!!search.length && <div className={styles.closeContainer}>
          <ButtonLink
            buttonStyle="text"
            className={styles.closeButton}
            color="gray"
            icon={<i
              className={classNames(styles.closeIcon, 'fa', 'fa-times')}
            />}
            onClick={this.handleClose}
          />
        </div>}
      </div>
    );
  }
}

export default SearchInput;
