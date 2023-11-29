/* eslint-disable */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.allSettled([
	uploadPhoto(fileName),
	signUpUser(firstName, lastName)
    ]).then((messages) => {
	return messages.map((message) => {
	    if (message.status === 'fulfilled') {
		return {
		    status: 'fulfilled',
		    value: message.value
		};
	    } else {
		return {
		    status: 'rejected',
		    value: message.reason
		};
	    }
	});
    });
}
