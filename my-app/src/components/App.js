import React, {Component} from 'react';
import List from './List';
import InputHandler from './InputHandler';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            draft: {
                name: ''
            },
            tasks: []
        }
    }

    handleTaksName = e => {
        const {value} = e.target;

        this.setState({
            draft: {name: value}
        });
    }

    addNewTask = e => {
        e.preventDefault();

        const {draft:{name}} = this.state,
            trueName = name.trim();

        if (trueName) {
            const newTask = {
                name: trueName,
                id: Date.now(),
                isDone: false
            };

            this.setState({
                tasks: [
                    ...this.state.tasks,
                    newTask
                ],
                draft: {
                    name: ''
                }
            });
        }
    }

    render() {
        const {draft, tasks} = this.state;

        return (
            <div>
                <InputHandler
                    draft={draft}
                    action={this.addNewTask}
                    handleInput={this.handleTaksName}/>
                <List tasks={tasks}/>
            </div>
        );
    }
}