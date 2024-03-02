import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormsUncontrolled";
import StateDemo from "./exercises/StateDemo";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffectDemo";
import FetchDemo1 from "./exercises/FetchDemo1";
import LiftingState from "./exercises/LiftingState";
import ContextDemo from "./exercises/ContextDemo";


export default function App() {
  const [selectedView, setSelectedView] = useState("info");


  function handleSelected(selected: string) {
    setSelectedView(selected);
  }


  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "props1" ? <PropsDemo title="Props Demo"/> : null}
            {selectedView == "list" ? <ListDemo title="List Demo" /> : null}
            {selectedView == "event" ? <EventDemo title="Event Demo"/> : null}
            {selectedView == "forms" ? <FormUncontrolled title="Forms Uncontrolled Demo"/> : null}
            {selectedView == "state" ? <StateDemo title="State Demo"/> : null}
            {selectedView == "state2" ? <StateDemo2 title="State Demo 2"/> : null}
            {selectedView == "state3" ? <StateDemo3 title="State Demo 3"/> : null}
            {selectedView == "useeffect" ? <UseEffectDemo title="Use Effect"/> : null}
            {selectedView == "fetch" ? <FetchDemo1 title="Fetch Demo"/> : null}
            {selectedView == "lift" ? <LiftingState title="Lifting State Demo"/> : null}
            {selectedView == "context" ? <ContextDemo title="Context Demo"/> : null}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("list")}>
        List demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("event")}>
        Event demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("forms")}>
        Forms Uncontrolled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state")}>
        State Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state2")}>
        State Demo 2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state3")}>
        State Demo 3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("useeffect")}>
        Use Effect Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("fetch")}>
        Fetch Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("lift")}>
        Lifting State Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("context")}>
        Context Demo
      </button>
    </>
  );
};
