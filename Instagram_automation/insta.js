const puppeteer = require("puppeteer");
const id = "test_automation_1";
const pw = "anish123456";
const instalink = "https://www.instagram.com/";
const usernames = ["mahi7781" , "virat.kohli" , "rishabpant" , "rohitsharma45" , "shikhardofficial"];

(async function(){
    let browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized"],
      executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      slowMo: 10,
    })
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto(instalink);
    await tab.waitForTimeout(2000);
    await tab.type('input[aria-label="Phone number, username, or email"]' , id , {delay: 50});
    await tab.type('input[aria-label="Password"]' , pw , {delay: 50});
    await tab.click('.sqdOP.L3NKy.y3zKF');
    await tab.waitForTimeout(5000);
    for(let i = 0; i < usernames.length; i++){
      await tab.click(".eyXLr.wUAXj ");
      await tab.type(".XTCLo.x3qfX" , usernames[i] , {delay: 50});
      await tab.waitForTimeout(2000);
      let link = instalink + usernames[i];
      await tab.goto(link);
      await tab.waitForTimeout(2000);
      let allpicks = await tab.$$(".FFVAD");
      let req = allpicks[0];
      await req.click();
      await tab.waitForTimeout(2000);
      for(let j = 0; j < 10; j++){
        await tab.waitForTimeout(2000);
        let heart = await tab.$$('button.wpO6b');
        let req_heart = heart[2];
        // await tab.waitForTimeout(3000);
        await req_heart.click();
        await tab.waitForTimeout(2000);
        await tab.click('a.coreSpriteRightPaginationArrow');
        await tab.waitForTimeout(2000);
        if(j == 9){
            let cross = heart[31];
            await cross.click()
            await tab.click('svg[aria-label="Home"]');
        }
      }
    } 
  })();