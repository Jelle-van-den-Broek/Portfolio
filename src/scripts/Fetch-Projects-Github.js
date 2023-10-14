const accessToken = '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';
const username = 'Jelle-van-den-Broek';
const apiUrl = `https://api.github.com/repos/Jelle-van-den-Broek/Portfolio/projects`;

fetch(apiUrl, {
    headers: {
        Authorization: `token ${accessToken}`
    }
})
    .then(response => {
        console.log('Rate Limit Limit:', response.headers.get('X-RateLimit-Limit'));
        console.log('Rate Limit Remaining:', response.headers.get('X-RateLimit-Remaining'));
        console.log('Rate Limit Reset Time:', new Date(response.headers.get('X-RateLimit-Reset') * 1000));
        if (response.ok) {
            return response.json();
        } else {
            console.error(`Failed to fetch data. Status: ${response.status}`);
            return response.text();
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error fetching data:', error));
