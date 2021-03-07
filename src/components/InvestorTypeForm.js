import React, {Component} from "react";

class InvestorTypeForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goal: "general",
            budget: "middle",
        };

        this.handleGoalChange = this.handleGoalChange.bind(this);
        this.handleBudgetChange = this.handleBudgetChange.bind(this);
    }

    handleGoalChange(event) {
        this.setState({goal: event.target.value});
    }

    handleBudgetChange(event) {
        this.setState({budget: event.target.value});
    }

    render() {
        const { onSave } = this.props;

        return (
            <form onSubmit={() => onSave(this.state)}>
                <label>
                    Select Your Investment Goal - what are you saving for? <br/>
                    <select value={this.state.goal} onChange={this.handleGoalChange}>
                        <option value="retirement">Retirement</option>
                        <option value="rainy">Rainy Days</option>
                        <option value="events">Life Events</option>
                        <option value="general">General Saving</option>
                    </select>
                </label> <br/>
                <label>
                    Select Your Budget - how often/how much can you invest? <br/>
                    <select value={this.state.budget} onChange={this.handleBudgetChange}>
                        <option value="lump">Lump Sum</option>
                        <option value="large">Large Regular Investments</option>
                        <option value="medium">Medium Regular Investments</option>
                        <option value="small">Small Regular Investments</option>
                    </select>
                </label> <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default InvestorTypeForm;
