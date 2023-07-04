import React from 'react';
import styled from 'styled-components';


export const styleBody = styled.div`
padding: 35px 0px 0 119vh;
`

export const StyledHeader = styled.div`
  background-color: yellow;
  padding: 10px;
  border-radius: 5px;
  width:100%;
  text-align:center;
  margin-bottom:15px;
  color:blue;
`

export const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  width:50%;
  text-align:center;  
`

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${props => props.invalid ? 'red' : 'black'};
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  opacity: ${props => !props.enabled ? 0.5 : 1};
`

export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`

function LoginForm() {
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [mobile, setmobile] = React.useState('');
    const [mobileInvalid, setmobileInvalid] = React.useState(false);
    const [emailInvalid, setemailInvalid] = React.useState(false);
    const [enabled, setEnabled] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mobile.length > 10 || mobile.length < 10) {
            setmobileInvalid(true);
        } else {
            setmobileInvalid(false);
        } 

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setemailInvalid(true);
        } else {
            setemailInvalid(false);
        }

    }

    const usernameEntered = (e) => {
        setUsername(e.target.value);
    }

    const emailEntered = (e) => {
      setEmail(e.target.value);
  }

    const mobileEntered = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setmobile(value);
    }


    const buttonEnabled = (email,username, mobile) => {
        if(email.length > 0 && username.length > 0 && mobile.length > 0) {
            setEnabled(true);
        } else {
            setEnabled(false);
        }
    }

    return (
        <styleBody>
        <div>
        <StyledForm onSubmit={handleSubmit}>      
            <StyledHeader>
              <div> 
                  <h3>Registration</h3>
              </div>
            </StyledHeader>    
            
            <StyledLabel invalid={emailInvalid}>Email:</StyledLabel>
            <StyledInput type="text" value={email} onChange={e => emailEntered(e)}/>
            {emailInvalid && <StyledAlert>Email is invalid.</StyledAlert>}

            <StyledLabel>Username:</StyledLabel>
            <StyledInput type="text" value={username} onChange={e => usernameEntered(e)}/>

            <StyledLabel invalid={mobileInvalid}>mobile:</StyledLabel>
            <StyledInput type="mobile" value={mobile} onChange={(e) => mobileEntered(e)} />
            {mobileInvalid && <StyledAlert>Mobile is invalid.</StyledAlert>}
            
            <StyledButton type="submit" disabled={!email || !username || !mobile}>Sign Up</StyledButton>
        
        </StyledForm>
        </div>
        </styleBody>
    )
}

export default LoginForm;