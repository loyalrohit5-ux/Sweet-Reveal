"use client";
import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      {step === 1 && (
        <div>
          <h2>I want to say something</h2>
          <button onClick={() => setStep(2)}>Continue</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p>Tap on each</p>
          <p>I Love You</p>
          <p>You Are My Heart</p>
          <p>Don't Be Angry</p>
          <button onClick={() => setStep(3)}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <p>
            I'm really sorry. Mera intention kabhi tumhe hurt karna nahi tha.
            Agar meri kisi baat se tumhe bura laga ho to please mujhe maaf kar do.
          </p>
        </div>
      )}
    </div>
  );
}
