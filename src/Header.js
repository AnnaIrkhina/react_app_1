import React from 'react';
import Logo from "./Logo";
import TopMenu from "./TopMenu";


function Headed(props) {
    const add = () => {
        console.log('Add')
        props.attempt('shark')

    }
    return (
         <div /*className="Header"*/>

            <Logo/> {props.version}
            {/*<TopMenu/>*/}
            {/*<ul>*/}
            {/*    <li> {props.menu[0]}</li>*/}
            {/*    <li> {props.menu[1]}</li>*/}
            {/*    <li> {props.menu[2]}</li>*/}
            {/*</ul>*/}
            {/*<ul>*/}
            {/*    {*/}
            {/*        [*/}
            {/*            <li key='1qwe'> {props.menu[0]}</li>,*/}
            {/*            <li key='2qwe'> {props.menu[1]}</li>,*/}
            {/*            <li key='3qwe'> {props.menu[2]}</li>*/}
            {/*        ]*/}
            {/*    }*/}
            {/*</ul>*/}
             <button onClick={add}>Add </button>
            {props.menu.map(el => <li key={el}>{el}</li>)}
        </div>
    );
}

export default Headed;
