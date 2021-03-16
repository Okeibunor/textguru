import firebase from "firebase";

export default function ({ redirect }) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // If the user is not authenticated
      return redirect('/login')
    }
  });

}
