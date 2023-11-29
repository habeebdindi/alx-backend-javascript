import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
    try {
	const userPic = await uploadPhoto();
	const user = await createUser();
	return {
	    photo: userPic,
	    user: user,
	};
    } catch (error) {
	return {
	    photo: null,
	    user: null,
	};
    }
}
