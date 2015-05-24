Learn To Hack 2 Information Page
================================

### Setup
1. Install [bower](http://bower.io)
2. Install Parse command line tool
    
    Mac/Linux: `curl -s https://www.parse.com/downloads/cloud_code/installer.sh | sudo /bin/bash`
    Windows: https://www.parse.com/downloads/windows/console/parse.zip

3. Fill in Parse information in `config/globals.json-starter` and rename to `globals.json`
4. Replace Parse keys at top of `public/js/init.js`
5. In the project root run `bower install`
6. Deploy to Parse server `parse deploy`