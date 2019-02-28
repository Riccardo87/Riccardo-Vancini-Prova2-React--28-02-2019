import React, { Component } from 'react';
import {
    Navbar,
} from 'reactstrap';
import '../src/App.css';


class Footer extends Component {
    constructor(props) {
        super(props);

        var today = new Date(),
            date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        this.state = {
            date: date
        }
    }

    render() {

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <div class="col-8 flex-row text-center">
                        <p>Prova del {this.state.date} </p>

                    </div>

                    <div class="col-4 flex-row text-right">
                        <p>Riccardo Vancini</p>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Footer