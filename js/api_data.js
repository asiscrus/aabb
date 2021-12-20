const { MyfxbookApi } = require('myfxbook-api-client');
const client = new MyfxbookApi({ email: 'asiscrus.muratyazici@gmail.com', password: '53575357My' });

client
    .getDailyGain(9315996, '2021-11-10', '2021-12-02')
    .then(data => {
        console.log(data.dailyGain);
    })
    .catch(error => {
        console.log('error', error);
    });
