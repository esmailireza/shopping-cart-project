import React, { Component } from 'react';

class ClassTimer extends React.Component {
    state={
        count:0
    }

    componentDidMount() {
       this.myTimer= setInterval(() => {
            console.log("hi reza")
            this.setState({count:this.state.count+1})
        }, 1000);
    }

    componentWillUnmount(){
        console.log("cwum")
        clearInterval(this.myTimer)
    }
    render() { 
        return <div>
            class interval
        </div>;
    }
}
 
export default ClassTimer;