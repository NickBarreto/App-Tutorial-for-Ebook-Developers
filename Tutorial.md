# Building an app with HTML, CSS and Javascript

##Introduction

We're going to be building a cross platform Android and iOS app with HTML, CSS and Javascript together, but before we get started I want to point out that this is very rough code written very simply originally in front of a live audience. I'm a self-taught programmer and I am absolutely certain there are better, more efficient ways of doing a lot of what we do here today. But the reason for this tutorial isn't about specifics of great code, as this will most definitely sloppy and largely uncommentted, but what I'm hoping to do is to demistify the process, get you comfortable enough to try it for yourself. I think this kind of development work can be incredibly useful for publishers, and most of you in this room will already have the skills you need to do it, or can pick them up very easily. 

Since my main hope for the original talk was that people would go away and try this for themselves, and that must be the reason you’re reading this, let’s get to it. 

## Dependencies and installation

Before we get started you'll need to install all of the necessary libraries and dependencies, as explained in this [article](http://www.booknetcanada.ca/blog/2017/1/26/all-the-tools-you-need-to-take-your-skills-beyond-ebooks). It covers everything you need to get started, which are mainly requirements for installing the Ionic Framework. [Ionic](http://ionicframework.com) is an open source framework that allows you to build cross platform apps using HTML, CSS and Javascript. It provides you with a lot of scaffolding and using the Angular.js library to give you the tools you need to create a great app.

You don't necessarily need to download this whole github repository to do the tutorial. With the tools installed, can just download the [Starter Data](Starter Data) folder only and get cracking if you want.

## Getting started

Once you've got everything installed, the first thing you need to do is create a new folder where you're going be working. You probably downloaded the code to the finished app, but at the end of this you'll have your own version of it in whatever directory you create now.

If you don't really mind where it goes, just open up your terminal and work there. By default that should be in your user's home folder on your Mac. Otherwise, create the folder and use `cd` to move to that directory in your terminal.

The first command we'll run is this:

`ionic start example_app sidemenu`

This creates a new ionic app using the template 'sidemenu', in the directory with the name 'example_app'. You'll notice this is different from the name in the repo, and that is deliberate so you can tell them apart more easily.

Let's move into the directory we created.

`cd example_app`

Take a look at the file structure ionic created. The main ones we're going to be concerned with is `www`. This is where all the code that gets executed in the app lives.

The directories within `www` are pretty self-explanatory. CSS, IMG, JS and index.html, which is the base html file for the app. It's this file that determines what the app shows on startup. Since we used a template, it isn't blank, there's some stuff in there already. Let's take a look at it in a moment. First, let's see what that template actually looks like by default.

Let's run:

`ionic serve`

This will open the app in your browser. It's very useful for testing that everything is working as intended, and it shows you what your current code is doing and will refresh for any changes you make. You'll see there are some of views which you can select on the left menu. If we look at the `app.js` file, we'll see how those are defined. 

At the bottom of that file, we can see a default is set for when the app starts up. That's 'playlists'. 

## Making it our own

All this is fine, especially as a starting point, but this isn't the app we want to make. Let's use some more interesting data. Like, say, DOGS.

We have some data prepped for us to use in the `Starter Data` folder.
They are some entries from [@dog_rates](http://www.twitter.com/dog_rates/) I've written up in JSON.

JSON stands for JavaScript Object Notation. It's a pretty flexible and simple way of holding data in JavaScript, essentially consisting of key:value pairs.

Let's take a look at the entires we've got in `Starer Data/dog_rates.json`. They're in an array, which is denoted by the square bracket at the top. Here's a key:value pair: "name":"Burke".

You can see a simple example of an array in the entry with id "5". Instead of just one value for 'img', it has two, so the square bracket is used to denote an array, and there are two values in there.

JSON three basic data types: strings, which are the ones you can see in double quotes; numbers, which are any floating point numerals; and boolean, which can be either true or false. We're using all there here as you can see. Strings in the 'name' entries, vales in the 'rating' and boolean in the 'favourite'.

So let's input this data into our app. Copy data and paste everything from dog_rates.json to controllers.js, replacing the playlist data that is in there.

Oh look, we broke something! Welcome to being a programmer.

In this case, it was because the default app was displaying in the list the value with the key "title", but our dog_rates data doesn't have any data with that key.

If we look at 'playlists.html', we can see that at work.

Let's change fix it, shall we? `{{playlist.title}}` becomes `{{playlist.name}}`

Horray, now we can see the names from our data in a list. But this data and it's array name aren't very descriptive anymore, so let's make some updates.

It's also a good time to look at a `for` statement looks like in Angular.

In that playlists.html file, we have `ng-repeat="playlist in playlists"`. That's iterating through the `playlist` items in the `playlist` array, and presenting, for each one the playlist `name`. 

But these aren't playlists. They're dogs. Let's call them that.

Find and replace `playlist` for `dog` in app.js, controllers.js, `menu.html`, `playlists.html`, and `playlist.html`. Now we need to rename the playlists.html and playlist.html files to dogs.html and dog.html.

If you've done this right, the app should be back up and running once you rename those files correctly. If not, you're going to need to debug this it bit and see what you missed or if you made a typo.

Anyway: we're getting there. But dog.html doesn't show us any information!

## Accessing data in templates

We've done this a little bit already, but how do we access data within the scope we're in? We access values based on their key, and we do this using curly brackets.

Let's take a look at dog.html. It doesn't show us anything dynamic at all right now – everything is hard coded into the html. First, let's show the name of the entry rather than just 'Dog' in an `h1` element.

We need to access the specific instances of `dog` in the `dogs` array. We do this in with square brackets, which allow access specific items in an array. The count starts at 0, so `dogs[1]` is the first item in the array, `dogs[1]` the second, and so on. The value of specific keys can be accessed using dot notation. So `{{dogs[0].name}}` will print the 'name' value of the first dog in the array. 

That's fine, but what we actually want isn't for every dog page to have the same dog name, we want the name of the specific dog we're looking at. 

Let's move our data into a variable so it's easier to access.

So `$scope.dogs =` with our dog data, we're going to cut the data out.

Above it, still inside the controller, write: `var dogs = ` and paste in the dog data, including the square brackets.

Now change it so `$scope.dogs = dogs`, our variable that we just created.

Let's add `$stateParams` in to the controller's function, so we can access the url of which page we are in.

`.controller('dogsCtrl', function($scope, $stateParams) {`

Now, we can write

`$scope.specificDog = dogs[$stateParams.dogId];`

Let's take a look at the app again and make sure we didn't break anything. Again, if it's running you're good, but if you made a mistake somewhere you'll just see a blank space instead of your app in the browser tab that opened with `ionic serve`

## Building our views

So now we can start building this view out a bit more. This is just HTML, like you're used to.

Let's add the text below the name.

`<h1>{{specificDog.name}}</h1>
<p>{{specificDog.text}}</p>`

We have photos of these dogs though. That's sort of the whole point, right?

First, we'll need to place the images we need in the www/img directory so we can access them. Copy and paste them over from `Starter Data/images` Now, we can access them directly. `<img src="/img/{{specificDog.img}}.jpg" alt=""/>`

But wait! What if we have more than one image? It's going to break, because specificDog.img will return an array under and not a single image path. We'll get to accessing all of them in a moment. For now, let's just always grab the first one.

`<img src="/img/{{specificDog.img[0]}}.jpg" alt=""/>`

Look at those dogs in the app! Awwww.

If we look at some of the later entries, though, we'll see that we introduced a bug when we wrote `<img src="/img/{{specificDog.img[0]}}.jpg" alt=""/>`.

That's because when it doesn't find an array in the 'img' value, it treats the string as an array, and returns just the first character. So we're getting the wrong picutre. 

Let's actually test for the presence of an array, and do different things if we need to, shall we? 

We can use 'ng-repeat' to show as many as there are.

`<div ng-repeat="img in specificDog.img"><img src="img/{{img.filename}}.jpg" alt=""/></div>`

Let's take another look at these images, this time simulating what most phone screens look like. We do this by appending `--lab` to our `ionic serve` command in the terminal. This shows approximates two phone screens side by side, showing you both iOS and Android versions of your app.

`ionic serve --lab`

Hmmm. Looks like the images aren't resizing at all. Let's fix that with some CSS.

There is already a file linked to these views which we can place our CSS. It's sitting empty in the /css directory, so let's add something in there.

/css/style.css – `h1 {text-align:center;}img{max-width:100%;}`

That's better! 

## Adding other views

So let's build some alternate views. The 'Browse', 'Search' and 'Login' pages we got by default don't really apply, but I think it might be useful to list dogs based on ratings, as well as changing this default one to being alphabetical.

These two views are going to be almost identical to how 'dogs.html' looks like now, but we're going to use Angular's `orderBy` function.

Let's also get rid of those views that were in the menu that we're not using.

In menu.html, delete 'login'.

In controllers.js, delete the AppCtrl controller entirely, from 

`.controller('AppCtrl', function($scope, $ionicModal, $timeout) {`

to just above `.controller('dogsCtrl', function($scope, $stateParams) {`

In App.js, delete `controller: 'AppCtrl'` from the 'app' state.

I'm going to move stuff around so 'dogs' is at the top of the menu. And I want to call it 'Alphabetical Dogs'. This change is made in `menu.html` in the templates folder.

We can change the ng-repeat line in 'dogs.html' to
`<ion-item ng-repeat="dog in dogs | orderBy:'name'" href="#/app/dogs/{{dog.id}}">`

They're listed aphabetically now. Let's change the page title to 'Aphabetical Dogs'

Now, let's change 'browse' in the menu to 'Best Rated Dogs'.

In browse.html, let's copy over everything that was in dogs.html. But we'll change the orderBy to 'rating'.

It's not quite working, is it? We need to add a controller to that view.

In app.js, in the 'browse' state, add a comma after the template, and then `controller: 'dogsCtrl'`.

Let's make things a little prettier in the detail view. Ionic has some built in scaffolding, a lot like Bootstrap for the web.

In dog.html:

```
<ion-view view-title="Dog">
  <ion-content>
    
  <div class="list card">
    <div class="item item-avatar">
    	<img src="img/avatar.jpg" alt=""/>
    	<h2>{{specificDog.name}}</h2>
    	<p>{{specificDog.rating}}/10</p>
	</div>
	<div class="item item-body">
		<p>{{specificDog.text}}</p>
    	<div ng-repeat="img in specificDog.img"><img class="full-image" src="img/{{img.filename}}.jpg" alt=""/></div>
    	<p>{{specificDog.rts}} Retweets {{specificDog.likes}} Likes</p>
    </div>
  </ion-content>
</ion-view>
```

## Adding interactivity and persistent data

So far so presentational. Let's introduce a 'favourites' function, so you can easily get back to the best dogs. 

Because ionic apps are essentailly running on a browser, we can use an angular package for writing to local storate to make sure our favourites are persistent between closing the app and openting it up again.

While we could write to localstorage using Javascript only, this package makes life easy allowing us to use dot notation to access data, rather than having to parse JSON and stringify it when saving. To install it, we're going to run

`bower install ngstorage`

Now we need to add the library to the app, by including this line in the index.html file:

`<script src="lib/ngstorage/ngStorage.min.js"></script>`

Now we need to inject it into the app, in app.js:

`angular.module('starter', ['ionic', 'starter.controllers', 'ngStorage'])`

So everything should hopefully still be running at this point. Let's create a service for storing data, because it'll make things a lot easier to manage.

In the apps.js file, just below the module, let's add this factory.

```
// create a new factory
.factory ('StorageService', function ($localStorage) {
  $localStorage = $localStorage.$default({
    dogs: []
  });
var _getAll = function () {
  return $localStorage.dogs;
};

return {
    getAll: _getAll
  };
})`
```

Now move the dogs data from controller.js into the empty square brackets of dogs.

Now, in controller.js, make these changes: 

```
var dogs = StorageService.getAll();

  $scope.dogs = dogs;

  $scope.specificDog = dogs[$stateParams.dogId];`
```

Now we can save data and it will persist between usages! Which is great for making a list of favourites, for instance.

Let's add a button to make a favourite. In `dog.html`:

`<button class="button button-positive" ng-click="specificDog.favourite = 'true'">Favourite</button>`

Now let's make a view to see just our favourites.

We already have a 'search' view that we're not using, so let's change that rather than making a whole new one.

In menu.html: search becomes 'Favourites'.

In search.html, the file is the same as dogs.html, but we use a `filter`, instead of `orderBy`, so that only dogs that match those criteria are shown.

`<ion-item ng-repeat="dog in dogs | filter:{favourite:true}" href="#/app/dogs/{{dog.id}}">`

The name of this template doesn't make any sense anymore. Let's rename it 'favourites.html', and update our references to it in `app.js`, while also updating the name of the state. The 'search' state becomes:

```
  .state('app.favourites', {
    url: '/favourites',
    views: {
      'menuContent': {
        templateUrl: 'templates/favourites.html',
        controller: 'dogsCtrl'
      }
    }
  })
```

## 'If' statements in Angular.js

This is good, but you can't tell if a dog has been favourited yet, nor can you remove the favourite should you change your mind. This is where if statements come in handy. In Angular, these are called using the `ng-if` attribute in an element. Let's change the code for the button around so that it shows you a 'favourite' button if you haven't favourited a dog yet, and an 'unfavourite' button if you have.

We need to add the `ng-if` attribute to the first button, so it looks like this:

`<button ng-if="specificDog.favourite == false" class="button button-postive" ng-click="specificDog.favourite = true">Favourite</button>`

Notice that this uses a double equals rather than a single one – the equals here is a comparison operator, rather than an assignment operator that you have in `ng-click`, which sets the value of a variable, rather than testing what it is. If `specificDog.favourite` equals true, then `specificDog.favourite == false` is a false statement. The code within the element with the `ng-if` will not execute and won't appear at all in the app. Immediately below this button, we can add the unfavourite button, which contains the opposite case:

`<button ng-if="specificDog.favourite == true" class="button button-postive" ng-click="specificDog.favourite = false">Unfavourite</button>`

There we go. Now you can set and manage your favourites as you like.

## Testing your app

We've been using `ionic serve` to see how our app is working in a browser, and `ionic serve --lab` to get an idea of how it will look on a phone, but you can also compile and test your app on your own device or on a device simulator on your machine. 

First of all, let's make sure Ionic knows your app is for both Android and iOS. In the terminal, run `ionic platform add android` and `ionic platform add ios`.

To run the app in the iOS simulator, enter into your terminal:

`ionic build ios`  

and then 

`ionic emulate ios`

To install testing apps on iOS devices can be a bit complicated as you have to be signed up as a developer (which costs $99), but trying your app on an Android device is much easier.

Plug in an Android device that has USB Debugging enabled (you turn this on in the settings under Developer Options. If you don't see that option, follow [these steps](https://developer.android.com/studio/debug/dev-options.html)). Then, enter `ionic run android` into the terminal. Your app will open on your device and you can show people what you built.

## Further links

There's a _lot_ more to cover, such as fetching and writing data to a server, rather than localstorage; analytics, which you can get through ionic or roll your own using google analytics; and accessing device features like a camera. We've also barely touched on the further scaffolding for the UI that Ionic provides, but if we go to [http://ionicframework.com/docs/overview/](http://ionicframework.com/docs/overview/) it's a great place to get started. It might also be useful to take a look at how the Angular.js library works, too. Its documentation lives at [http://docs.angularjs.org](http://docs.angularjs.org)

If you have any questions, I am on [twitter/nickbarreto](http://www.twitter.com/nickbarreto) and #eprdctn is always a great place to ask questions as well. Suggestions, improvements or changes to the app as pull requests appreciated and encouraged. I hope you'll be building your own apps soon!