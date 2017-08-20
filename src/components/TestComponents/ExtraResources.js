import React, { Component } from 'react';

class ExtraResources extends Component {

    componentDidMount() {
        this.props.setRoute('extra_resources');
    }

    render() {
        return (
            <div className="ExtraResources">
            </div>
        )
    }
}

export default ExtraResources;