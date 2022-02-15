import * as React from "react";
import { useState } from "react";



export function login_word(): void {
    //show a msg  in the page
    <div className="text" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white" }}>
        <h1>Log In </h1>
    </div>
}



export function signin(req: string, res: string, next: any): void  {


    const strategy = new PassportStrategy();
    strategy.authenticate(req, res, next);
    
    if(strategy.validate(req, res, next))
    {
            alert(strategy.validate(req, res, next) + " is valid");
    }
    else
    {
        alert(strategy.validate(req, res, next) + " is not valid");
    }

}