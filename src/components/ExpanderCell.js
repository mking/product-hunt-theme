import ButtonLink from './ButtonLink';
import classNames from 'classnames';
import React from 'react';
import styles from './ExpanderCell.scss';

class ExpanderCell extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    numRemaining: React.PropTypes.number,
    onClick: React.PropTypes.func,
  };

  render() {
    const {
      className,
      numRemaining,
      onClick,
    } = this.props;

    return (
      <div
        className={classNames(styles.container, className)}
        onClick={onClick}
      >
        <ButtonLink
          buttonStyle="link"
          color="gray"
          icon={<i
            className={classNames(
              'fa',
              'fa-chevron-down'
            )}
          />}
          title={`Show ${numRemaining} more`}
        />
      </div>
    );
  }
}

export default ExpanderCell;
