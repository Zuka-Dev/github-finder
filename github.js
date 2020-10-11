class GitHub {
          constructor(){
                    this.clientId = "b0503954419cab528e44";
                    this.clientSecret= "00f5179029e94e1eaa7281fa767050b7f9b87aa6";
                    this.repos_count = 5;
                    this.repos_sort = "created: asc"

          }
          async getUser(user) {
                    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

                    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

                  const profileData = await profileResponse.json();
                  const reposData = await repoResponse.json();
                  
                  return{
                    profile: profileData,
                    repos:reposData
                  }
          }
}
