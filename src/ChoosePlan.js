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
            <button key={plan} onClick={this.onChoose(plan)}>Plan {plan}</button>
          ))
        }
      </div>
    )
  }

  onChoose = planId => evt => {
    const {handleChosen} = this.props;
    handleChosen(planId);
  }
}

ChoosePlanComponent.propTypes = {
  loading: PropTypes.bool,
  handleChosen: PropTypes.func,
  plans: PropTypes.array,
}

export {ChoosePlanComponent};
