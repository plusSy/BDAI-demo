let https = require('https');
let querystring = require('querystring');
let fs = require('fs');
let access_token = '24.a1ba8a9cc0795fb025e7bf1a01dddf7b.2592000.1557642764.282335-15778700';

function recgonize (source) {
  let image = fs.readFileSync(source).toString("base64");
  let postData  = querystring.stringify({ image, recognize_granularity: 'big' });

  let options = {
    hostname: 'aip.baidubce.com',
    path: `/rest/2.0/ocr/v1/accurate?access_token=${access_token}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };  
  
  options.agent = new https.Agent(options);
  // return new Promise()
  const req = https.request(options, (res) => {
    console.log('All OK. Server matched our pinned cert or public key');
    console.log('statusCode:', res.statusCode);
    // Print the HPKP values
    // res.headers['response-type'] = 'json';
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
    res.on('data', (d) => {
      // process.stdout.write(d)
      console.log('*****', d);
    });
  });
  
  req.on('error', (e) => {
    console.error(e.message);
  });

  req.write(encodeURI(postData));
  req.end();

}

recgonize('../result/img/48rg.png')