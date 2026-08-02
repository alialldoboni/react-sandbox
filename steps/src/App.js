const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 3;
  return (
    <div className="steps">
      hello react
      <div className="numbers">
        <div className={`step ${step === 1 ? "active" : ""}`}>1</div>
        <div className={`step ${step === 2 ? "active" : ""}`}>2</div>
        <div className={`step ${step === 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">{messages[step - 1]}</p>
      <div className="buttons">
        <button style={{ backgroundColor: "#790054af", color: "#ffffffff" }}>
          prev
        </button>
        <button style={{ backgroundColor: "#790054af", color: "#ffffffff" }}>
          next
        </button>
      </div>
    </div>
  );
}
