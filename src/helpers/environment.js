let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1' :
        APIURL = 'http:localhost:3000';
        
        break;

    case 'midwest-tropicals.herokuapp.com/' :
        APIURL= 'https://mwt-server.herokuapp.com'
}

export default APIURL;