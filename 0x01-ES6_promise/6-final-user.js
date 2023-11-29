/* eslint-disable */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
    let retArray = []
    return Promise.allSettled([
	signUpUser(firstName, lastName),
	uploadPhoto(fileName)
    ]).then((messages) => {
	retArray.push(messages);
	return retArray.flat();
    });
};
