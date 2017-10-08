import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {LoadingComponent} from './LoadingComponent';

class ChoosePlanComponent extends Component {
  render() {
    const {plans, loading, handleChosen} = this.props;

    if (loading) {
      return (
        <LoadingComponent />
      );
    }

    return (
      <div>
        <p>Choose your plan!</p>
        {
          plans.map(plan => (
            <button key={plan} onClick={handleChosen(plan)}>Plan {plan}</button>
          ))
        }
      </div>
    )
  }
}

ChoosePlanComponent.propTypes = {
  loading: PropTypes.bool,
  handleChosen: PropTypes.func,
  plans: PropTypes.array,
}

export {ChoosePlanComponent};
