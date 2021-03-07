import React, {Component} from "react";

// Goal Advice Components
class GeneralGoalAdvice extends Component {
    render() {
        return (
            <h2>General Goal Advice</h2>
        );
    }
}

class RainyGoalAdvice extends Component {
    render() {
        return (
        <h2>Rainy Goal Advice</h2>
        );
    }
}

class EventsGoalAdvice extends Component {
    render() {
        return (
            <h2>Events Goal Advice</h2>
        );
    }
}

class RetirementGoalAdvice extends Component {
    render() {
        return (
            <h2>Retirement Goal Advice</h2>
        );
    }
}

// Budget Advice Components
class LumpBudgetAdvice extends Component {
    render() {
        return (
            <h2>Lump Sum Budget Advice Advice</h2>
        );
    }
}

class LargeBudgetAdvice extends Component {
    render() {
        return (
            <h2>Large Regular Budget Advice</h2>
        );
    }
}

class MediumBudgetAdvice extends Component {
    render() {
        return (
            <h2>Medium Regular Budget Advice</h2>
        );
    }
}

class SmallBudgetAdvice extends Component {
    render() {
        return (
            <h2>Small Regular Budget Advice</h2>
        );
    }
}

export {
    GeneralGoalAdvice,
    RainyGoalAdvice,
    EventsGoalAdvice,
    RetirementGoalAdvice,
    SmallBudgetAdvice,
    MediumBudgetAdvice,
    LargeBudgetAdvice,
    LumpBudgetAdvice
}
