import React from 'react';
import Button from './Button';

class Sample extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">
                <h1>Component Preview</h1>
                <Button>Primary</Button>
            </div>
        );
    }
}

export default Sample;
