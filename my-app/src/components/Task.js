import React from 'react';

export default class Task extends React.Component {
    constructor(props) {
        super(props);

        const {name, isDone, id} = props;

        this.state = {
            name,
            isDone,
            id
        };
    }

    toggleTaskState = () => {
        this.setState({isDone: !this.state.isDone});
    }

    render() {
        const {isDone, name: taskName} = this.state;

        return (
            <label className={isDone ? 'success' : 'error'}>
                <input
                    onChange={this.toggleTaskState}
                    type="checkbox"
                    checked={isDone}/>
                {taskName}
            </label>
        );
    }
}