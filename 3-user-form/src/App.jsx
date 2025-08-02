import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zip: "",
        gender: "",
    });

    const handleFormDataChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    // useEffect(() => {
    //     for (let key in formData) {
    //         console.log(`${key}: ${formData[key]}`);
    //     }
    // }, [formData]);

    return (
        <>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleFormDataChange}
                />
                <br />
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleFormDataChange}
                />
                <br />
                <label htmlFor="age">Age</label>
                <input
                    name="age"
                    value={formData.age}
                    placeholder="Age"
                    onChange={handleFormDataChange}
                />
                <br />
                <input
                    name="phone"
                    value={formData.phone}
                    placeholder="Phone"
                    onChange={handleFormDataChange}
                />
                <br />
                <input
                    name="address"
                    value={formData.address}
                    placeholder="Address"
                    onChange={handleFormDataChange}
                />
                <br />
                <input
                    name="city"
                    value={formData.city}
                    placeholder="City"
                    onChange={handleFormDataChange}
                />
                <br />
                <input
                    name="state"
                    value={formData.state}
                    placeholder="State"
                    onChange={handleFormDataChange}
                />
                <br />
                <input
                    name="country"
                    value={formData.country}
                    placeholder="Country"
                    onChange={handleFormDataChange}
                />
                <br />
                <input
                    name="zip"
                    value={formData.zip}
                    placeholder="ZIP Code"
                    onChange={handleFormDataChange}
                />
                <br />
                <input
                    name="gender"
                    value={formData.gender}
                    placeholder="Gender"
                    onChange={handleFormDataChange}
                />
                <br />
            </div>

            <div>
                <h1>DATA</h1>
                <ul className="list-group list-group-flush">
                    {Object.keys(formData).map((key) => (
                        <li
                            className="list-group-item"
                            aria-current="true"
                            key={key}
                        >
                            {`${key.toUpperCase()}: `} {<input name={key} value={formData[key]} placeholder={key} readOnly/>}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
