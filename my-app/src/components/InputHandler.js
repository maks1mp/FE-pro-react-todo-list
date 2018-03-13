import React, {Component} from 'react';

export default class InputHandler extends Component {
    render() {
        const {draft, handleInput} = this.props;

        return (
            <form onSubmit={this.props.action}>
                <label>
                    <span>Input: </span>
                    <input
                        type='text'
                        onChange={handleInput}
                        value={draft.name}/>
                </label>
                <button type='submit'>
                    ADD TASK
                </button>
            </form>
        );
    }
}