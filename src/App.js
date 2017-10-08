import React, { Component } from 'react';
import {FetchMyData, FetchPlans} from './MyApi';
import {ChoosePlanComponent} from './ChoosePlan';
import {PayForPlanComponent} from './PayForPlan';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      some: null,
      chosen: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });

    FetchPlans().then(data => {
      this.setState({
        ...data,
        loading: false
      });
    });
  }

  render() {
    const {chosen, loading, plans} = this.state;

    const block = chosen !== null ? (
      <PayForPlanComponent loading={loading} plans={plans} chosenPlanId={chosen} />
    ) : (
      <ChoosePlanComponent loading={loading} plans={plans} handleChosen={this.handleChosen} />
    )

    return (
      <div className="App">
        {
          block
        }
      </div>
    );
  }

  handleChosen = planChosen => e => {
    this.setState({
      chosen: planChosen,
    });
  }
}

export default App;
