

import React from 'react';
import {connect} from 'react-redux';


class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }
    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }
    reset = () => {
        this.props.dispatch({ type: 'RESET' });
    }


    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div  style={{ backgroundColor: '#66B2FF', padding: '10px'  }}>
                    <span style={{
                        color: 'white',
                        border: '1px solid white',
                        padding: '3px',
                        marginRight: '10px',
                        //borderRadius: '50px' // Adjusts the edge to be rounded
                    }}>{this.props.count}</span>
                    <button style={{marginRight: '10px'}} onClick={this.decrement}>-</button>
                    <button style={{marginRight: '10px'}}  onClick={this.increment}>+</button>
                    <button style={{marginRight: '10px'}} onClick={this.reset}>reset</button>
                </div>
            </div>
        )
    }
    }
    function mapStateToProps(state) {
        return {
            count: state.count
        };
    }
    export default connect(mapStateToProps)(Counter);
