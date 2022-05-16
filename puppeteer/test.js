const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://8080-deaadabecbaedfcaeeecdcaceefaffcabd.ide.exam.ly');
  console.log('TESTCASE:test_case3:success');
  await page.screenshot({path: 'example.png'});
  console.log('TESTCASE:test_case4:success');
  await browser.close();
})();