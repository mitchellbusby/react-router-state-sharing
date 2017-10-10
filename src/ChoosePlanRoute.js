import {ChoosePlan} from './ChoosePlan';

const ChoosePlanRoute = ({match, plans, loading, handleChosen}) => {
  return (
    <ChoosePlan
      plans={plans},
      loading={loading},
      handleChosen={handleChosen}
    />
  )
}

export {ChoosePlanRoute};
