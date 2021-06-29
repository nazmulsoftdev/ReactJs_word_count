import React from 'react';
import Typing from 'react-typing-animation';


const Header = () => {
    
    return (
        <div className="p-2 text-center text-light">
        <Typing speed={100}>
            React Word 
            <Typing.Speed ms={200} />
             <br/>Count Test
        </Typing>
        </div>
    );

}



export default Header;