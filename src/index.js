'use babel';

import React from 'react';
const heading = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Questrial',
    width: '100%',
    fontSize: '40px',
    color: '#fff',
    textShadow: '2px 1px 0 #2e2e2e'
    
};
const subHeading = {
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '50px',
    fontFamily: 'Questrial',
    width: '36%',
    color: '#fff',
    borderBottom: '1px solid #fff',
    paddingBottom: '5px',
    letterSpacing: '0.5px'
};

const textBox = {
    width: '80%',
    height: '200px',
    marginTop: '50px',
    fontFamily: 'Questrial',
    fontSize: '17px',
    resize: 'none',
    borderRadius:'10px'
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
      borderRadius: '25px',
    backgroundColor: 'transparent',
    border: '3px solid #fff',
    padding: '10px 30px',
    color:'#fff',
    fontFamily: 'Questrial'
}
const bod = {
    backgroundColor: 'red'
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
