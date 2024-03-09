import { Button, Card } from '@mui/material'
import React from 'react'
import Styles from "./Toast.module.css"
import avatar from "../../public/Bonnie Green.png"
import Image from 'next/image'


type Success = {
    type: "Success" 
    message: string,
}
type SuccessWithCTA = {
    type: "SuccessWithCTA" 
    message: string,
    buttonLabel: string,
     //To Do: function/route for button
}
type Danger = {
    type: "Danger" 
    message: string,
}
type DangerWithCTA = {
    type: "DangerWithCTA",
    message: string,
    buttonLabel: string,
     //To Do: function/route for button
}
type Avatar = {
    type: "Avatar",
    message: string,
    buttonLabel: string,
    url?: string,
    //To Do: function/route for button
}


type Props = | Success | SuccessWithCTA | Danger | DangerWithCTA | Avatar

function Toast(props: Props) {

    switch (props.type){
        case "Success":
            return (
                <Card className={Styles.Toast_Container}>
                <p>
        
                The Said Message: {props.message}
                </p>
                <p>i am in {props.type} state</p>
        
                
                </Card>
            )
        case "SuccessWithCTA":
            return (
                <Card className={Styles.Toast_Container}>
                <p>
        
                The Said Message: {props.message}
                </p>
                <p>i am in {props.type} state</p>
        
              <Button variant='contained'>{props.buttonLabel}</Button>
                </Card>
            )
        case "Danger":
            return (
                <Card className={Styles.Toast_Container}>
                <p>
        
                The Said Message: {props.message}
                </p>
                <p>i am in {props.type} state</p>
        
                </Card>
            )
        case "DangerWithCTA":
            return (
                <Card className={Styles.Toast_Container}>
                <p>
        
                The Said Message: {props.message}
                </p>
                <p>i am in {props.type} state</p>
                <Button variant='contained'>{props.buttonLabel}</Button>
                </Card>
            )
        case "Avatar":
            return (
                <Card className={Styles.Toast_Container}>
                 
                 {props.url?  <Image src={props.url} alt="profile pic" className={Styles.profile}/>: <Image className={Styles.profile} src={avatar} width={32} height={32} alt=""/> }   
                <p>
        
                The Said Message: {props.message}
                </p>
                <p>i am in {props.type} state</p>
                <Button variant='contained'>{props.buttonLabel}</Button>
                </Card>
            )


    }



}

export default Toast