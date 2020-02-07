# _Galactic Age Calculator_

#### _Description 
Calculate a user's age and life expectancy on each planet.
, Feb 2020_

#### By _**kwicz**_

## Description

_This application allows a user to input their current age and select a planet to see what their age on that planet would be.  Additionally, a user may also answer questions regarding their lifestyle to calculate their life expectancy on Earth and then select a planet to see what their estimated life expectancy would be on that respective planet._

## Project Specifications

|Behavior|Input|Output|
|---|:---:|:---:|
|User inputs earth age|--|error|
||24|24|
|User selects planet|--|error|
||Earth|Earth age|
||Mercury|Earth age / .24|
||Venus|Earth age / .62|
||Mars|Earth age / 1.88|
||Jupiter|Earth age / 11.86|
|User answers lifestyle questions|lifestyle data|Estimated years of life left|
||data + Mercury|remaining Earth years / .24| 
||data + Venus|rremaining Earth years / .62|
||data + Mars|remaining Earth years / 1.88|
||data + Jupiter|remaining Earth years / 11.86|
|Lifestyle questions indicate the user is past estimated life expectancy|lifestyle data|# of years past estimated end of life|
||data + Mercury|Earth years / .24|
||data + Venus|Earth years / .62|
||data + Mars|Earth years / 1.88|
||data + Jupiter|Earth years / 11.86|


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
* jQuery
* Webpack
* Node.js
* Jest

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Kwicz_**