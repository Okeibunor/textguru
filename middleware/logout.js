import firebase from "firebase";


export default function ({ redirect }) {
  firebase.auth().signOut().then(() => {
    console.log("Sign Out successful")
  }).catch((error) => {
    console.log(error)
  });
}

