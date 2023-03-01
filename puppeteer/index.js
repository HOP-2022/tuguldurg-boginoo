const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com/");
  await page.setViewport({ width: 1080, height: 1024 });

  await page.click("#search-input");
  await page.keyboard.type("vandebo");

  //   const searchResultSelector = "$search-icon-legacy";
  await page.keyboard.press("Enter");
  //   const selector = await page.waitForSelector(searchResultSelector);
  //   console.log(searchResultSelector, "1");
  //   const res = await page.click(searchResultSelector);
  await page.click("#video-title");
  setTimeout(() => {
    page.screenshot({ path: "./ss/example.png" });
  }, 5000);
})();
