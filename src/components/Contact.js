import React from "react"
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
 
function Contact(props) {
  return (
    <Route>
    <div id="section" className="container-fluid">
    <div className="row">
        <div className="col-9 bg-light mt-4 p-3">
            <h1>Contact</h1>
            <hr />

            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="John Smith" />
                  </div>

                <div className="form-group">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                
                
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button>Submit</button>
              </form>

  </div>
  </div>
  </div>
  </Route>
  )
}
 
export default Contact;