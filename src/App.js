import { useState } from "react";
import "./App.css";

function App() {



  const [formData, setFormData] = useState(
    {firstName:"", lastName:"", email:"", country:"india", streetaddress :"", city:"", state:"", pincode:"", comments:false, candidates :false, offers:false}
  )

  function changeHandeler(event){
    const {name, type, checked, value} = event.target;
    setFormData(prevState =>{
      return {
        ...prevState,
        [name] : type === "checkbox"? checked : value
      }
    })
  }



  return (
    <div className="flex flex-col items-center mt-2">
      <form>
        <label htmlFor="firstName">First Name</label>
        <br></br>
        <input
        type="text"
        placeholder="Mayank"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={changeHandeler}
        className="outline"
        />

        <br></br>

        <label htmlFor="lastName">Last Name</label>
        <br></br>
        <input
        type="text"
        placeholder="Pandey"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={changeHandeler}
        className="outline"
        />

        <br></br>

        <label htmlFor="email">E mail</label>
        <br></br>
        <input
        type="text"
        placeholder="immayank7781@gmail.com"
        id="email"
        name="email"
        value={formData.email}
        onChange={changeHandeler}
        className="outline"
        />


        <br></br>

        <label htmlFor="country">Country</label>
        <br></br>
        <select
        id="country"
        name="country"
        value={formData.country}
        className="outline"
        >
          <option value="india">India</option>
          <option value="united states">United States</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>

        <br></br>

        <label htmlFor="address">Street address</label>
        <br></br>
        <input
        type="text"
        placeholder="134 Main St"
        id="streetaddress"
        name="lastName"
        value={formData.streetaddress}
        onChange={changeHandeler}
        className="outline"
        />

        <br></br>

        <label htmlFor="city">City</label>
        <br></br>
        <input
        type="text"
        placeholder="Parayagraj"
        id="city"
        name="city"
        value={formData.city}
        onChange={changeHandeler}
        className="outline"
        />

        <br></br>

        <label htmlFor="state">State/Province</label>
        <br></br>
        <input
        type="text"
        placeholder="134 Main St"
        id="state"
        name="Uttar Pradesh"
        value={formData.state}
        onChange={changeHandeler}
        className="outline"
        />

        <br></br>

        <label htmlFor="pincode">ZIP / Postal Code</label>
        <br></br>
        <input
        type="text"
        placeholder="211019"
        id="pincode"
        name="pincode"
        value={formData.state}
        onChange={changeHandeler}
        className="outline"
        />


        <fieldset>
          <legend>By Email</legend>

        <div className="flex baseline">
          <input
          id="comments"
          onChange={changeHandeler}
          name="comments"
          type="checkbox"
          checked={formData.comments}
          />
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
          </div>
        </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
