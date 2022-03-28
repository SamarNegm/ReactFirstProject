import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
class Counter extends Component {
    state = {
        value: 0
    }
    increment = () => this.setState({ value: this.state.value + 1 })
    decrement = () => this.setState({ value: this.state.value - 1 })
    render() {
        return (
            <Card className="col-11" style={{
                margin: '30px',
                boxSizing: 'content-box',
            }}>

                <Card.Body style={{
                    backgroundColor: '#DFDFDE'
                }}>
                    <Card.Title>Current Value</Card.Title>
                    <Card.Text>
                        {this.state.value}
                    </Card.Text>
                    <Button onClick={this.increment} variant="primary" style={{
                        margin: '30px',
                        boxSizing: 'content-box',
                        width: '70px',
                        borderRadius: '30px',
                        backgroundColor: '#8D8DAA',
                        borderColor: '#8D8DAA'
                    }}>+</Button>
                    <Button onClick={this.decrement} variant="primary" style={{
                        margin: '30px',
                        boxSizing: 'content-box',
                        width: '70px',
                        borderRadius: '30px',
                        backgroundColor: '#8D8DAA',
                        borderColor: '#8D8DAA'
                    }}>-</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default Counter;
