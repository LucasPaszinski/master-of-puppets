const puppeteer = require( 'puppeteer' )

console.log( "Master of Puppets" )

async function begin( headless, from_currency, to_currency )
{

    const browser = await puppeteer.launch( { headless: headless } )
    const page = await browser.newPage();

    await page.goto( `https://www.google.com/search?q=${ from_currency }+para+${ to_currency }&oq=${ from_currency }+para+${ to_currency }&aqs=chrome.0.0j69i57j0j0i10i433j0l4.2937j1j4&sourceid=chrome&ie=UTF-8` )
    //await page.screenshot( { path: 'example.png' } );

    const result = await page.evaluate( () => document.getElementsByClassName( "a61j6 vk_gy vk_sh Hg3mWc" )[ 0 ].value )
    //await browser.close()
    console.log( `o valor de 1 ${ from_currency } é  ${ result } ${ to_currency }` )
}

begin( false, "dollar", "real" )