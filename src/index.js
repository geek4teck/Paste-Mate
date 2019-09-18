'use babel';

import React from 'react';
const heading = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'sans-serif',
    width: '100%',
    fontSize: '40px'
};
const subHeading = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'monospace',
    width: '100%'
};
const textBox = {
    width: '80%',
    height: '200px',
    marginTop: '50px',
    fontFamily: 'serif',
    fontSize: '17px',
    resize: 'none'
};
const textareaContainer = {
    textAlign: 'center'

}
const buttonContainer = {
    textAlign: 'center',
    width: '100%',
    marginTop: '30px'
}
const saveChangesBtn = {
    height: '38px'
}

function Main() {
    return <div>
        <div style={heading}>Paste Mate</div>
        <div style={subHeading}><b>HotKey:</b> Ctrl + Alt + Shift + V</div>
        <div style={textareaContainer}><textarea style={textBox}></textarea></div>
        <div style={buttonContainer}><button style={saveChangesBtn}>Save Changes</button></div>
    </div>;
}

export default Main
