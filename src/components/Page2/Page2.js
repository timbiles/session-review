import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Page2 extends Component {
    render() {
        return (
            <div>
                <h1>Page 2</h1>
                <div>
                <Link to='/'>Home</Link>
                <Link to='/page3'>Page 3</Link>                
                </div>
            </div>
        );
    }
}

export default Page2;