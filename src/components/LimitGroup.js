import classNames from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';
import LinearGroup from './LinearGroup';
import React from 'react';
import styles from './LimitGroup.scss';

class LimitGroup extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    expanded: React.PropTypes.bool.isRequired,
    expander: React.PropTypes.node,
    itemGetter: React.PropTypes.func,
    items: ImmutablePropTypes.list.isRequired,
    limit: React.PropTypes.number.isRequired,
    onExpand: React.PropTypes.func,
  };
  
  render() {
    const {
      className,
      expanded,
      expander,
      itemGetter,
      items,
      limit,
      onExpand,
    } = this.props;
    
    const truncatedLimit = Math.min(items.size, limit);
    const expandedLimit = expanded ? items.size : truncatedLimit;
    
    return (
      <div className={classNames(styles.container, className)}>
        <LinearGroup
          className={styles.items}
          orientation="vertical"
        >
          {items.slice(0, expandedLimit).map(item => {
            return itemGetter(item);
          })}
        </LinearGroup>
        {!expanded && React.cloneElement(expander, {
          className: classNames(styles.expander, expander.props.className),
          numRemaining: items.size - truncatedLimit,
          onClick: onExpand,
        })}
      </div>
    );
  }
}

export default LimitGroup;
