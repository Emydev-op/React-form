import { useState } from "react";

const Form = () => {
    const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];
    const carBrandOptions = carBrands.map((carBrand, key) => (
        <option value={carBrand} key={key}>
          {carBrand}
        </option>
      ));
      
    const [inputState, setInputState] = useState({
        fname : "",
        lname : "",
        message : "",
        carBrand : "",
        isChecked: false,
        gender : "",
        price : 0,
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputState);
      };

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setInputState((inputState) => ({
            ...inputState,
            [e.target.name]: value
        }));
    };
    return (
        <>
            <h1>Controlled Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name: <input type="text" name="fname" value={inputState.fname} onChange={handleChange} />
                </label>
                <label>
                    Last Name: <input type="text" name="lname" value={inputState.lname} onChange={handleChange} />
                </label>
                <label>
                    Your Message: <textarea name="message" value={inputState.message} onChange={handleChange} />
                </label>
                <label>
                    Car brand:
                    <select name="carBrand" value={inputState.carBrand} onChange={handleChange}>
                        <option value={""} disabled> --Pick a car brand-- </option>
                        {carBrandOptions}
                    </select>
                </label>
                <label>
                    <input type="checkbox" name="isChecked" checked={inputState.isChecked} onChange={handleChange} />
                    Is Checked?
                </label>
                <label>
                    <input type="radio" name="gender" value="male" checked={inputState.gender === "male"} onChange={handleChange} />{" "}
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" checked={inputState.gender === "female"} onChange={handleChange} />{" "}
                    Female
                </label>
                <label>
                    Price (between 0 and 50):
                    <input type="range" name="price" min="0" max="50" value={inputState.price} onChange={handleChange} />
                </label>

                <button>Submit</button>
            </form>
            <h5>Full name: {inputState.fname} {inputState.lname}</h5>
            <h5> Your Message: {inputState.message}</h5>
            <h5> What is your Car: {inputState.carBrand}</h5>
            <h5>Have you clicked the checkbox : {inputState.isChecked ? "Yes" : "No"}</h5>
            <h5>Gender : {inputState.gender}</h5>
            <h5>Price : ${inputState.price}</h5>
        </>
    );
};
export default Form;
