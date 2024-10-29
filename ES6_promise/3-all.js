import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let fristName;
  let lastName;

  return uploadPhoto()
  .then((data) => {
    body = data.body;
    createUser()
    .then((data) => {
      fristName = data.fristName;
      lastName = data.lastName;
      console.log('${body} ${firstName} ${lastName}');
    })
    .catch(() => console.log('Signup system offline'));
  })
  .catch(() => console.log('Signup system offline'));
}
