import { Box, Button, Card } from '@mui/material'
import React from 'react'
import Styles from "./Toast.module.css"
import avatar from "../../public/Bonnie Green.png"
import check from "../../public/Icon Shapes.svg"
import bell from "../../public/Icon Shapes 2.svg"
import Image from 'next/image'
import close from "../../public/close.svg"
import redClose from "../../public/red-close.svg"
import check2 from "../../public/check-f.svg"
import warning from "../../public/warning-f.svg"
import greyClose from "../../public/greyClose.svg"



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
                <Card data-testid = "success-toast" className={Styles.Success_Toast_Container} sx={{width:{xs:"100%", lg:"640px"}}} elevation={0}>
                    <Box sx={{display:"flex", alignItems:"center", padding:"16px", gap:"8px", justifyContent:"space-between", "& .img":{alignSelf:{xs:"start", lg:"center"}}}}>
                <Box sx={{display:"flex", alignItems:"center",gap:"8px"}}>

                    <Image src={check} width={32} height={32} alt='green check'/>
                    <p data-testid = "success-message" className={Styles.SuccessText}>
                     {props.message}
                </p>
                </Box >
                {/* TODO: close notif */}
                    <Image style={{cursor:"pointer"}} className='img' src={close} width={18} height={18} alt='green check'/>
                    </Box>
          
                </Card>
            )
        case "SuccessWithCTA":
            return (
                <Card className={Styles.Success_Toast_Container} data-testid = "success-toast" elevation={0} sx={{width:{xs:"100%", lg:"640px"}}}>
                    <Box sx={{display:"flex", justifyContent:"space-between", padding:"16px", alignItems:"center"}}>
                        <Box sx={{display:"flex",gap:"8px", alignItems:"center", "& h4":{color:"#00AC80", margin:"0px"}, "width":"100%" }}>
                            <Image src={check2} width={18} height={18} alt='Green check'/>
                            <h4>Success</h4>
                        </Box>
                        <Image style={{cursor:"pointer"}} src={close} width={18} height={18} alt='green check'/>
                    </Box>
                <p className={Styles.SuccessText} data-testid='success-message'>  
        
               {props.message}
                </p>

              <Button style={{backgroundColor:"#00AC80", margin:"16px", border:"1px solid #000000", borderRadius:"100px", textTransform:"capitalize"}}  data-testid="toast-cta" variant='contained' disableElevation>{props.buttonLabel}</Button>
                </Card>
            )
        case "Danger":
            return (
                <Card data-testid = "Danger-toast" className={Styles.Danger_Toast_Container} sx={{width:{xs:"100%", lg:"640px"}}} elevation={0}>
                            <Box sx={{display:"flex", alignItems:"center", padding:"16px", gap:"8px", justifyContent:"space-between", "& .img":{alignSelf:{xs:"start", lg:"center"}}}}>
                            <Box sx={{display:"flex", alignItems:"center",gap:"8px"}}>
                            <Image src={bell} width={32} height={32} alt='red bell'/>
                <p data-testid = "Danger-message" className={Styles.DangerText}>
        
               {props.message}
                </p>

                    </Box>
                    <Image className='img' style={{cursor:"pointer"}} src={redClose} width={18} height={18} alt='red check'/>
                    </Box>
 
        
                
                </Card>
            )
        case "DangerWithCTA":
            return (
                <Card className={Styles.Danger_Toast_Container} data-testid = "Danger-toast" elevation={0} sx={{width:{xs:"100%", lg:"640px"}}}>
                     <Box sx={{display:"flex", justifyContent:"space-between", padding:"16px", alignItems:"center"}}>
                        <Box sx={{display:"flex",gap:"8px", alignItems:"center", "& h4":{color:"#FF6464", margin:"0px"}, "width":"100%" }}>
                            <Image src={warning} width={18} height={18} alt='Red warning'/>
                            <h4>Attention</h4>
                        </Box>
                        <Image style={{cursor:"pointer"}} src={redClose} width={18} height={18} alt='red cross'/>
                    </Box>
                <p data-testid = "Danger-message" className={Styles.DangerText}>
        
            {props.message}
                </p>

                <Button style={{backgroundColor:"#FF6464", margin:"16px", border:"1px solid #000000", borderRadius:"100px", textTransform:"capitalize"}} data-testid = "toast-cta" variant='contained'>{props.buttonLabel}</Button>
                </Card>
            )
        case "Avatar":
            return (
                <Card className={Styles.Avatar_Toast_Container} data-testid = "Avatar-toast"  sx={{width:{xs:"100%", lg:"640px"}}}>
               <div style={{display:"flex", justifyContent:"space-between", padding:"16px"}}>
                 <Box sx={{display:"flex", }}>
                 {props.url?  <Image src={props.url} width={32} height={32} alt="profile-pic" className={Styles.profile}/>: <Image className={Styles.profile} src={avatar} width={48} height={48} alt="profile-pic"/> }   
                <Box>
                    {/* TODO: Make dynamic */}
                    <h4>Bonnie Green</h4>
                <p data-testid = "avatar-message" className={Styles.Avatar_message}>
        
          {props.message}
                </p>
                <Button style={{backgroundColor:"#FFFF00", marginInline:"16px", color:"#112127", border:"1px solid #112127", borderRadius:"100px"}} data-testid = "toast-cta" variant='contained' disableElevation>{props.buttonLabel}</Button>
                </Box>
                 </Box>
                <Image style={{cursor:"pointer"}} src={greyClose} width={18} height={18} alt='grey cross'/>
                 </div>

                </Card>
            )


    }



}

export default Toast