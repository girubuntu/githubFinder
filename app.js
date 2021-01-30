//init github

const github = new Github;
// init uijs
const ui = new UI;

//search input
const SearchUser = document.getElementById('searchUser');
//search input event listener
SearchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;
    //check whether it is empty
    if( userText !==''){
       //make httpcall
       github.getUser(userText)
       .then(data => {
           if(data.profile.message === 'Not Found') {
               //show alert
               ui.showAlert('user not found', 'alert alert-danger');
             console.log(userText); 
           }else {
               //show profile
               ui.showProfile(data.profile);
               
           }
       })
    } else {
        //clear profile
        ui.clearProfile();
    } 
});