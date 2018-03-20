import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, bindActionCreators, applyMiddleware} from 'redux';
import {connect, Provider} from 'react-redux';

const intialState = {
    value: 1000
}

const rootReducer = (state = intialState, action) => {
    switch(action.type) {
        case 'INCREASE': return {
            ...state,
            value: state.value + action.payload
        }
        case 'DECREASE': return {
            ...state,
            value: state.value - action.payload
        }
        case 'RESET_COUNTER': return {
            ...state,
            value: 0
        }
        default:
            return state;
    }
}

function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
   
      // Call the next dispatch method in the middleware chain.
      let returnValue = next(action)
   
      console.log('state after dispatch', getState())
   
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
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

const decreaseAction = n => ({
    type: 'DECREASE',
    payload: n
});

let store = createStore(combinedReducers, applyMiddleware(logger));

class App extends React.Component {
    render() {
        console.log(this.props);
        const {dispatch, value, name, dicrease} = this.props;

        return (
            <div>
                <h2>{name}</h2>
                Value: {value}
                <br/>
                <button onClick={() => dispatch({
                    type: 'INCREASE',
                    payload: 5
                })}>
                    increase
                </button>
                <button onClick={() => dicrease(100)}>
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

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        dicrease: bindActionCreators(decreaseAction, dispatch)
    }
}

const SmartApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <SmartApp/>
    </Provider>,
    document.getElementById('root')
);