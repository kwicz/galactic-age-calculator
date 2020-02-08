# _Galactic Age Calculator_

#### _Description 
Calculate a user's age and life expectancy on each planet.
, Feb 2020_

#### By _**kwicz**_

## Description

_This application allows a user to input their current age and select a planet to see what their age on that planet would be.  Additionally, the program will also tell the user how many years away from their estimated life expectancy they would be on that planet._

## Project Specifications

|Behavior|Input|Output|
|---|:---:|:---:|
|User inputs age|--|error|
||"twenty"|error|
|User inputs age under 80|20|60 (years until estimated life expectancy)
|User inputs age over 80|90|10 (years past estimated life expectancy)|
|User selects planet|Mercury|Earth age / .24|
||20|Estimated years left / .24|
||90|Estimated years over / .24|
|User selects planet|Venus|Earth age / .62|
||20|Estimated years left / .62|
||90|Estimated years over / .62|
|User selects planet|Mars|Earth age / 1.88|
||20|Estimated years left / 1.88|
||90|Estimated years over / 1.88|
|User selects planet|Jupiter|Earth age / 11.86|
||20|Estimated years left / 11.86|
||90|Estimated years over / 11.86|

## Setup/Installation Requirements

_In Terminal:_

* Navigate to where you want this application to be saved, i.e.:
```cd desktop```
* Clone the file from GitHub with HTTPS
```git clone https://github.com/kwicz/galactic-age-calculator.git```
* Open file in your preferred text editor
* On Mac: ```open -a {your text editor} galactic-age-calculator```
* On Windows: ```galactic-age-calculator```

_Download Manually:_

* Navigate to https://github.com/kwicz/galactic-age-calculator.
* Click green "Clone or Download" button.
* Click "Download ZIP".
* Click downloaded file to unzip.
* Open folder called "galactic-age-calculator".
* Right click "index.html" and select your preferred browser or text editor.

## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/kwicz/galactic-age-calculator/issues) here on GitHub._

## Technologies Used

* Javascript
* Webpack
* Node.js
* Jest

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Kwicz_**