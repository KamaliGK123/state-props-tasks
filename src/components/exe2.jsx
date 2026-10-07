import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationSummary from "./RegistrationSummary";

function Exe2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(null);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="mb-4">Registration Form</h2>

            <form>
              <label className="form-label text-start d-block">Name</label>
              <input
                type="text"
                className="form-control mb-3 bg-light"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="form-label text-start d-block">Email</label>
              <input
                type="email"
                className="form-control mb-3 bg-light"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="form-label text-start d-block">Phone</label>
              <input
                type="tel"
                className="form-control mb-3 bg-light"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label className="form-label text-start d-block">City</label>
              <input
                type="text"
                className="form-control mb-3 bg-light"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <label className="form-label text-start d-block">Gender</label>
              <select
                className="form-select mb-3 bg-light"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={terms==true}
                  onChange={(e) => setTerms(e.target.checked)}
                />

                <label className="form-check-label">
                  I accept the Terms and Conditions
                </label>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <RegistrationSummary
            name={name}
            email={email}
            phone={phone}
            city={city}
            gender={gender}
            terms={terms}
          />
        </div>

      </div>
    </div>
  );
}

export default Exe2;