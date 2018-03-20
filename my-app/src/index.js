import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';

const intialState = {
    value: 0
}

const rootReducer = (state = intialState, action) => {
    switch(action.type) {
        case 'INCREASE': return {
            ...state,
            value: state.value + 1
        }
        case 'DECREASE': return {
            ...state,
            value: state.value - 1
        }
        default:
            return state;
    }
}

let store = createStore(rootReducer);

class App extends React.Component {
    render() {
        console.log(this.props);

        return (
            <div/>
        )
    }
}

const SmartApp = connect(state => state)(App);

ReactDOM.render(
    <Provider store={store}>
        <SmartApp/>
    </Provider>,
    document.getElementById('root')
);