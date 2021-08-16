const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        userDataDir: './cache/chrome-dir',
        executablePath: 'google-chrome-stable',
    });
    const page = await browser.newPage();
    await page.goto('https://google.com.ua');
})();
