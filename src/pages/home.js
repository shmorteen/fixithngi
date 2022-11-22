import React from 'react';
import {Link, Outlet } from "react-router-dom"
import Navbar from "../navigation/navbar";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


class Home extends React.Component {
  render() {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n            .body{\n                margin: 50px;\n                display: flex;\n                flex-direction: row;\n            }\n            .tabs{\n                display: flex;\n                flex-wrap: wrap;\n                max-width: auto;\n\n            }\n            .tabs__label {\n                padding:10px 16px;\n                cursor: pointer;\n            }\n            .tabs__radio {\n                display: none;\n            }\n            .tabs__content {\n                order: 1;\n                width: 100%;\n                display: none;\n            }\n            .tabs__radio:checked+.tabs__label{\n                    color: #233BA9;\n                    border-bottom: 4px solid #233BA9;\n            }\n            .tabs__radio:checked+.tabs__label+.tabs__content {\n                display: initial; \n            }\n        "
          }}
        />

        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .notificationmb {\n  color: white;\n  padding: 15px 26px;\n  position: relative;\n  display: inline-block;\n  border-radius: 2px;\n}\n\n.notificationmb .badgemb {\n  position: absolute;\n  top: 50px;\n  left: 165px;\n  padding: 5px 10px;\n  border-radius: 50%;\n  color: white;\n}\n  .notificationlg {\n  color: white;\n  padding: 15px 26px;\n  position: relative;\n  display: inline-block;\n  border-radius: 2px;\n}\n\n.notificationlg .badgelg {\n  position: absolute;\n  top: 45px;\n  left: 70px;\n  padding: 5px 10px;\n  border-radius: 50%;\n  color: white;\n}\n"
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    /* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 34px;\n  height: 20px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #F16F04;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #F16F04;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(12px);\n  -ms-transform: translateX(12px);\n  transform: translateX(12px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n'
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n        .main {\n            display: block;\n            position: relative;\n            padding-left: 45px;\n            margin-bottom: 15px;\n            cursor: pointer;\n            font-size: 20px;\n        }\n          \n        /* Hide the default checkbox */\n        input[type=checkbox] {\n            visibility: hidden;\n        }\n          \n        /* Creating a custom checkbox\n        based on demand */\n        .geekmark {\n            position: absolute;\n            top: 0;\n            left: 0;\n            margin-top: 4px;\n            height: 15px;\n            width: 15px;\n            border-raduis: 50%;\n            border: 1px solid #787A7D;\n            background-color: white;\n        }\n          \n        /* Specify the background color to be\n        shown when hovering over checkbox */\n        .main:hover input ~ .geekmark {\n            border:1px solid #F16F04\n        }\n          \n        /* Specify the background color to be\n        shown when checkbox is active */\n        .main input:active ~ .geekmark {\n            background-color: #F16F04;\n            border: #F16F04\n        }\n          \n        /* Specify the background color to be\n        shown when checkbox is checked */\n        .main input:checked ~ .geekmark {\n            background-color: white;\n        }\n          \n        /* Checkmark to be shown in checkbox */\n        /* It is not be shown when not checked */\n        .geekmark:after {\n            content: "";\n            position: absolute;\n            display: none;\n        }\n          \n        /* Display checkmark when checked */\n        .main input:checked ~ .geekmark:after {\n            display: block;\n        }\n          \n        /* Styling the checkmark using webkit */\n        /* Rotated the rectangle by 45 degree and \n        showing only two border to make it look\n        like a tickmark */\n        .main .geekmark:after {\n            left: 4px;\n            bottom: 4px;\n            width: 4px;\n            height: 7px;\n            border: solid #F16F04;\n            border-width: 0 1px 2px 0;\n            -webkit-transform: rotate(45deg);\n            -ms-transform: rotate(45deg);\n            transform: rotate(45deg);\n        }\n    '
          }}
        />
        <div className='d-flex flex-row' style={{height: "auto"}}>
          <div className='d-md-flex d-none'> 
          <Navbar />
          </div>
          <div className='vw-100'>
            <div className='d-md-flex d-none flex-row justify-content-end p-3'>
              <div className='d-flex flex-row'>
                <div className='notificationhd'>
                <img className='mt-2' src='/assets/Vector.png' style={{height:21, width:"auto"}}/>
                <span class="badgehd"><img src='./assets/Ellipse 100.png' /></span>
                </div>
                <img className='mx-2 mt-1' src='/assets/Ellipse 99.png' style={{height:30, width:"auto"}}/>
              </div>
            </div>
            <div className='d-md-none d-flex p-3'>
              <img src='/assets/menuhn.png'/>
              <img style={{marginLeft:90}} src='/assets/Frame (1).png' />
            </div>
            <div>
              <h5 className='d-md-flex d-none text-start mx-3 text-bold'>Settings</h5>
              <h5 className='d-sm-flex d-md-none text-center mt-3 text-bold'  style={{ fontSize:18}}>Settings</h5>
            </div>

            <div className="p-3">
                <div className="tabs">
                  <input
                    type="radio"
                    className="tabs__radio"
                    name="tabs-example"
                    id="tab1"
                    defaultChecked="tab1"
                  />
                  <label htmlFor="tab1" className="tabs__label">
                    Accounts
                  </label>
                  <div className="tabs__content mb-2" style={{borderTop:"1px solid grey"}}><div className='d-flex flex-column p-3'>
                <div className='d-md-flex d-none flex-column'>
                  <h6 className='text-bold'  style={{fontSize:18}}>Profile Information</h6>
                  <p className='text-bold' style={{color:"#787A7D", fontSize:14}}>This information will be publicly displayed so be careful what you fill</p>
                  <div className="notificationlg">
                  <img src="/assets/Ellipse 99.png" style={{borderRadius: "50%", width:70, height:70}} />
                  <span className='badgelg'><img src='./assets/Frame 26080342.png' /></span>
                  </div>
                  
                </div>
                <div className='d-flex d-md-none flex-column align-items-start mt-3'>
                  <h6 className='text-start text-bold'>Profile Information</h6>
                  <div className="notificationmb">
                  <img src="/assets/Ellipse 99.png" style={{marginLeft:90,borderRadius: "50%", width:70, height:70}} />
                  <span className='badgemb'><img src='./assets/Frame 26080342.png' style={{width:16, height:16}} /></span>
                  </div>
                </div>
                <div>
                <div className='row mt-4 mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Username</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-2 col-sm-12 ' >
                  <label style={{fontSize:16}}>Full Name</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Email</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Phone Number</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                </div>
                <div className='mb-3'>
                  <h6 className='text-bold'  style={{fontSize:18}}>Company Information</h6>
                  <p className='d-md-flex d-none text-bold' style={{color:"#787A7D", fontSize:14}}>Update your company information here</p>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Company Name</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Company Address</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mb-5'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Website URL</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='d-none d-md-flex flex-row justify-content-end mt-2'>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                <button className='btn text-bold mx-1' style={{fontWeight:"bold", fontSize:18,color:"white",backgroundColor: "#233BA9"}}>Save Changes</button>
                </div>
                <div className='d-flex d-md-none flex-column align-items-center mt-2'>
                <button className='btn w-100' style={{fontWeight:"bold", fontSize:18,backgroundColor: "#233BA9", color:"white"}}>Save Changes</button>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                </div>
               </div>
               </div>
                
                
                  <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
                  <label htmlFor="tab2" className="tabs__label">
                    Prefrences
                  </label>
                  <div className="tabs__content  mb-2" style={{borderTop:"1px solid grey"}}>
                  <div className='d-flex flex-column p-3'>
              <div className='row mt-3'>
                <div className='col-md-2 col-sm-12'>
                <label for="language" style={{fontSize:18, fontWeight:"bold"}}>Preferred Language</label>
                </div>
                <div className='col-md-3 col-sm-12'>
                <select className="form-select" aria-label="Default select example" style={{fontSize:16}}>
                  <option selected>English</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                  </select>
              </div>
              </div>
              <div  className='row mt-3'>
                <div className='col-md-2 col-sm-12'>
                  <label  style={{fontSize:18, fontWeight:"bold"}}>Accessibilty</label>
                </div>
                <div className='col-md-3 col-sm-12 mb-5'>
                <label className="main" style={{fontSize: 16}}>
                  <input type="checkbox" />
                  <span className="geekmark" />
                  <span style={{marginLeft: -30, marginTop:-20, color:"#787A7D"}}>I use a screen reader</span>
                </label>
                <label className="main" style={{fontSize: 16}}>
                  <input type="checkbox" />
                  <span className="geekmark" />
                  <span style={{marginLeft: -30, marginTop:-20, color:"#787A7D"}}>I use large text</span>
                </label>
                <label className="main" style={{fontSize: 16}}>
                  <input type="checkbox" />
                  <span className="geekmark" />
                  <span style={{marginLeft: -30, marginTop:-20, color:"#787A7D"}}>I use large text</span>
                </label>
                </div>
                <div className='d-none d-md-flex flex-row justify-content-end'>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                <button className='btn text-bold mx-1' style={{fontWeight:"bold", fontSize:18,color:"white",backgroundColor: "#233BA9"}}>Save Changes</button>
                </div>
                <div className='d-flex d-md-none flex-column align-items-center'>
                <button className='btn w-100' style={{fontWeight:"bold", fontSize:18,backgroundColor: "#233BA9", color:"white"}}>Save Changes</button>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                </div>
              </div>                 
              </div>
                  </div>
                  <input type="radio" className="tabs__radio" name="tabs-example" id="tab3" />
                  <label htmlFor="tab3" className="tabs__label">
                    Notifications
                  </label>
                  <div className="tabs__content mb-2" style={{borderTop:"1px solid grey"}}>
                <div className='d-flex flex-column p-3'>
                <div className='d-flex flex-row justify-content-between mt-2 mb-2'>
                <div>
                <h6  className='text-bold'  style={{fontSize:18}}>Email Notification</h6>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-5}}>Set which notifications you will like to recieve</p>
                </div>
                <button className='btn btn-white' style={{border: "1px solid #233BA9", color:"#233BA9"}}>Enable All</button>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>Complaint Status</p>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-20}}>Get notified about the status of your complaint</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>News & Update</p>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-20}}>Stay updated we bring you updates and promotions</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>Weekly Newsletter</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>Invoice Reciept</p>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-20}}>Get a copy of your invoice reciept sent to your mail</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>                  
                <div className='d-flex flex-row justify-content-between mt-5'>
                <div>
                <h6  className='text-bold'  style={{fontSize:18}}>Push Notification</h6>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-5}}>Set which notifications you will like to recieve</p>
                </div>
                <button className='btn btn-white' style={{border: "1px solid #233BA9", color:"#233BA9"}}>Enable All</button>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>Complaint Status</p>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-20}}>Get notified about the status of your complaint</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>News & Update</p>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-20}}>Stay updated we bring you updates and promotions</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>Weekly Newsletter</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div className='mb-5'>
                <p style={{fontSize:16}}>Invoice Reciept</p>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-20}}>Get a copy of your invoice reciept sent to your mail</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-none d-md-flex flex-row justify-content-end mt-5'>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                <button className='btn text-bold mx-1' style={{fontWeight:"bold", fontSize:18,color:"white",backgroundColor: "#233BA9"}}>Save Changes</button>
                </div>
                <div className='d-flex d-md-none flex-column align-items-center'>
                <button className='btn w-100' style={{fontWeight:"bold", fontSize:18,backgroundColor: "#233BA9", color:"white"}}>Save Changes</button>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                </div>
                </div>
                </div>  
                 <input
                    type="radio"
                    className="tabs__radio"
                    name="tabs-example"
                    id="tab4"
                    defaultChecked=""
                  />
                  <label htmlFor="tab4" className="tabs__label">
                    Privacy & Security
                  </label>
                  <div className="tabs__content  mb-2" style={{borderTop:"1px solid grey"}}>
                  <div className='d-flex flex-column p-3'>
                <div className='d-flex flex-row justify-content-between mt-5 mt-5'>
                <div>
                <h6  className='text-bold'  style={{fontSize:18}}>Two Factor Authentication</h6>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-5}}>When enabled your account is protected from from being hacked</p>
                </div>
                <button className='btn btn-white' style={{border: "1px solid #233BA9", color:"#233BA9"}}>Enable All</button>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                <div>
                <h6  className='text-bold'  style={{fontSize:18}}>Password</h6>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-5}}>To create a new password it must contain a minimun of 12 letters,an uppercase,a number and a character</p>
                </div>
                </div>
                <div className='row mt-4 mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Current Password</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mt-4 mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>New Paasword</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mt-4 mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Confirm Password</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='d-none d-md-flex flex-row justify-content-end mt-5'>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                <button className='btn text-bold mx-1' style={{fontWeight:"bold", fontSize:18,color:"white",backgroundColor: "#233BA9"}}>Save Changes</button>
                </div>
                <div className='d-flex d-md-none flex-column align-items-center mt-3'>
                <button className='btn w-100' style={{fontWeight:"bold", fontSize:18,backgroundColor: "#233BA9", color:"white"}}>Save Changes</button>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                </div>
                </div> 
                    </div>              
                </div>
            </div>



            {/* <div className='d-md-none d-flex'>
            <Tabs
              defaultActiveKey="account"
              id="uncontrolled-tab-example"
              className="mb-3 mx-3"
              style={{color:"#787A7D", textDecoration:"none"}}
            >
              <Tab eventKey="account" title="Account">
               <div className='d-flex flex-column p-3'>
                <div className='d-md-flex d-none flex-column'>
                  <h6 className='text-bold'  style={{fontSize:18}}>Profile Information</h6>
                  <p className='text-bold' style={{color:"#787A7D", fontSize:14}}>This information will be publicly displayed so be careful what you fill</p>
                  <div className="notificationlg">
                  <img src="/assets/Ellipse 99.png" style={{borderRadius: "50%", width:70, height:70}} />
                  <span className='badgelg'><img src='./assets/Frame 26080342.png' /></span>
                  </div>
                  
                </div>
                <div className='d-flex d-md-none flex-column align-items-start'>
                  <h6 className='text-start text-bold'>Profile Information</h6>
                  <div className="notificationmb">
                  <img src="/assets/Ellipse 99.png" style={{marginLeft:130,borderRadius: "50%", width:70, height:70}} />
                  <span className='badgemb'><img src='./assets/Frame 26080342.png' style={{width:16, height:16}} /></span>
                  </div>
                </div>
                <div>
                <div className='row mt-4 mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Username</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-2 col-sm-12 ' >
                  <label style={{fontSize:16}}>Full Name</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Email</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Phone Number</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                </div>
                <div className='mb-3'>
                  <h6 className='text-bold'  style={{fontSize:18}}>Company Information</h6>
                  <p className='d-md-flex d-none text-bold' style={{color:"#787A7D", fontSize:14}}>Update your company information here</p>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Company Name</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Company Address</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Website URL</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='d-none d-md-flex flex-row justify-content-end'>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                <button className='btn text-bold mx-1' style={{fontWeight:"bold", fontSize:18,color:"white",backgroundColor: "#233BA9"}}>Save Changes</button>
                </div>
                <div className='d-flex d-md-none flex-column align-items-center'>
                <button className='btn w-100' style={{fontWeight:"bold", fontSize:18,backgroundColor: "#233BA9", color:"white"}}>Save Changes</button>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                </div>
               </div>

              </Tab>
              <Tab eventKey="prefrences" title="Prefrences">
              <div className='d-flex flex-column p-3'>
              <div className='row'>
                <div className='col-md-2 col-sm-12'>
                <label for="language" style={{fontSize:14, fontWeight:"bold"}}>Preferred Language</label>
                </div>
                <div className='col-md-3 col-sm-12'>
                <select className="form-select" aria-label="Default select example" style={{fontSize:16}}>
                  <option selected>English</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                  </select>
              </div>
              </div>
              <div  className='row mt-3'>
                <div className='col-md-2 col-sm-12'>
                  <label  style={{fontSize:14, fontWeight:"bold"}}>Accessibilty</label>
                </div>
                <div className='col-md-3 col-sm-12 mb-5'>
                <label className="main" style={{fontSize: 16}}>
                  <input type="checkbox" />
                  <span className="geekmark" />
                  <span style={{marginLeft: -30, marginTop:-20, color:"#787A7D"}}>I use a screen reader</span>
                </label>
                <label className="main" style={{fontSize: 16}}>
                  <input type="checkbox" />
                  <span className="geekmark" />
                  <span style={{marginLeft: -30, marginTop:-20, color:"#787A7D"}}>I use large text</span>
                </label>
                <label className="main" style={{fontSize: 16}}>
                  <input type="checkbox" />
                  <span className="geekmark" />
                  <span style={{marginLeft: -30, marginTop:-20, color:"#787A7D"}}>I use large text</span>
                </label>
                </div>
                <div className='d-none d-md-flex flex-row justify-content-end'>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                <button className='btn text-bold mx-1' style={{fontWeight:"bold", fontSize:18,color:"white",backgroundColor: "#233BA9"}}>Save Changes</button>
                </div>
                <div className='d-flex d-md-none flex-column align-items-center'>
                <button className='btn w-100' style={{fontWeight:"bold", fontSize:18,backgroundColor: "#233BA9", color:"white"}}>Save Changes</button>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                </div>
              </div>                 
              </div>
              </Tab>
              <Tab eventKey="notifications" title="Notifications">
                <div className='d-flex flex-column p-3'>
                <div className='d-flex flex-row justify-content-between'>
                <div>
                <h6  className='text-bold'  style={{fontSize:18}}>Email Notification</h6>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-5}}>Set which notifications you will like to recieve</p>
                </div>
                <button className='btn btn-white' style={{border: "1px solid #233BA9", color:"#233BA9"}}>Enable All</button>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>Complaint Status</p>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-20}}>Get notified about the status of your complaint</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>News & Update</p>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-20}}>Stay updated we bring you updates and promotions</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>Weekly Newsletter</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>Invoice Reciept</p>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-20}}>Get a copy of your invoice reciept sent to your mail</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div>
                  
                </div>
                <div className='d-flex flex-row justify-content-between mt-md-5 mt-sm-5'>
                <div>
                <h6  className='text-bold'  style={{fontSize:18}}>Push Notification</h6>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-5}}>Set which notifications you will like to recieve</p>
                </div>
                <button className='btn btn-white' style={{border: "1px solid #233BA9", color:"#233BA9"}}>Enable All</button>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>Complaint Status</p>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-20}}>Get notified about the status of your complaint</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>News & Update</p>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-20}}>Stay updated we bring you updates and promotions</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>Weekly Newsletter</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-flex flex-row justify-content-between mt-3'>
                <div>
                <p style={{fontSize:16}}>Invoice Reciept</p>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-20}}>Get a copy of your invoice reciept sent to your mail</p>
                </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className='d-none d-md-flex flex-row justify-content-end mt-5'>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                <button className='btn text-bold mx-1' style={{fontWeight:"bold", fontSize:18,color:"white",backgroundColor: "#233BA9"}}>Save Changes</button>
                </div>
                <div className='d-flex d-md-none flex-column align-items-center'>
                <button className='btn w-100' style={{fontWeight:"bold", fontSize:18,backgroundColor: "#233BA9", color:"white"}}>Save Changes</button>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                </div>
                </div>
                
              </Tab>
              <Tab eventKey="privacy&security" title="Privacy & Security">
                <div className='d-flex flex-column p-3'>
                <div className='d-flex flex-row justify-content-between mt-md-5 mt-sm-5'>
                <div>
                <h6  className='text-bold'  style={{fontSize:18}}>Two Factor Authentication</h6>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-5}}>When enabled your account is protected from from being hacked</p>
                </div>
                <button className='btn btn-white' style={{border: "1px solid #233BA9", color:"#233BA9"}}>Enable All</button>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                <div>
                <h6  className='text-bold'  style={{fontSize:18}}>Password</h6>
                <p className='d-none d-md-flex text-bold' style={{color:"#787A7D", fontSize:14, marginTop:-5}}>To create a new password it must contain a minimun of 12 letters,an uppercase,a number and a character</p>
                </div>
                </div>
                <div className='row mt-4 mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Current Password</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mt-4 mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>New Paasword</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='row mt-4 mb-3'>
                  <div className='col-md-2 col-sm-12' >
                  <label style={{fontSize:16}}>Confirm Password</label>
                  </div>
                  <div className='col-md-10 col-sm-12'>
                  <input className=' form-control'></input>
                  </div>
                </div>
                <div className='d-none d-md-flex flex-row justify-content-end mt-5'>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                <button className='btn text-bold mx-1' style={{fontWeight:"bold", fontSize:18,color:"white",backgroundColor: "#233BA9"}}>Save Changes</button>
                </div>
                <div className='d-flex d-md-none flex-column align-items-center mt-3'>
                <button className='btn w-100' style={{fontWeight:"bold", fontSize:18,backgroundColor: "#233BA9", color:"white"}}>Save Changes</button>
                <button className='btn btn-white' style={{fontSize:18,color: "#233BA9"}}>Discard</button>
                </div>
                </div>
              </Tab>
            </Tabs>
            </div> */}
          </div>
        </div>
      <Outlet />
      </>
    );
  }
}


export default Home;
