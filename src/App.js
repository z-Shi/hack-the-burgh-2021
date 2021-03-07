import React, {Component} from "react";
import './App.css';
import InvestorTypeForm from './components/InvestorTypeForm'
import {
  GeneralGoalAdvice,
  RetirementGoalAdvice,
  RainyGoalAdvice,
  EventsGoalAdvice,
  LumpBudgetAdvice,
  LargeBudgetAdvice,
  MediumBudgetAdvice,
  SmallBudgetAdvice,
} from './components/AdviceComponents'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: "general",
      budget: "medium",
      showInvestorTypeForm: true
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.personalisedGoalAdvice = this.personalisedGoalAdvice.bind(this);
    this.personalisedBudgetAdvice = this.personalisedBudgetAdvice.bind(this);
  }

  handleSubmit = properties => {
    this.setState({
      goal: properties.goal,
      budget: properties.budget,
      showInvestorTypeForm: false
    })
  }

  personalisedGoalAdvice() {
    if (this.state.goal === "retirement") {
      return <RetirementGoalAdvice />
    } else if (this.state.goal === "events") {
      return <EventsGoalAdvice />
    } else if (this.state.goal === "rainy") {
      return <RainyGoalAdvice />
    } else {
      return <GeneralGoalAdvice />
    }
  }

  personalisedBudgetAdvice() {
    if (this.state.budget === "lump") {
      return <LumpBudgetAdvice />
    } else if (this.state.budget === "large") {
      return <LargeBudgetAdvice />
    } else if (this.state.budget === "small") {
      return <SmallBudgetAdvice />
    } else {
      return <MediumBudgetAdvice />
    }
  }

  render() {
    return (
      <main>
        <h1>Investment Advisor</h1>
        <div>
          <h2>Overview</h2>
          <p>
            Hello! Welcome to your investment journey. At first, there can be an overflow of information available - so we've created this site to help you find information relevant to you.
            As shown below, we'll ask you to answer a couple of questions that will allow us to offer you appropriate guidance along with making you consider what your goals and actually budget are.
          </p>
        </div>
        <div>
          <h2>Typical Resources</h2>
          <p>Before you start narrowing your results, here are some general resources that should be of use:</p>
          <ol>
            <li><a href="https://www.blackrock.com/uk/individual/education/get-to-know-investing">Blackrock - Get to Know Investing</a></li>
            <li><a href="https://www.investopedia.com/financial-term-dictionary-4769738">Investopedia - Financial Terms Dictionary</a></li>
            <li><a href="https://www.investopedia.com/simulator/">Investopedia - Simulator</a></li>
          </ol>
        </div>
        <div>
          <h2>Set Your Goals!</h2>
          <p>Here we have an area where you can set your goals for investing.</p>
          {this.state.showInvestorTypeForm ? (
            <InvestorTypeForm 
              goal={this.state.goal}
              budget={this.state.budget}
              onSave={this.handleSubmit}
            />
          ) : null}
        </div>
        <div>
          <h2>Personalised Goal Advice</h2>
          {!this.state.showInvestorTypeForm ? (
              <this.personalisedGoalAdvice/>
          ) : null}
          <h2>Personalised Budget Advice</h2>
          {!this.state.showInvestorTypeForm ? (
              <this.personalisedBudgetAdvice/>
          ) : null}
        </div>
        <div>
          <h2>Before You Leave!</h2>
          <p>
            Hopefully you now have access to some relevant information. 
            Before you leave, be sure to save the web-page if you wish to store the information you have seen today.</p>
        </div>
      </main>
    )
  }
}

export default App;
