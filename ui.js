class UI {
    constructor () {
    this.profile = document.getElementById('profile');
    }
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a>

                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public repos:${user.public_repos}</span>
                    <span class="badge badge-secondary">Public gists:${user.public_gists}</span>
                    <span class="badge badge-success">followers:${user.followers}</span>
                    <span class="badge badge-info">following:${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">company:${user.company}</li>
                        <li class="list-group-item">blog:${user.blog}</li>
                        <li class="list-group-item">location:${user.location}</li>
                        <li class="list-group-item">member since:${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest repos</h3>
        <div class="repos"></div>
        `;
    }
    showAlert(message, className) {
        this.clearAlert();
        //create a div
        const div = document.createElement('div');
        //add classes
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //get tje parent
        const container = document.querySelector('.searchContainer');
        //get search box
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div, search);
        //TIMEout after 3sec
        setTimeout(() => {
            this.clearAlert();
        },3000);

    }
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
    clearProfile() {
        this.profile.innerHTML = '';
    }
}