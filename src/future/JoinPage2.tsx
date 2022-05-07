import React from 'react';
import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormTitle = styled.div`
  font-size: 30px;
`;

const FormTextInputContainer = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  height: 100px;
  background-color: grey;
`

const FormTextInputBox = styled.input`
  width: 100%;
  margin: 1em;
  border: blue solid 1px;
  background-color: darkolivegreen;
  border-radius: 0.5em;
  transition: 0.5s;
  
  :focus {
      outline: none;
      border-color: deeppink;
  }
`

const FormTextInput: React.FC = () => {

    return (
        <FormTextInputContainer>
            <FormTextInputBox/>
        </FormTextInputContainer>
    )
}


export const JoinPage2: React.FC = () => {

    return (
        <>
            <FormContainer>
                <FormTitle>
                    회원 가입
                </FormTitle>
                <FormTitle>
                    회원 가입
                </FormTitle>
                <FormTitle>
                    회원 가입
                </FormTitle>
                <FormTextInput/>
            </FormContainer>
        </>
    );
};