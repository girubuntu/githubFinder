class Github {
    constructor() {
        this.client_id = '345183e542bc6ca9e82e';
        this.client_secret = '7ccdfeb1e0a8d08f94816df538d0b44e97660a73';

    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}