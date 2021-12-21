let APIURL = '',

switch (window.location.hostname) {
    case 'localhost' || '192.168.86.1' :
        APIURL = 'http:localhost:3000';
        
        break;

    case 'midwest-tropicals.herokuapp.com/ ' :
        APIURL= 'https://mwt-server.herokuapp.com/'
        break;
}

export default APIURL;