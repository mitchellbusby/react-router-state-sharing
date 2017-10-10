import React from 'react';
import {PayForPlanComponent} from './PayForPlan';

const PayForPlanRoute = ({match, loading, plans}) => {
  return (
    <PayForPlanComponent loading={loading} plans={plans} chosenPlanId={match.params.id} />
  )
};

export {PayForPlanRoute};
