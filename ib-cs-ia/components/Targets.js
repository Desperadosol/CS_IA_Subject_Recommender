import { updateUserTargets } from "@/lib/client";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "@/lib/context";

import { defaultSubjects } from "@/templates/userTemplate";


export default function Targets() {
  const { user, username } = useContext(UserContext);

  const countSubjectsInGroup = (subjects, groupName) => subjects.filter(subject => subject.group === groupName).length;
  const giveNamesForGroup = (subjects, groupName) => subjects.filter(subject => subject.group === groupName).map(subject => subject.name);

  const [group1, setGroup1] = useState(Array(countSubjectsInGroup(defaultSubjects, 'group1')).fill(0).map((v, i) => i === 0 ? 1 : v)); 
  const [group2, setGroup2] = useState(Array(countSubjectsInGroup(defaultSubjects, 'group2')).fill(0).map((v, i) => i === 0 ? 1 : v)); 
  const [group3, setGroup3] = useState(Array(countSubjectsInGroup(defaultSubjects, 'group3')).fill(0).map((v, i) => i === 0 ? 1 : v)); 
  const [group4, setGroup4] = useState(Array(countSubjectsInGroup(defaultSubjects, 'group4')).fill(0).map((v, i) => i === 0 ? 1 : v)); 
  const [group5, setGroup5] = useState(Array(countSubjectsInGroup(defaultSubjects, 'group5')).fill(0).map((v, i) => i === 0 ? 1 : v)); 

  const [selectedValues, setSelectedValues] = useState([...group1, ...group2, ...group3, ...group4, ...group5]);
  const [error, setError] = useState(true);

  useEffect(() => {
    setSelectedValues([...group1, ...group2, ...group3, ...group4, ...group5]);
    if ((group1[0] + group2[0] != 2) && group1.reduce((a,b) => a + b, 0) === 1 && group2.some(option => option === 1) && group3.some(option => option === 1) && group4.some(option => option === 1) && group5.reduce((a,b) => a + b, 0) === 1 && selectedValues.reduce((a,b) => a + b, 0) === 6) {
      setError(false);
    } else {
      setError(true);
    }
  }, [group1, group2, group3, group4, group5, selectedValues] );

  function onSubmit(event) {
    event.preventDefault();

    updateUserTargets(user.uid, selectedValues);
  }

  return (
    <form onSubmit={onSubmit} className="m-4">
      <div className="row">
        <div className="col-md-4 border-end border-2 text-center">
          <div className="mb-3">
            <h4>Studies in language and literature</h4>
          </div>
          <CheckboxGroup
            options={giveNamesForGroup(defaultSubjects, 'group1')}
            groupName="group1"
            stateHook={[group1, setGroup1]}
          />
        </div>
        <div className="col-md-4 border-end border-2 text-center">
          <div className="mb-3">
            <h4>Language Acquisition</h4>
          </div>
          <CheckboxGroup
            options={giveNamesForGroup(defaultSubjects, 'group2')}
            groupName="group2"
            stateHook={[group2, setGroup2]}
          />
        </div>
        <div className="col-md-4 text-center">
          <div className="mb-3">
            <h4>Individuals and Societies</h4>
          </div>
          <CheckboxGroup
            options={giveNamesForGroup(defaultSubjects, 'group3')}
            groupName="group3"
            stateHook={[group3, setGroup3]}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4 border-end border-2 text-center">
          <div className="mb-3">
            <h4>Experimental Sciences</h4>
          </div>
          <CheckboxGroup
            options={giveNamesForGroup(defaultSubjects, 'group4')}
            groupName="group4"
            stateHook={[group4, setGroup4]}
          />
        </div>
        <div className="col-md-4 border-end border-2 text-center">
          <div className="mb-3">
            <h4>Mathematical Studies</h4>
          </div>
          <CheckboxGroup
            options={giveNamesForGroup(defaultSubjects, 'group5')}
            groupName="group5"
            stateHook={[group5, setGroup5]}
          />
        </div>
      </div>

      <div className="mt-3 text-center">
        <button type="submit" className="btn btn-outline-success btn-lg" disabled={error}>
          Submit
        </button>
      </div>
    </form>
  );
}

function CheckboxGroup({options, groupName, stateHook}) {
  const [selectedOption, setSelectedOption] = stateHook;
 
  function onChangeValue(event) {
    const index = options.indexOf(event.target.value);
    let newState = [...selectedOption];
    newState[index] = newState[index] === 1 ? 0 : 1;
    setSelectedOption(newState);
  }
 
  return (
    <div onChange={onChangeValue} className="d-flex flex-column align-items-center">
      {options.map((option, index) => 
        <div key={option}>
           <label style={{width: "250px"}} className={`btn btn-lg m-1 ${selectedOption[index] === 1 ? 'btn-dark' : 'btn-outline-dark'}`}> <input type="checkbox" value={option} name={groupName} checked={selectedOption[index] === 1} onChange={onChangeValue} className="btn-check"/> {option} </label>
        </div>
      )}
    </div>
  );
 }
