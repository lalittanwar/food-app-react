import React,{Component} from 'react';
import {Navbar,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Navbar.Brand >Food Delivery App</Navbar.Brand>
                    <Link to="/cart" className="ml-auto">
                        <Button variant="outline-light" className="navbar-right">My Cart</Button>
                    </Link>
                </Navbar>
            </div>
        )
    }
}

export default Nav
