import * as React from 'react';

function ShirtHoopSvg(props) {
    let myPlayer = props.playerToChild;
    return (
        <div className="shirt-wrap">
            <svg
                className="mySvg"
                xmlns="http://www.w3.org/2000/svg"
                width="776.107"
                height="677.882"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 -7.72 123.446 107.822"
                xmlSpace="preserve"
            >
                <path
                    className="mySvgPrimary"
                    fill=""
                    fillOpacity="100%"
                    stroke="#000"
                    strokeDasharray="none"
                    strokeWidth="0.999"
                    d="M40.17-7.22c-3.8.1-6.5 1-6.6 1-.3 0-.5.2-.7.3l-5.4 3.763-12.214 8.514h35.98c-3.321-2.723-5.56-6.53-5.666-10.477.1-.1.1-.3.1-.4.1-.7-.1-1.4-.6-1.9-.4-.5-1.1-.8-1.8-.8zM72.905 6.357h35.787L96.57-2.386l-4.9-3.534c-.1 0-.1-.1-.2-.1-.2-.1-2.1-1.2-4.5-1.2h-6.1c-.7 0-1.4.3-1.8.8-.4.5-.7 1.2-.6 1.9.1.1.1.3.1.4-.105 3.947-2.344 7.754-5.665 10.477z"
                ></path>
                <path
                    className="mySvgSecondary"
                    fill=""
                    fillOpacity="100%"
                    stroke="#000"
                    strokeWidth="1.009"
                    d="M15.256 6.357L3.17 14.78C1.234 16.07.275 18.288.551 20.434H122.89c.29-2.175-.65-4.432-2.519-5.654l-11.678-8.423H72.905c-2.99 2.45-6.856 4.023-10.835 4.023-3.979 0-7.845-1.573-10.834-4.023z"
                ></path>
                <path
                    className="mySvgPrimary"
                    fill=""
                    fillOpacity="100%"
                    stroke="#000"
                    strokeWidth="0.94"
                    d="M.551 20.434a5.71 5.71 0 00.92 2.446l7.615 11.46H96.57v-.16l.193.16h17.14l8.067-11.46a5.766 5.766 0 00.92-2.446z"
                ></path>
                <path
                    className="mySvgSecondary"
                    fill=""
                    fillOpacity="100%"
                    stroke="#000"
                    strokeWidth="1.037"
                    d="M9.087 34.34l3.083 4.64c1.1 1.6 2.9 2.6 4.9 2.6 1.1 0 2.2-.4 3.2-1 0-.1.1-.1.2-.2l7-5.9v13.837h69.055l.045-13.977zm104.816 0h-17.14l6.207 5.14c.1.1.1.2.2.2.9.7 2 1 3.2 1 2 0 3.9-1 4.9-2.6z"
                ></path>
                <path
                    className="mySvgPrimary"
                    fill=""
                    fillOpacity="100%"
                    stroke="#000"
                    strokeWidth="1.053"
                    d="M27.47 48.317v14.23h69.01l.045-14.23z"
                ></path>
                <path
                    className="mySvgSecondary"
                    fill=""
                    fillOpacity="100%"
                    stroke="#000"
                    strokeWidth="1.029"
                    d="M27.47 62.547v13.978h68.965l.045-13.978z"
                ></path>
                <path
                    className="mySvgPrimary"
                    fill=""
                    fillOpacity="100%"
                    stroke="#000"
                    strokeWidth="1.045"
                    d="M27.47 76.525v13.978h68.921l.044-13.978z"
                ></path>
                <path
                    className="mySvgSecondary"
                    fill=""
                    fillOpacity="100%"
                    stroke="#000"
                    strokeWidth="1.045"
                    d="M96.391 90.503h-68.92v6.577c0 1.4 1.1 2.5 2.5 2.5h63.9c1.4 0 2.5-1.1 2.5-2.5z"
                ></path>
                <text className="numberColour" fill="" paintOrder="stroke" stroke="" strokeWidth="5px" fontSize="3.2em"  x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{myPlayer.number}</text>
            </svg>
            <input
                id={myPlayer.id}
                className="player-name"
                type="text"
                value={myPlayer.name}
                onChange={props.handleNameChange}
                size="100"
            />
        </div>
    );
}

export default ShirtHoopSvg;