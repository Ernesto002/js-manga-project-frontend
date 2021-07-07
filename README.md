# The Manga Index

Welcome to The Manga Index! With this application you can find information on any piece of Manga you find on our home page. If you can't find a particular series
on our page then feel free to add your own. This also applies to the volumes within any series as well!

# Installation

Clone this repository by entering
```bash
git clone git@github.com:Ernesto002/js-manga-project-frontend.git
```
into your terminal

Then clone the back-end portion of the app by entering
```bash
git clone git@github.com:Ernesto002/js-manga-project-api.git
```
into your terminal

# Usage

Once you've cloned both repositories, open up the back-end file then run
```bash
rake db:migrate
rake db:seed
```
into your terminal to seed the database

Then run 
```bash
rails s
```
into your terminal to start running the API in order for the app to function.

Then open the front-end file and run
```bash
explorer.exe index.html
```
into your terminal for windows

OR

```bash
open index.html
```
into your terminal for mac in order to use the app.

# Back end repository

The back-end file for this app can be found [here](https://github.com/Ernesto002/js-manga-project-api)
