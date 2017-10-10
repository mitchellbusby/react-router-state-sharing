import React from 'react';
import {ChoosePlanComponent} from './ChoosePlan';

const ChoosePlanRoute = ({plans, loading, handleChosen}) => {
  return (
    <ChoosePlanComponent
      plans={plans}
      loading={loading}
      handleChosen={handleChosen}
    />
  )
}

export {ChoosePlanRoute};
