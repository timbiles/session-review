import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';

import {updateName} from '../../ducks/reducer';

class Page2 extends Component {
    render() {
        return (
            <div>
                <h1>Page 2</h1>
                <input type="text" onChange={e=> this.props.updateName(e.target.value)}/>
                <div>
                <Link to='/'>Home</Link>
                <Link to='/page3'>Page 3</Link>                
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps, {updateName})(Page2);