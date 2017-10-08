import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PayForPlanComponent extends Component {
  render() {
    const {chosenPlanId} = this.props;

    return (
      <div>
        <p>You chose plan #{chosenPlanId}</p>
      </div>
    )
  }
}

PayForPlanComponent.propTypes = {
  some: PropTypes.object,
  loading: PropTypes.bool,
  chosenPlanId: PropTypes.number,
}

export {PayForPlanComponent};
