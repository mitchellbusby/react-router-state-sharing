import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {LoadingComponent} from './LoadingComponent';

class PayForPlanComponent extends Component {
  render() {
    const {chosenPlanId, loading} = this.props;

    if (loading) {
      return (
        <LoadingComponent />
      )
    }

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
