import { useState } from "react";
import gif from "./assets/cute.gif"

export default function ValentineApp() {
  const [yesSize, setYesSize] = useState(16);
  const [message, setMessage] = useState("");
  const [newTitle, setNewTitle] = useState(0);
  const [showNewTitle, setShowNewTitle] = useState(false);
  const [trick, setTrick] = useState(false);
  const titles = [
    "Wait what are you doing?",
    "BBs why dont you wanna be my valetine...",
    "Okay no seriously wtf",
    "No pls 🥹",
    "You're hurting my feelings",
    "But I made you this cute app",
    "Its not even funny anymore",
    "This is the last time I do anyting cute, you suck",
    "Fine, I dont care",
    "Fuck I thought that would work",
    "You literally have to click it eventually",
    "pls",
    "plssss",
    "PLS",
    "PLSSSSS!!!!!!!!",
  ];

  const no = () => {
    if (!showNewTitle) {
      setShowNewTitle(true);
    } else {
      setNewTitle((prev) => prev + 1);
    }
    setYesSize(yesSize + 50);
    if (newTitle === 7) {
      setTrick(true);
    }
  };

  const trickWorked = () => {
    setTrick(false);
    setMessage(
      "HAHA tricked you! Now you have to be my valetine hehehehehehe!"
    );
  };

  const trickFailed = () => {
    setTrick(false);
    setNewTitle((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#ffccd5",
        textAlign: "center",
      }}
    >
      {message ? (
        <>
          <h1
            style={{ fontSize: "2rem", fontWeight: "bold", color: "#d32f2f" }}
          >
            {message}
          </h1>
          <img src={gif} alt="" />
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#d32f2f",
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <div>Dinner Reservation:</div>
            <div>Fri, Feburary 14, 2025, 6:00pm</div>
            <div>Ramie Vietnamese Cuisine</div>
            <div>5 course meal!</div>
            <a href="https://www.exploretock.com/ramie/experience/528740/valentines-day-tasting-dinner?date=2025-02-14&size=2&time=20%3A00">
              If you want to see menu
            </a>
            <div>If you no like I find us new one</div>
          </div>
        </>
      ) : (
        <>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#d32f2f",
              marginBottom: "1rem",
            }}
          >
            {showNewTitle ? titles[newTitle] : "Will you be my Valentine? 💖"}
          </h1>
          {trick ? (
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <button
                style={{
                  backgroundColor: "#d32f2f",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  fontSize: yesSize,
                  cursor: "pointer",
                }}
                onClick={trickFailed}
              >
                No
              </button>
              <button
                style={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
                onClick={trickWorked}
              >
                Yes
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <button
                style={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  transition: "all 0.2s",
                  fontSize: yesSize,
                  cursor: "pointer",
                }}
                onClick={() => setMessage("Yay! I love you! ❤️")}
              >
                Yes
              </button>
              <button
                style={{
                  backgroundColor: "#d32f2f",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={no}
              >
                No
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
