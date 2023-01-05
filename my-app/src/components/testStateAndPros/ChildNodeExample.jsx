import React from 'react';
var count = 1;
class ChildNodeComp extends React.Component {
    render() {
        React.Children.map(this.props.children, () => {
            console.log('child', count++);
        });
        return (<h1> the children nodes of ChildNodeComp are <br/> <span>{this.props.children}</span> </h1>
        )
    }
};
export default ChildNodeComp;
