const fetch = require('node-fetch')
const readline = require('readline');

const getUrl = async (url) => {
    fetch(url).then(response => response.text()).then((data) => {
        const myRegexp = /https:\/\/url.ipeenk.com\/\?code=(.+?)"/g
        let result = data.match(myRegexp)[0]
        result = result.replace('"', '');
        const rgxTitle = /<h1 class="entry-title" itemprop="headline">(.+?)<\/h1>/g
        let resTitle, title = [];
        while (resTitle = rgxTitle.exec(data)) {
            title.push(resTitle[1]);
        }
        console.log('\x1b[32m%s\x1b[0m', `[+] Software Name : ${title[0]}`)
        console.log('\x1b[32m%s\x1b[0m', `[+] Download URL  : ${result}`)
    }).catch((err) => {
        console.log('\x1b[31m%s\x1b[0m', `[-] Check Your URL Again .. `)
    })
}

const start = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })  
    console.log('\x1b[34m%s\x1b[0m', '\n================================================\n')
    console.log('\x1b[34m%s\x1b[0m', 'Ipeenk Ads Bypassser \n')
    console.log('\x1b[34m%s\x1b[0m', 'Coded by Parasit \n')
    console.log('\x1b[34m%s\x1b[0m', '================================================\n')
    rl.question(`\x1b[34mInput URL : `, (url) => {
        console.log('\x1b[32m%s\x1b[0m', '\n[+] Getting URL . . . ')
        getUrl(url);
        rl.close()
    })
}

start()
