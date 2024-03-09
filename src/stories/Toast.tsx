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
                <Card data-testid = "success-toast" className={Styles.Success_Toast_Container} >
                <p data-testid = "success-message" className={Styles.SuccessText}>
        
               {props.message}
                </p>
        
                
                </Card>
            )
        case "SuccessWithCTA":
            return (
                <Card className={Styles.Success_Toast_Container} data-testid = "success-toast">
                <p className={Styles.SuccessText} data-testid='success-message'>  
        
               {props.message}
                </p>

              <Button  style={{backgroundColor:"#00AC80"}}  data-testid="toast-cta" variant='contained'>{props.buttonLabel}</Button>
                </Card>
            )
        case "Danger":
            return (
                <Card data-testid = "Danger-toast" className={Styles.Danger_Toast_Container} >
                <p data-testid = "Danger-message" className={Styles.DangerText}>
        
               {props.message}
                </p>
 
        
                
                </Card>
            )
        case "DangerWithCTA":
            return (
                <Card className={Styles.Danger_Toast_Container} data-testid = "Danger-toast">
                <p data-testid = "Danger-message" className={Styles.DangerText}>
        
            {props.message}
                </p>

                <Button style={{backgroundColor:"#FF6464"}} data-testid = "toast-cta" variant='contained'>{props.buttonLabel}</Button>
                </Card>
            )
        case "Avatar":
            return (
                <Card className={Styles.Avatar_Toast_Container} data-testid = "Avatar-toast">
                 
                 {props.url?  <Image src={props.url} width={32} height={32} alt="profile-pic" className={Styles.profile}/>: <Image className={Styles.profile} src={avatar} width={32} height={32} alt="profile-pic"/> }   
                <p data-testid = "avatar-message">
        
          {props.message}
                </p>

                <Button style={{backgroundColor:"#FFFF00"}} data-testid = "toast-cta" variant='contained'>{props.buttonLabel}</Button>
                </Card>
            )


    }



}

export default Toast