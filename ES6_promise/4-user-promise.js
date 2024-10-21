export default function signupUser(firstName, lastName) {
  const myPromise = new Promise((resolve) => {
    resolve(
      { firstName, lastName },
    );
  });
  return myPromise;
}
