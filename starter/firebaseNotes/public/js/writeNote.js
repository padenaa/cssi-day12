let googleUser;

window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUser = user;
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
};

const handleNoteSubmit = () => {
    console.log("note submission function called");
    let newtitle = document.querySelector("#noteTitle").nodeValue;
    let newNote = document.querySelector("#noteText").nodeValue;
    // 2. Format the data and write it to our database
    const noteFinal = {
        title: newtitle,
        note: newNote
    };
    // 1. Capture the form data
    
    // 3. Clear the form so that we can write a new note
    document.querySelector("#noteTitle").value = " ";
    document.querySelector("#noteText").value = " "; 

    //4. write the message to the database
    const dbRef = firebase.database().ref(`users/${googleUser.uid}`); //reference to the specific user's path
    dbRef.push(note);
}
