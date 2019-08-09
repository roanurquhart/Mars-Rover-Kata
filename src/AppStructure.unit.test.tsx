import * as React from 'react';
import * as ReactDOM from 'react-dom'
import KataTitleText, { MarsRover } from './Domain/KataPage';

describe('App Structure Tests', function() {
    it('Renders KataTitleText Without Crashing', () => {
        const div = document.createElement("div");

        ReactDOM.render(<KataTitleText />, div);

        ReactDOM.unmountComponentAtNode(div);
    })

    it('Renders MarsRover Without Crashing', () => {
        const div = document.createElement("div");

        ReactDOM.render(<MarsRover/>, div);

        ReactDOM.unmountComponentAtNode(div);
    })
})