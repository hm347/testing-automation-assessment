# testing-automation-assessment
Testing automation assessment

# Requirements
node >= 15.0.0

test done with node v16.13.0

## Installation
npm install

# Info
Project 'wdio-chromedriver-service' is a devDepencencie used to manage chromeDriver (start/stop) automatically.

# Run test
npx wdio run ./wdio.conf.js

or

npm run wdio

# Run a specific test
npx wdio run ./wdio.conf.js --spec scenario1.e2e.js
