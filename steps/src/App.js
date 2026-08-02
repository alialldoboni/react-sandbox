export default function App() {
  return (
    <div className="steps">
      hello react
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className="message">hello</p>
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
