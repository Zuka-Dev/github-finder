//Init GitHub
const github = new GitHub
// init UI
const ui = new UI
//Search User
const searchUser = document.querySelector("#search-user");
//Event listener
searchUser.addEventListener("keyup", (e) => {
          //Get input text
          const userInput = e.target.value;

          if (userInput !== "") {
                    // console.log(userInput);
                    //Http request
                    github.getUser(userInput)
                    .then(data => {
                              if(data.profile.message == "Not Found"){
                                        //Show alert
                                        ui.showAlert("User not Found", "alert alert-danger")
                              }else{
                                        //Show profile
                                        ui.showProfile(data.profile)
                                        ui.showRepos(data.repos)

                              }
                              if (data.profile.message == "Forbidden") {
                                        ui.showAlert("API Request time-out", "alert alert-info")
                              }
                    
                    })

          }else{
                    //Clear Profile
                    ui.clearProfile();
          }
})