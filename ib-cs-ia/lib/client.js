import axios from 'axios';
import { getUser, updateUser } from './firestore_interface.js';


export async function updateUserRecommendations(uid) {
  const data = await getUser(uid);
  // console.log(data)

  const response = await axios.post('http://127.0.0.1:5000/api/prediction', data);
  // code

  data.recommendations = response.data.recommendations;
  data.subjects = response.data.subjects;

  updateUser(uid, data)
}

export async function updateUserTargets(uid, targets) {
  const data = await getUser(uid);
  data.targets = targets
  updateUser(uid, data)
}

export async function updateUserSample(uid) {
  const data = await getUser(uid);
  
  const response = await axios.post('http://127.0.0.1:5000/api/sample', data);

  data.sample = response.data.sample;

  updateUser(uid, data);
}

export async function trainModelWithUserChoice(uid) {
  const data = await getUser(uid);
  // console.log(data)

  const response = await axios.post('http://127.0.0.1:5000/api/train', data);
  // console.log(response.data);

}

