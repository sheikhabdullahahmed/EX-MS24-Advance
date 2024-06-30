import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

function CustomCard({ details }) {

    return (
        <Card style={{  padding: "10px", width: '18rem', marginBottom: '8rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}>
            <Card.Img variant="top" src={details?.thumbnail} />
            <Card.Body>
                <Card.Title>{details?.title}</Card.Title>
                <Card.Text>
                    {details?.description.slice(0,30)}
                </Card.Text>
                <Link to={`/products/${details?.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                    <Button variant="primary" style={{backgroundColor: "lightseagreen", color: "white", width: "100px", height: "30px", border: "none", padding: "10px",}}>
                        See Details
                    </Button>

                </Link>

            </Card.Body>
        </Card>
    );
}

export default CustomCard;
