import React, { Component } from 'react';
import {FetchMyData, FetchPlans} from './MyApi';
import {ChoosePlanRoute} from './ChoosePlanRoute';
import {PayForPlanRoute} from './PayForPlanRoute';
import {Route} from 'react-router-dom';

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

    return (
      <div className="App">
        <Route path='/' exact
          render={({history}) => {
            return (
              <ChoosePlanRoute
                plans={plans}
                loading={loading}
                handleChosen={(planChosen) => {history.push(`/payforplan/${planChosen}`)}}
              />
            )
        }}
        />
      <Route path='/payforplan/:id' exact render={({match}) =>
        {
          return (
            <PayForPlanRoute
              match={match}
              loading={loading}
              plans={plans}
              />
          )
        }}
        />
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
