import React from "react";

function ShirtPlainSvg(props) {
    let myNumber = props.myPlayerNumber;
    console.log(myNumber);
    return (
        <svg className="mySvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 -7.72 127.25 127.25">
            <path
                className="mySvgPrimary"
                d="M32 109c-1.4 0-2.5-1.1-2.5-2.5V43.9l-7 5.9c-.1.1-.2.1-.2.2-1 .6-2.1 1-3.2 1-2 0-3.8-1-4.9-2.6L3.5 32.3c-1.8-2.7-1-6.3 1.7-8.1L34.9 3.5c.2-.1.4-.3.7-.3.1 0 2.8-.9 6.6-1h3.1c.7 0 1.4.3 1.8.8.5.5.7 1.2.6 1.9 0 .1 0 .3-.1.4.2 7.5 8.1 14.5 16.5 14.5s16.3-7 16.5-14.5c0-.1 0-.3-.1-.4-.1-.7.2-1.4.6-1.9s1.1-.8 1.8-.8H89c2.4 0 4.3 1.1 4.5 1.2.1 0 .1.1.2.1l28.7 20.7c2.6 1.7 3.4 5.4 1.6 8.1l-10.7 15.2c-1 1.6-2.9 2.6-4.9 2.6-1.2 0-2.3-.3-3.2-1-.1 0-.1-.1-.2-.2l-6.4-5.3-.2 62.9c0 1.4-1.1 2.5-2.5 2.5H32z"
                opacity="100%">
            </path>
            <path
                className="mySvgSecondary"
                d="M89.1 5c1.8 0 3.1.9 3.1.9l28.7 20.6c1.6 1 2 3.1.9 4.7l-10.7 15.1c-.6 1-1.7 1.5-2.8 1.5-.6 0-1.3-.2-1.9-.6l-10.5-8.6-.2 68.2H32v-68l-11.2 9.4c-.6.4-1.2.6-1.9.6-1.1 0-2.2-.5-2.8-1.5L5.5 31.2c-1-1.6-.6-3.6.9-4.7L36.1 5.8s2.4-.8 5.8-.9H45v.4c0 9 9.1 17.3 19 17.3s19-8.3 19-17.3v-.4H89.1c-.1.1 0 .1 0 .1m0-5s-.1 0 0 0H83c-1.4 0-2.7.6-3.7 1.6-.9 1-1.4 2.4-1.3 3.8v.4c-.3 6.1-7.1 11.9-14 11.9S50.3 11.9 50 5.8v-.4c.1-1.4-.3-2.8-1.3-3.8C47.8.6 46.4 0 45 0h-3.2c-4 .1-6.9 1-7.3 1.1-.5.2-.9.4-1.3.7L3.7 22.4C-.1 25-1.1 30.1 1.4 34l10.7 16.1c1.6 2.3 4.2 3.7 7 3.7 1.6 0 3.2-.5 4.6-1.4.2-.1.3-.2.5-.3l2.9-2.5v57.2c0 2.8 2.2 5 5 5h63.8c2.8 0 5-2.2 5-5l.1-57.7 2.3 1.9c.1.1.3.2.4.3 1.4.9 3 1.4 4.6 1.4 2.8 0 5.4-1.4 6.9-3.7l10.6-15 .1-.1c2.5-3.8 1.5-9-2.3-11.5l-28-20.9c-.1-.1-.2-.1-.3-.2-.3-.2-2.6-1.5-5.6-1.5z"
                opacity="100%">
            </path>
            <text className="numberColour" fill="" paintOrder="stroke" stroke="" strokeWidth="5px" fontSize="3em"  x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
                {myNumber}
            </text>
        </svg>
    );
}

export default ShirtPlainSvg;