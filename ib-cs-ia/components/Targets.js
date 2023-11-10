import { updateUserTargets } from "@/lib/client";
import { useState } from "react";

export default function Targets() {
    const [targets, setTargets] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // Adjust the initial state based on the number of checkboxes
  
    const handleCheckboxChange = (event, index) => {
      const newTargets = [...targets];
      newTargets[index] = event.target.checked ? 1 : 0;
      setTargets(newTargets);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Call a function to update the user in Firestore (see step 2)
      updateUserTargets("1", targets);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="checkbox" id="target1" name="target1" onChange={(e) => handleCheckboxChange(e, 0)} /> Target 1<br/>
        <input type="checkbox" id="target2" name="target2" onChange={(e) => handleCheckboxChange(e, 1)} /> Target 2<br/>
        <input type="checkbox" id="target3" name="target3" onChange={(e) => handleCheckboxChange(e, 2)} /> Target 3<br/>
        <input type="checkbox" id="target4" name="target4" onChange={(e) => handleCheckboxChange(e, 3)} /> Target 4<br/>
        <input type="checkbox" id="target5" name="target5" onChange={(e) => handleCheckboxChange(e, 4)} /> Target 5<br/>
        <input type="checkbox" id="target6" name="target6" onChange={(e) => handleCheckboxChange(e, 5)} /> Target 6<br/>
        <input type="checkbox" id="target7" name="target7" onChange={(e) => handleCheckboxChange(e, 6)} /> Target 7<br/>
        <input type="checkbox" id="target8" name="target8" onChange={(e) => handleCheckboxChange(e, 7)} /> Target 8<br/>
        <input type="checkbox" id="target9" name="target9" onChange={(e) => handleCheckboxChange(e, 8)} /> Target 9<br/>
        <input type="checkbox" id="target10" name="target10" onChange={(e) => handleCheckboxChange(e, 9)} /> Target 10<br/>
        <input type="checkbox" id="target11" name="target11" onChange={(e) => handleCheckboxChange(e, 10)} /> Target 11<br/>
        <input type="checkbox" id="target12" name="target12" onChange={(e) => handleCheckboxChange(e, 11)} /> Target 12<br/>
        <input type="checkbox" id="target13" name="target13" onChange={(e) => handleCheckboxChange(e, 12)} /> Target 13<br/>
        <input type="checkbox" id="target14" name="target14" onChange={(e) => handleCheckboxChange(e, 13)} /> Target 14<br/>
        <input type="checkbox" id="target15" name="target15" onChange={(e) => handleCheckboxChange(e, 14)} /> Target 15<br/>
        <input type="checkbox" id="target16" name="target16" onChange={(e) => handleCheckboxChange(e, 15)} /> Target 16<br/>
        <input type="checkbox" id="target17" name="target17" onChange={(e) => handleCheckboxChange(e, 16)} /> Target 17<br/>
        <input type="submit" value="Submit"/>
      </form>
    );
}
  