import React from 'react'
import {FormInput} from '../../FormInput/FormInput.component'
import {CustomButton} from '../../CustomButton/CustomButton.component'
import {auth, createUserProfileDocument,firestore} from '../src/firebase/firebase.utils'
import './SignUp.style.scss'


class SignUpForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    render(){
        return (
            <div>Sign up form</div>
        )

    }
    
}

export default SignUpForm;