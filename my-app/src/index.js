import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {connect, Provider} from 'react-redux';

const intialState = {
    value: 1000
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
        case 'RESET_COUNTER': return {
            ...state,
            value: 0
        }
        default:
            return state;
    }
}

const additionalReducer = (state = {name: 'USER 1111 NAME'}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const combinedReducers = combineReducers({
    additionalReducer,
    rootReducer
});

let store = createStore(combinedReducers);

class App extends React.Component {
    render() {
        console.log(this.props);
        const {dispatch, value, name} = this.props;

        return (
            <div>
                <h2>{name}</h2>
                Value: {value}
                <br/>
                <button onClick={() => dispatch({type: 'INCREASE'})}>
                    increase
                </button>
                <button onClick={() => dispatch({type: 'DECREASE'})}>
                    decrease
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {value} = state.rootReducer,
        {name} = state.additionalReducer;

    return {
        value,
        name
    };
}

const SmartApp = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <SmartApp/>
    </Provider>,
    document.getElementById('root')
);