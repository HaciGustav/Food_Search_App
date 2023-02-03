import React from 'react';

const containerStyle = {
    position: 'fixed',
    top: '6.5rem',
    left: '10px',
    overflow: 'hidden',
    borderRadius: '50%',

    height: '2.4rem',
    width: '2.4rem',
    cursor: 'pointer',
};

const sun = {
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
    position: 'absolute',
    borderRadius: '50%',
    // animation: 'moon 1s ease-in forwards',
};
const sunlight = {
    width: '6px',
    height: '3px',
    borderRadius: '2px',
    margin: 'auto',
    transform: 'translateY(-250%) rotate(90deg)',
    backgroundColor: 'yellow',
    animation: 'sun 0.5s linear forwards',
    // border: '1px solid red',
};

const DarkModeSwitch = ({ handleDarkModeSwitch, darkMode }) => {
    return (
        <div onClick={handleDarkModeSwitch} style={containerStyle}>
            {/* Moon-Dark Part */}
            {darkMode === 'dark' && (
                <div
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                        borderRadius: '50%',
                        transition: '1s',
                        animation: 'moon 1s ease-in forwards',
                        backgroundColor: 'darkblue',
                    }}>
                    {/* Inner Circle */}
                    <div
                        style={{
                            width: '25px',
                            height: '25px',
                            backgroundColor: 'black',
                            borderRadius: '50%',
                            // transform: 'translateX(4px)',
                        }}></div>

                    {/* Outer circle */}
                    <div
                        style={{
                            width: '23px',
                            height: '23px',
                            backgroundColor: 'inherit',

                            borderRadius: '50%',
                            position: 'absolute',
                            left: '15px',
                            zIndex: '5',
                        }}></div>
                </div>
            )}
            {darkMode === 'light' && (
                <div
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                        transition: '1s',
                        backgroundColor: 'grey',
                    }}>
                    {/* Inner Circle */}
                    <div
                        style={{
                            width: '12px',
                            height: '12px',
                            // backgroundColor: 'yellow',
                            borderRadius: '50%',
                            position: 'relative',
                        }}>
                        <div style={{ ...sun }}>
                            <div style={sunlight}></div>
                        </div>
                        <div style={{ ...sun, transform: ' rotate(60deg)' }}>
                            <div style={sunlight}></div>
                        </div>
                        <div style={{ ...sun, transform: ' rotate(120deg)' }}>
                            <div style={sunlight}></div>
                        </div>
                        <div style={{ ...sun, transform: ' rotate(180deg)' }}>
                            <div style={sunlight}></div>
                        </div>
                        <div style={{ ...sun, transform: ' rotate(240deg)' }}>
                            <div style={sunlight}></div>
                        </div>
                        <div style={{ ...sun, transform: ' rotate(300deg)' }}>
                            <div style={sunlight}></div>
                        </div>
                    </div>

                    {/* Outer circle */}
                </div>
            )}
        </div>
    );
};

export default DarkModeSwitch;
