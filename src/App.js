import React from 'react';
import './App.css';
import p5 from 'p5';

function App() {

  let sketch = p => {
    p.setup = () => {
      p.createCanvas(700, 410);
      p.background(0);
      p.stroke(0, 0, 0, 15);
    };

    p.draw = () => {
      if (p.mouseIsPressed) {
        p.stroke(255);
      } else {
        p.stroke(237, 34, 93);
      }
      p.line(p.mouseX - 66, p.mouseY, p.mouseX + 66, p.mouseY);
      p.line(p.mouseX, p.mouseY - 66, p.mouseX, p.mouseY + 66);
    };
  };

  let sketch2 = p => {
    p.setup = () => {
      p.createCanvas(720, 400);
      p.noStroke();
      p.rectMode(p.CENTER);
    };

    p.draw = () => {
      p.background(230);

      let r1 = p.map(p.mouseX, 0, p.width, 0, p.height);
      let r2 = p.height - r1;

      p.fill(237, 34, 93, r1);
      p.rect(p.width / 2 + r1 / 2, p.height / 2, r1, r1);

      p.fill(237, 34, 93, r2);
      p.rect(p.width / 2 - r2 / 2, p.height / 2, r2, r2);
    };
  };

  new p5(sketch);
  new p5(sketch2);

  return (
    <div className="App">
    </div>
  );
}

export default App;
