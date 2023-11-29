/* eslint-disable */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
    const retArray = []
    return Promise.allSettled([
	signUpUser(firstName, lastName),
	uploadPhoto(fileName)
    ]).then((messages) => {
	messages.map((message) => {
	    retArray.push({
		status: message.status,
		value: message.status === "rejected" ? message.reason.toString() : message.value
	    });
	});
	return retArray;
    });
};
