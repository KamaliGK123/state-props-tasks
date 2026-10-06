function RegistrationSummary({
  name,
  email,
  phone,
  city,
  gender,
  terms
}) {
  return (
    <div className="card p-4">
      <h2 className="mb-4 ">Registration Summary</h2> <br></br>
      <div className="w-75 mx-auto text-start">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p>
        <strong>Terms:</strong>{" "}
        {terms ? "Accepted" : "Not Accepted"}
      </p>
      </div>
    </div>
  );
}

export default RegistrationSummary;