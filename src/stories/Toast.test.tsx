import { expect, test,describe, it } from 'vitest'
import React from 'react'
import { render, screen} from "@testing-library/react"
import Toast from './Toast'
import nextLogo from "../../public/next.svg"
import avatar from "../../public/Bonnie Green.png"



describe("Toast", ()=>{
    describe("Success Notification", ()=>{
        
        it("shows message", ()=>{
            render(<Toast type='Success' message='Your Action was successful'/>)
            expect(screen.getByTestId("success-message").textContent).toBe("Your Action was successful")
     
        })
        it("is green", ()=>{

    render(<Toast type='Success' message='Your Action was successful'/>)
    expect(screen.getByTestId("success-message")).toHaveStyle("color: rgb(0, 172, 128)")
            expect(screen.getByTestId("success-toast")).toHaveStyle("border: 1px solid #66E7C6")
        })
        it("does not have a Call to Action", ()=>{
            
            const {queryByTestId }= render(<Toast type='Success' message='Your Action was successful'/>)
            const callToAction = queryByTestId("toast-cta")
            expect(callToAction).toBeNull()
        })
  
    })

    describe('Success With Call To Action Notification', () => { 
        it("shows message", ()=>{
            render(<Toast type='SuccessWithCTA' message='Your Action was successful' buttonLabel='Proceed'/>)
            expect(screen.getByTestId("success-message").textContent).toBe("Your Action was successful")
      
        })
        it("is green", ()=>{

            render(<Toast type='SuccessWithCTA' message='Your Action was successful' buttonLabel='Proceed'/>)
                expect(screen.getByTestId("success-message")).toHaveStyle("color: rgb(0, 172, 128)")
                    expect(screen.getByTestId("success-toast")).toHaveStyle("border: 1px solid #66E7C6")
                    expect(screen.getByTestId("toast-cta")).toHaveStyle("background-color: #00AC80")
                })
        it("has a Call to Action with label", ()=>{
            const {queryByTestId }= render(<Toast type='SuccessWithCTA' message='Your Action was successful' buttonLabel='Proceed' />)
            const callToAction = queryByTestId("toast-cta")
            expect(callToAction).toBeInTheDocument()
            expect(callToAction).toHaveTextContent("Proceed")
            
        })

        
    })
    describe('Danger Notification', () => { 
           
        it("shows message", ()=>{
            render(<Toast type='Danger' message='Your Action was not Successful'/>)
            expect(screen.getByTestId("Danger-message").textContent).toBe("Your Action was not Successful")
     
        })
        it("is red", ()=>{

    render(<Toast type='Danger' message='Your Action was not successful'/>)
    expect(screen.getByTestId("Danger-message")).toHaveStyle("color: #FF6464")
            expect(screen.getByTestId("Danger-toast")).toHaveStyle("border: 1px solid #FF6464")
        })
        it("does not have a Call to Action", ()=>{
            
            const {queryByTestId }= render(<Toast type='Danger' message='Your Action was not successful'/>)
            const callToAction = queryByTestId("toast-cta")
            expect(callToAction).toBeNull()
        })

    })
    describe('Danger With Call To Action Notification', () => { 
        it("shows message", ()=>{
            render(<Toast type='DangerWithCTA' message='Your Action was not successful' buttonLabel='Go Back'/>)
            expect(screen.getByTestId("Danger-message").textContent).toBe("Your Action was not successful")
     
        })
        it("is red", ()=>{

    render(<Toast type='DangerWithCTA' message='Your Action was not successful' buttonLabel='Go Back'/>)
    expect(screen.getByTestId("Danger-message")).toHaveStyle("color: #FF6464")
            expect(screen.getByTestId("Danger-toast")).toHaveStyle("border: 1px solid #FF6464")
            expect(screen.getByTestId("toast-cta")).toHaveStyle("background-color: #FF6464")
        })
        it("has a Call to Action with label", ()=>{
            
            const {queryByTestId }= render(<Toast type='DangerWithCTA' message='Your Action was not successful' buttonLabel='Go Back'/>)
            const callToAction = queryByTestId("toast-cta")
            expect(callToAction).toBeInTheDocument()
            expect(callToAction).toHaveTextContent("Go Back")
        })

    })
    describe('Incoming Message Notification', () => { 
        it("shows message", ()=>{
            render(<Toast type='Avatar' message='Hello There' buttonLabel='reply'/>)
            expect(screen.getByTestId("avatar-message").textContent).toBe("Hello There")
     
        })
        it("shows a profile picture when give ", ()=>{
            const {getByAltText} = render(<Toast type='Avatar' url={nextLogo} message='Hello There' buttonLabel='reply'/>)
            const image = getByAltText('profile-pic')
            expect(image).toHaveAttribute("src", nextLogo )
     
        })
        it("has a yellow button with the right label", ()=>{
            const {queryByTestId }= render(<Toast type='Avatar' message='Hello There' buttonLabel='reply'/>)
            const callToAction = queryByTestId("toast-cta")
            expect(callToAction).toBeInTheDocument()
            expect(callToAction).toHaveTextContent("reply")
            expect(callToAction).toHaveStyle("background-color:#FFFF00")
      
     
        })

    })

})