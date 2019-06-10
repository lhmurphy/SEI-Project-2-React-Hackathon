# Project_2: Should I cycle in London today? - Front-End Application - React Hackathon - Partner Project

### Timeframe
1.5 days

## Technologies used
* JavaScript (ES6)
* ReactJS
* HTML5
* git/ gitHub
* CSS
* Bulma

## APIs:
* Darksky weather API
* Transport for London (TFL) API
* Mapbox API

## Installation
1. Clone or download the repo
2. Open the `index.html` in your browser of choice
3. In the terminal run 'npm run serve'

## Overview

London Map of Local Bike Points

Link to our project:
_https://arj8728.github.io/Project_2/#/_

### Introduction

This is our pair programmed React Hackathon that we decided to base on local bike points in London. The user is able to see a one page app that displays the time, two day pollution levels forecast, a selection of bike docks and map displaying these points.

### Process

After a wireframing session we decided to have  a build a React app that is focused on a single page for London Cyclists.

We worked on creating the react component that would bring in the air pollution data from the TFL air quality api to the main page.

Once this was successful we made another component that brought in the bike point data from the TFL api nearest to us.

We then completed the site with by adding in the Mapbox of London into the main site. From this point we had to work out how to calculate the latitudes and longitudes of the corresponding bike points to markers on the mapbox.

By using a componentDidMount on the navigator.geolocation we were able to correctly get the latitudes and longitudes which allowed us to pinpoint local bike points on a map near the user.

### Challenges

 Our main challenge was to get the points on the map to display with accurate data from the bike point TFL data. Once we overcame this we styled the points on the map as we wanted the marker point to display the bike point location as accurately as possible.

### Wins

 On the whole we were please with how the site functioned as one page to allow a bike user to make a decision on whether to cycle based on pollution levels and the availability of nearest bikes points.


### Future features

We would have liked to implement a 5 day weather forecast with weather icons that changed according to the Darksky weather api data. Also to increase the functionality of the map we would allow the user to click on a bike point that displays the information and exact location on the map. 
