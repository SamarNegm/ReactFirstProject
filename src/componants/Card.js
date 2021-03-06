import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import React, { Component } from "react";
class MyCard extends Component {

    render() {

        let { Title, price } = this.props;
        return (
            <Card className="col-3" style={{
                margin: '30px',
                boxSizing: 'content-box',
            }}>
                <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/966/951/802/digital-digital-art-artwork-illustration-fantasy-art-hd-wallpaper-preview.jpg" />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {price}$
                    </Card.Text>
                </Card.Body>

            </Card>
        )
    }
}
export default MyCard;
