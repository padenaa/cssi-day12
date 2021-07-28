let googleUser;

window.onload = (event) => {
    //use this to retain user state between html pages
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            googleUser = user;
        } else {
            window.location = "index.html"; 
        }
    });
};

const getNotes = (userId) =>{
    //get access to all the current user's notes
    const dbRef = firebase.database().ref(`users/${userId}`);
    dbRef.on("value", (snapshot) =>{
        renderData(snapshot.val());
    });
};

const renderData = (data) =>{
    const destination = document.querySelector("#app");
    for (let key in data){
        const note = data[key];
        destination.innerHTML = createCard (note);
    }
};

const createCard = (note) => {
    return `<div class="column is-one-quarter">
                <div class = "card">
                    <header class = "card-header"> 
                        <p> ${note.title} </p>
                    <header>
                    <div class = "card-content"> 
                        <p> ${note.text} </p>
                    <div>
                </div>
            </div> `;
}

