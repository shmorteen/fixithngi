import React from "react";
import "./navstyle.css"

const Navbar = () => {
    return (
        <>
        <div className="d-flex flex-column align-items-center shadow-lg" style={{width: 200, height: "auto"}}>
            <div className="p-3">
                <img src="/assets/Frame (1).png" />
            </div>
            <div className="mt-2 p-4">
                <h6><img  src="/assets/home.png"/><span className="mx-2">Home</span></h6>
                <h6><img src="/assets/menu.png" /><span className="mx-2">Dashboard</span></h6>
            </div>
            <div className="flex-end" style={{marginTop:400}}>
            <h6><img  src="./assets/settings.png"/><span  className="mx-2">Settings</span></h6>
            </div>
        </div>
        </>
    );
    
}
export default Navbar