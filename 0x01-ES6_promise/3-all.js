/* eslint-disable */
import { uploadPhoto, createUser } from '../utils.js';

export default function handleProfileSignup() {
  Promise.all([
    uploadPhoto(),
    createUser(),
  ]).then((messages) => {
    console.log(`${messages[1].firstName} ${messages[1].lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}