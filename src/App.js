import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function App() {

    const AppVersion = '2.3.4.';
    const menu = ['about', 'product', 'price']
    const fisher = (fish) =>{
        console.log('Hello' + fish)
    }
    console.log("hello");
    return (
        <div className="App">
            <h1>Hello</h1>
            <Header version = {AppVersion} menu = {menu} attempt={fisher}/>
            <Body />
            <Footer v = {AppVersion} menu={menu} attempt={fisher}/>


        </div>
    );
}

export default App;
