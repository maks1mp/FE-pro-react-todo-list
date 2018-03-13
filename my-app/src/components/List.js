import React, {Component} from 'react';

export default class List extends Component {
    render() {
        const {tasks} = this.props;

        return (
            <ul>
                {tasks.map(task =>
                    <li key={task.id}>
                        {task.name}
                    </li>)}
            </ul>
        );
    }
}