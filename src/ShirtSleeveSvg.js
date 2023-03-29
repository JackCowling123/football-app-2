import * as React from 'react';

function ShirtSleeveSvg(props) {
    let myNumber = props.myPlayerNumber;
    return (
        <svg className="mySvg"
             xmlns="http://www.w3.org/2000/svg"
             width="776.04"
             height="677.742"
             x="0"
             y="0"
             version="1.1"
             viewBox="0 -7.72 123.435 107.8"
             xmlSpace="preserve"
        >
            <path
                className="mySvgSecondary"
                fill=""
                fillOpacity="100"
                stroke="#000"
                strokeOpacity="1"
                d="M27.462 34.48V-2.156L3.162 14.78c-2.7 1.8-3.5 5.4-1.7 8.1l10.7 16.1c1.1 1.6 2.9 2.6 4.9 2.6 1.1 0 2.2-.4 3.2-1 0-.1.1-.1.2-.2z">
            </path>
            <path
                className="mySvgPrimary"
                fill=""
                fillOpacity="100"
                stroke="#000"
                strokeOpacity="1"
                d="M96.562-2.386l-4.9-3.534c-.1 0-.1-.1-.2-.1-.2-.1-2.1-1.2-4.5-1.2h-6.1c-.7 0-1.4.3-1.8.8-.4.5-.7 1.2-.6 1.9.1.1.1.3.1.4-.2 7.5-8.1 14.5-16.5 14.5s-16.3-7-16.5-14.5c.1-.1.1-.3.1-.4.1-.7-.1-1.4-.6-1.9-.4-.5-1.1-.8-1.8-.8h-3.1c-3.8.1-6.5 1-6.6 1-.3 0-.5.2-.7.3l-5.4 3.764V97.08c0 1.4 1.1 2.5 2.5 2.5h63.9c1.4 0 2.5-1.1 2.5-2.5l.2-62.9z">
            </path>
            <path
                className="mySvgSecondary"
                fill=""
                fillOpacity="100"
                stroke="#000"
                strokeOpacity="1"
                d="M96.562-2.386V34.18l6.4 5.3c.1.1.1.2.2.2.9.7 2 1 3.2 1 2 0 3.9-1 4.9-2.6l10.7-15.2c1.8-2.7 1-6.4-1.6-8.1z">
            </path>
            <text className="numberColour" fill="" paintOrder="stroke" stroke="" strokeWidth="5px" fontSize="3em"  x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
                {myNumber}
            </text>
        </svg>
    );
}

export default ShirtSleeveSvg;