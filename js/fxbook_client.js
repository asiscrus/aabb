class FxBookClient {
    constructor(login, password) {
        this.login = login
        this.password = password;
        this.prefix = 'https://www.myfxbook.com/api/'
        let session;
        const response = fetch(`${this.prefix}login.json?email=${this.login}&password=${this.password}`,
            {
                mode: 'cors'
            }).then(response => {
            return response.json()
        }).then(data => {
            session = data.session
        })
        this.session = session;
    }

    getGains(id, startDate, endDate){
        let dailyGains;
        fetch(`${this.prefix}get-daily-gain.json?session=${this.session}&id=${id}&start=${startDate}}&end=${endDate}}`,
            {
                mode: 'cors'
            })
            .then((response) => response.json())
            .then((json) => {
                dailyGains = json
            })
        return dailyGains;
    }


}

export default FxBookClient