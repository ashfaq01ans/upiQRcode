import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CodeGenerator from "./Components/CodeGenerator";

function App() {
  const [upiId, setupiId] = useState("");
  const [name, setName] = useState("Upi user");
  const [amt, setAmt] = useState("");
  const [particulars, setParticulars] = useState(`thanks for shopping with us`);
  const [linkWithData, setlinkWithData] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidUpi) {
      toast.error("Invalid UPI ID ");
      return;
    }

    if (!isValidAmount) {
      toast.error("Amount must be ≥ 1 ");
      return;
    }

    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amt}&cu=INR&tn=${encodeURIComponent(particulars)}`;
    setlinkWithData(upiLink);
    setIsSubmitted(true);
  };

  const validateForm = (upiId, amt) => {
    const cleanUpi = upiId.trim();
    const isValidUpi = /^[\w.-]+@[\w.-]+$/.test(cleanUpi);

    const amountNumber = parseFloat(amt);
    const isValidAmount = !isNaN(amountNumber) && amountNumber >= 1;

    return {
      isValid: isValidUpi && isValidAmount,
      isValidUpi,
      isValidAmount,
    };
  };

  const { isValid, isValidUpi, isValidAmount } = validateForm(upiId, amt);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="upi"> UPI ID</label>
        <input
          type="text"
          name="upi"
          value={upiId}
          onChange={(e) => {
            setupiId(e.target.value);
            setlinkWithData("");
            setIsSubmitted(false);
          }}
        />

        <label htmlFor="name"> Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="amt"> Amount</label>
        <input
          type="number"
          name="amt"
          min={"1"}
          step="0.01"
          value={amt}
          onChange={(e) => setAmt(e.target.value)}
        />

        <label htmlFor="name"> Particulars </label>
        <input
          type="text"
          name="particulars"
          value={particulars}
          onChange={(e) => setParticulars(e.target.value)}
        />

        <button type="submit">Generate</button>
      </form>

      <Toaster position="top-center" />
      <CodeGenerator link={linkWithData} />
    </>
  );
}

export default App;

// upi://pay?pa=UPI_ID&pn=NAME&am=AMOUNT&cu=INR
