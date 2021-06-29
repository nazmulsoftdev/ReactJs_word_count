import React from 'react';


const Hoc = (PassComponent) => {
   
class NewComponent extends React.Component{
    
    state = {
        countWord:''
    }



    HandleInput = (even) => {

        this.setState({
            countWord:even.target.value
        })
    }


    render() {
         
        const { countWord } = this.state;

        return <PassComponent passWord={countWord} passHandle={this.HandleInput}/>
          
    }


}    

    return NewComponent;

}

export default Hoc;