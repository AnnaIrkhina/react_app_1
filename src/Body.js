import React from 'react';
import BodyLeft from "./BodyLeft";
import BodyCenter from "./BodyCenter";
import BodyRight from "./BodyRight";


function Body() {
    return (
        <div className="Body">
            <BodyLeft />
            <BodyCenter />
            <BodyRight />
        </div>
    );
}

export default Body;
