/*
 * This file contains several functions that interact with the user's data and the server.
 * It uses the axios library to send HTTP requests and the getUser and updateUser functions from firestore_interface.js to interact with the Firestore database.
 *
 * updateUserAnswers is a function that takes a user's uid and answers, retrieves the user's data, updates the answers field, and saves the updated data.
 *
 * updateUserTargets is a function that takes a user's uid and targets, retrieves the user's data, updates the targets field, and saves the updated data.
 *
 * updateUserRecommendations is a function that takes a user's uid, retrieves the user's data, sends a POST request to the server to get recommendations, updates the recommendations, subjects, and sample fields, and saves the updated data.
 *
 * trainModelWithUserChoice is a function that takes a user's uid, retrieves the user's data, and sends a POST request to the server to train the model with the user's choice.
 */
import axios from 'axios';
import { getUser, updateUser } from './firestore_interface.js';

export async function updateUserAnswers(uid, answers) {
  const data = await getUser(uid);
  data.answers = answers
  updateUser(uid, data)
}

export async function updateUserTargets(uid, targets) {
  const data = await getUser(uid);
  data.targets = targets
  updateUser(uid, data)
}

export async function updateUserRecommendations(uid) {
  const data = await getUser(uid);
  const response = await axios.post('https://servernn-production.up.railway.app/api/prediction', data);
  data.recommendations = response.data.recommendations;
  data.subjects = response.data.subjects;
  data.sample = response.data.sample;
  updateUser(uid, data);
}

export async function trainModelWithUserChoice(uid) {
  const data = await getUser(uid);
  const response = await axios.post('https://servernn-production.up.railway.app/api/train', data);
}