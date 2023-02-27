import * as React from 'react';

function ShirtStripeSvg(props) {
    let myNumber = props.myPlayerNumber;
    return (
        <div className="shirt-wrap">
            <svg
                className="mySvg"
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
                    className="mySvgPrimary"
                    fill="white"
                    fillOpacity="100%"
                    stroke="#000"
                    strokeOpacity="1"
                    d="M27.462 34.48V-2.156L3.162 14.78c-2.7 1.8-3.5 5.4-1.7 8.1l10.7 16.1c1.1 1.6 2.9 2.6 4.9 2.6 1.1 0 2.2-.4 3.2-1 0-.1.1-.1.2-.2z">
                </path>
                <path
                    className="mySvgSecondary"
                    fill="black"
                    fillOpacity="100%"
                    stroke="#000"
                    strokeOpacity="1"
                    d="M41.693-7.22h-1.53c-3.8.1-6.5 1-6.6 1-.3 0-.5.2-.7.3l-5.4 3.764V97.08c0 1.4 1.1 2.5 2.5 2.5h11.56z">
                </path>
                <path
                    className="mySvgPrimary"
                    fill="orange"
                    fillOpacity="100%"
                    stroke="#000"
                    strokeDasharray="none"
                    strokeWidth="1"
                    d="M55.503 8.97c-5.548-2.415-9.795-7.618-9.94-13.09.1-.1.1-.3.1-.4.1-.7-.1-1.4-.6-1.9-.4-.5-1.1-.8-1.8-.8h-1.57l-.17 106.8h13.98z">
                </path>
                <path
                    className="mySvgSecondary"
                    fill="blue"
                    fillOpacity="100%"
                    stroke="#000"
                    strokeDasharray="none"
                    strokeWidth="1"
                    d="M69.686 99.58l.294-91.27c-2.41 1.299-5.136 2.07-7.918 2.07-2.27 0-4.504-.515-6.56-1.41v90.61z">
                </path>
                <path
                    className="mySvgPrimary"
                    fill="red"
                    fillOpacity="100%"
                    stroke="#000"
                    strokeDasharray="none"
                    strokeWidth="1"
                    d="M83.123-7.22h-2.26c-.7 0-1.4.3-1.8.8-.4.5-.7 1.2-.6 1.9.1.1.1.3.1.4-.134 5.016-3.715 9.805-8.583 12.43l-.294 91.27h13.437z">
                </path>
                <path
                    className="mySvgSecondary"
                    fill="green"
                    fillOpacity="100%"
                    stroke="#000"
                    strokeDasharray="none"
                    strokeWidth="1"
                    d="M83.123-7.22v106.8h10.74c1.4 0 2.5-1.1 2.5-2.5l.2-62.9V-2.386l-4.9-3.534c-.1 0-.1-.1-.2-.1-.2-.1-2.1-1.2-4.5-1.2z">
                </path>
                <path
                    className="mySvgPrimary"
                    fill="purple"
                    fillOpacity="100%"
                    stroke="#000"
                    strokeOpacity="1"
                    d="M96.562-2.386V34.18l6.4 5.3c.1.1.1.2.2.2.9.7 2 1 3.2 1 2 0 3.9-1 4.9-2.6l10.7-15.2c1.8-2.7 1-6.4-1.6-8.1z">
                </path>
                <text className="numberColour" fill="" paintOrder="stroke" stroke="" strokeWidth="5px" fontSize="3em"  x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
                    {myNumber}
                </text>
            </svg>
        </div>
    );
}


export default ShirtStripeSvg;