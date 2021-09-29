import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FiSend } from 'react-icons/fi'

const InputAndButton = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 20px;
`;

const InputName = styled.div`
    font-size: 20px;
    width: 100%;
    height: 40px;
    padding: 2px 7px;
`;

const Button = styled.button`
    font-size: 20px;
    border: none;
    border-radius: 3px;
    margin-left: 10px;
    padding: 2px 10px;
    background: #1E90ff;
    color: #fff;
    text-align: center;
    cursor: pointer;
    ${({ disabled }) => disabled && `
       opacity: 0.5s;
       cursor: default;
    ` }
`;

const Icon = styled.span`
   display: flex;
   align-items: center;
   margin: 0 7px;
`;


function AddTodo() {
    
    return (
        <div>
           AddTodo 
        </div>
    )
}

export default AddTodo;

