import { useState } from "react";
import "./App.css";

function App() {



  const [formData, setFormData] = useState(
    {firstName:"", lastName:"", email:"", country:"india", streetaddress :"", city:"", state:"", pincode:"", comments:false, candidates :false, offers:false, pushNotifications:""}
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
  function submitHandeler(event){
    event.preventDefault();
    console.log("Finally printing the value of form data");
    console.log(formData);
  }



  return (
    <div className="w-full flex flex-col items-center mt-2">
      <form onSubmit={submitHandeler}>
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
        onChange={changeHandeler}
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
        name="streetaddress"
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
        name="state"
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
        value={formData.pincode}
        onChange={changeHandeler}
        className="outline"
        />


      <br></br>
      <br></br>

        <fieldset>
          <legend>By Email</legend>

        <div className="flex">
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

        <div className="flex">
          <input
          id="candidates"
          onChange={changeHandeler}
          name="candidates"
          type="checkbox"
          checked={formData.candidates}
          />
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>
        </div>

        <div className="flex">
          <input
          id="offers"
          onChange={changeHandeler}
          name="offers"
          type="checkbox"
          checked={formData.offers}
          />
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer.</p>
          </div>
        </div>
        </fieldset>

      <br></br>
      <br></br>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          
          <div>
            <input
            type="radio"
            id="everything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandeler}
            />
            <label htmlFor="everything">Everything</label>
          </div>

          <div>
            <input
            type="radio"
            id="sameasemail"
            name="pushNotifications"
            value="Same as email"
            onChange={changeHandeler}
            />
            <label htmlFor="sameasemail">Same as email</label>
          </div>

          <div>
            <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No push notifications"
            onChange={changeHandeler}
            />
            <label htmlFor="pushNothing">No push notifications</label>
          </div>
          
        </fieldset>

      <br></br>
      <br></br>

        <button
        className="bg-blue-500 text-white fontbold rounded-sm py-2 px-4"
        >Save</button>
      </form>
    </div>
  );
}

export default App;
