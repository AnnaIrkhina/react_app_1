import React from 'react';
import FooterMenuItem1 from "./FooterMenuItem1";
import FooterMenuItem2 from "./FooterMenuItem2";
import FooterMenuItem3 from "./FooterMenuItem3";


function Footer(props) {
    const add = () => {
        console.log('Add')
        props.attempt('Tilapia')

    }
    const change = (e)=>props.attempt(e.target.value)
    return (
        <div className="Footer">
            <div>{props.v}</div>
            <input type = "text" onChange={change}/>
            {props.menu.map(el => <FooterMenuItem1 item={el}/>)}
        </div>
    );
}

export default Footer;
