import classNames from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';
import LinearGroup from './LinearGroup';
import React from 'react';
import styles from './LimitGroup.scss';

class LimitGroup extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    expander: React.PropTypes.node,
    itemGetter: React.PropTypes.func,
    items: ImmutablePropTypes.list.isRequired,
    limit: React.PropTypes.number.isRequired,
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      expanded: false,
    };
    
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState({
      expanded: true,
    });
  }
  
  render() {
    const {
      className,
      expander,
      itemGetter,
      items,
      limit,
    } = this.props;
    
    const { expanded } = this.state;

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
          onClick: this.handleExpand,
        })}
      </div>
    );
  }
}

export default LimitGroup;
