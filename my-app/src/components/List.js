import React, {Component} from 'react';
import Task from './Task';

export default class List extends Component {
    render() {
        const {tasks} = this.props;

        return (
            <ul>
                {tasks.map(task =>
                <Task {...task} key={task.id}/>)}
            </ul>
        );
    }
}