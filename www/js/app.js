// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngStorage', 'starter.controllers'])

//service factory
.factory ('StorageService', function ($localStorage) {
  $localStorage = $localStorage.$default ({
    dogs: [{
    id : 0,
    "name" : "Burke and Dexter",
    "text" : "Here we have Burke (pupper) and Dexter (doggo). Pupper wants to be exactly like doggo. Both 12/10 would pet at same time",
    "rating" : 12,
    "rts" : 2572,
    "likes" : 9798,
    "img" : [{"filename":"1"}],
    "date" : "12:29 AM - 12 Dec 2016",
    "url" : "https://twitter.com/dog_rates/status/808106460588765185",
    "favourite" : false,
  },
  {
    id : 1,
    "name" : "Milo",
    "text" : "This is Milo. I would do terrible things for Milo. 13/10",
    "rating" : 13,
    "rts" : 7100,
    "likes" : 27719,
    "img" : [{"filename":"2"}],
    "date" : "8:58 PM - 22 Nov 2016",
    "url" : "https://twitter.com/dog_rates/status/801167903437357056",
    "favourite" : false,
  },
  {
    id : 2,
    "name" : "Ito",
    "text" : "This is Ito. He'll be your uber driver tonight. Currently adjusting the mirrors. 13/10 incredibly h*ckin responsible",
    "rating" : 13,
    "rts" : 3607,
    "likes" : 11386,
    "img" : [{"filename":"3"}],
    "date" : "12:57 AM - 14 Dec 2016",
    "url" : "https://twitter.com/dog_rates/status/808838249661788160",
    "favourite" : false,
  },
  {
    id : 3,
    "name" : "Wallace",
    "text" : "This is Wallace. You said you brushed your teeth but he checked your toothbrush and it was bone dry. 11/10 not pupset, just disappointed",
    "rating" : 11,
    "rts" : 4108,
    "likes" : 14826,
    "img" : [{"filename":"4"}],
    "date" : "5:16 PM - 14 Dec 2016",
    "url" : "https://twitter.com/dog_rates/status/809084759137812480",
    "favourite" : false,
  },
  {
    id : 4,
    "name" : "Maximus",
    "text" : "This is Maximus. His face is stuck like that. Tragic really. Great tongue tho. 12/10 would pet firmly",
    "rating" : 12,
    "rts" : 5828,
    "likes" : 19151,
    "img" : [{"filename":"5"},{"filename":"5-1"}],
    "date" : "11:45 PM - 2 Nov 2016",
    "url" : "https://twitter.com/dog_rates/status/793962221541933056",
    "favourite" : false,
  },
  {
    id : 5,
    "name" : "Phil",
    "text" : "This is Phil. He's a father. A very good father too. 13/10 everybody loves Phil",
    "rating" : 13,
    "rts" : 13558,
    "likes" : 39720,
    "img" : [{"filename":"6"}, {"filename":"6-1"}],
    "date" : "12:43 AM - 18 Dec 2016",
    "url" : "https://twitter.com/dog_rates/status/810284430598270976",
    "favourite" : false,
  },
  {
    id : 6,
    "name" : "Hunter",
    "text" : "This is Hunter. He just found out he needs braces. Requesting an orthodogtist stat. 11/10 you're fine Hunter, everything's fine",
    "rating" : 11,
    "rts" : 2137,
    "likes" : 10189,
    "img" : [{"filename":"7"},{"filename":"7-1"},{"filename":"7-2"}],
    "date" : "5:14 PM - 19 Dec 2016",
    "url" : "https://twitter.com/dog_rates/status/810896069567610880",
    "favourite" : false,
  },
  {
    id : 7,
    "name" : "Craig",
    "text" : "This is Craig. That's actually a normal sized fence he's stuck on. H*ckin massive pupper. 11/10 someone help him",
    "rating" : "11",
    "rts" : "7621",
    "likes" : "23601",
    "img" : [{"filename":"8"}],
    "date" : "1:44 AM - 21 Dec 2016",
    "url" : "https://twitter.com/dog_rates/status/811386762094317568",
    "favourite" : false,
  },
  {
    id : 8,
    "name" : "Eleanor",
    "text" : "This is Eleanor. She winks like she knows many things that you don't. 12/10",
    "rating" : 12,
    "rts" : 2270,
    "likes" : 10478,
    "img" : [{"filename":"9"}],
    "date" : "12:00 AM - 26 Dec 2016",
    "url" : "https://twitter.com/dog_rates/status/813172488309972993",
    "favourite" : false,
  },
  {
    id : 9,
    "name" : "Chubbs",
    "text" : "This is Chubbs. He dug a hole and now he's stuck in it. Dang h*ckin doggo. 11/10 would assist",
    "rating" : 11,
    "rts" : 2233,
    "likes" : 10455,
    "img" : [{"filename":"10"}],
    "date" : "12:52 AM - 28 Dec 2016",
    "url" : "https://twitter.com/dog_rates/status/813910438903693312",
    "favourite" : false,
  },
  {
    id : 10,
    "name" : "Bruce",
    "text" : "This is Bruce. He never backs down from a challenge. 11/10 you got this Bruce",
    "rating" : 11,
    "rts" : 3801,
    "likes" : 14233,
    "img" : [{"filename":"11"}],
    "date" : "8:42 PM - 23 Oct 2016",
    "url" : "https://twitter.com/dog_rates/status/790277117346975746",
    "favourite" : false,
  },
  {
    id : 11,
    "name" : "Oshie",
    "text" : "This is Oshie. He's ready to party. Bought that case himself. 12/10 someone tell Oshie it's Wednesday morning",
    "rating" : 12,
    "rts" : 10307,
    "likes" : 32340,
    "img" : [{"filename":"12"}],
    "date" : "4:56 PM - 28 Dec 2016",
    "url" : "https://twitter.com/dog_rates/status/814153002265309185",
    "favourite" : false,
  },
  {
    id : 12,
    "name" : "Levi",
    "text" : "Say hello to Levi. He's a Madagascan Butterbop. One of the more docile Butterbops I've seen. 12/10 would give all the pets",
    "rating" : 12,
    "rts" : 4895,
    "likes" : 14848,
    "img" : [{"filename":"13"},{"filename":"13-1"},{"filename":"13-2"},{"filename":"13-3"}],
    "date" : "11:31 PM - 26 Oct 2016",
    "url" : "https://twitter.com/dog_rates/status/791406955684368384",
    "favourite" : false,
  },
  {
    id : 13,
    "name" : "Dudley",
    "text" : "This is Dudley. He found a flower and now he's a queen. 11/10 would be an honor to pet",
    "rating" : 11,
    "rts" : 2314,
    "likes" : 9643,
    "img" : [{"filename":"14"}],
    "date" : "5:33 PM - 3 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/816336735214911488",
    "favourite" : false,
  },
  {
    id : 14,
    "name" : "Betty",
    "text" : "This is Betty. She's assisting with the dishes. Such a good puppo. 12/10 h*ckin helpful af",
    "rating" : 12,
    "rts" : 5619,
    "likes" : 18822,
    "img" : [{"filename":"15"}],
    "date" : "5:00 PM - 25 Oct 2016",
    "url" : "https://twitter.com/dog_rates/status/790946055508652032",
    "favourite" : false,
  },
  {
    id : 15,
    "name" : "Tebow",
    "text" : "This is Tebow. He kindly requests that you put down the coffee and play with him. 13/10 such a good boy",
    "rating" : 13,
    "rts" : 2375,
    "likes" : 9777,
    "img" : [{"filename":"16"}],
    "date" : "12:49 AM - 6 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/817171292965273600",
    "favourite" : false,
  },
  {
    id : 16,
    "name" : "Finn",
    "text" : "This is Finn. He's wondering if you come here often. Fr*ckin flirtatious af. 12/10 would give number to",
    "rating" : 12,
    "rts" : 7924,
    "likes" : 25936,
    "img" : [{"filename":"17"}],
    "date" : "5:01 PM - 11 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/819227688460238848",
    "favourite" : false,
  },
  {
    id : 17,
    "name" : "Duchess",
    "text" : "This is Duchess. She uses dark doggo forces to levitate her toys. 13/10 magical af",
    "rating" : 13,
    "rts" : 1923,
    "likes" : 9415,
    "img" : [{"filename":"18"}],
    "date" : "5:07 PM - 18 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/821765923262631936",
    "favourite" : false,
  },
  {
    id : 18,
    "name" : "Hercules",
    "text" : "Meet Hercules. He can have whatever he wants for the rest of eternity. 12/10 would snug passionately",
    "rating" : 12,
    "rts" : 3922,
    "likes" : 13704,
    "img" : [{"filename":"19"}],
    "date" : "3:53 AM - 27 Sep 2016",
    "url" : "https://twitter.com/dog_rates/status/780601303617732608",
    "favourite" : false,
  },
  {
    id : 19,
    "name" : "Jimison",
    "text" : "This is Jimison. He was just called a good boy. 13/10",
    "rating" : 13,
    "rts" : 2752,
    "likes" : 12719,
    "img" : [{"filename":"20"}],
    "date" : "1:04 AM - 19 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/821886076407029760",
    "favourite" : false,
  },
  {
    id : 20,
    "name" : "Mattie",
    "text" : "This is Mattie. She's extremely dangerous. Will bite your h*ckin finger right off. Still 11/10 would pet with caution",
    "rating" : 11,
    "rts" : 5682,
    "likes" : 17403,
    "img" : [{"filename":"21"}],
    "date" : "4:55 PM - 12 Oct 2016",
    "url" : "https://twitter.com/dog_rates/status/786233965241827333",
    "favourite" : false,
  },
  {
    id : 21,
    "name" : "Hobbes",
    "text" : "This is Hobbes. He was told he was going to the park. Ended up at the vet. H*ckin bamboozled. Quite pupset with you. 12/10",
    "rating" : 12,
    "rts" : 2686,
    "likes" : 14726,
    "img" : [{"filename":"22"}],
    "date" : "5:31 PM - 21 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/822859134160621569",
    "favourite" : false,
  },
  {
    id : 22,
    "name" : "Dillon",
    "text" : "We only rate dogs. Please don't send pics of men capturing low level clouds. Thank you… 11/10",
    "rating" : 11,
    "rts" : 11668,
    "likes" : 39246,
    "img" : [{"filename":"23"}],
    "date" : "12:50 AM - 20 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/822244816520155136",
    "favourite" : false,
  },
  {
    id : 23,
    "name" : "Crawford",
    "text" : "This is Crawford. He's quite h*ckin good at the selfies. Nose is incredibly boopable. 11/10 would snapchat",
    "rating" : 11,
    "rts" : 3098,
    "likes" : 14531,
    "img" : [{"filename":"24"}],
    "date" : "5:20 PM - 23 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/823581115634085888",
    "favourite" : false,
  },
  {
    id : 24,
    "name" : "Winston",
    "text" : "This is Winston. The goggles make him a superhero. Protects the entire city from criminals unless they rub his belly really well. 12/10",
    "rating" : 12,
    "rts" : 2657,
    "likes" : 12889,
    "img" : [{"filename":"25"}],
    "date" : "1:08 AM - 24 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/823699002998870016",
    "favourite" : false,
  },
  {
    id : 25,
    "name" : "Cash",
    "text" : "This is Cash. He's officially given pup on today. 12/10 frighteningly relatable",
    "rating" : 12,
    "rts" : 3190,
    "likes" : 11884,
    "img" : [{"filename":"26"}],
    "date" : "5:04 PM - 24 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/823939628516474880",
    "favourite" : false,
  },
  {
    id : 26,
    "name" : "Toby",
    "text" : "This is Toby. He just found out you only pretend to throw the ball sometimes. H*ckin puppalled. 12/10 would console",
    "rating" : 12,
    "rts" : 2908,
    "likes" : 14159,
    "img" : [{"filename":"27"},{"filename":"27-1"}],
    "date" : "10:15 PM - 29 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/825829644528148480",
    "favourite" : false,
  },
  {
    id : 27,
    "name" : "Mo",
    "text" : "This is Mo. No one will push him around in the grocery cart. He's quite pupset about it. 11/10 I volunteer",
    "rating" : 11,
    "rts" : 2178,
    "likes" : 11619,
    "img" : [{"filename":"28"}],
    "date" : "1:21 AM - 30 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/825876512159186944",
    "favourite" : false,
  },
  {
    id : 28,
    "name" : "Ike",
    "text" : "This is Ike. He's demonstrating the pupmost restraint. 13/10 super good boy",
    "rating" : 13,
    "rts" : 3605,
    "likes" : 17134,
    "img" : [{"filename":"29"}],
    "date" : "5:10 PM - 30 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/826115272272650244",
    "favourite" : false,
  },
  {
    id : 29,
    "name" : "Pilot",
    "text" : "This is Pilot. He has mastered the synchronized head tilt and sneaky tongue slip. Usually not unlocked until later doggo days. 12/10",
    "rating" : 12,
    "rts" : 4925,
    "likes" : 20499,
    "img" : [{"filename":"30"}],
    "date" : "5:06 PM - 31 Jan 2017",
    "url" : "https://twitter.com/dog_rates/status/826115272272650244",
    "favourite" : false,
  },
  {
    id : 30,
    "name" : "Bronte",
    "text" : "This is Bronte. She's fairly h*ckin aerodynamic. Also patiently waiting for mom to make her a main character. 13/10 would be an honor to pet",
    "rating" : 13,
    "rts" : 3701,
    "likes" : 22810,
    "img" : [{"filename":"31"},{"filename":"31-1"}],
    "date" : "5:00 PM - 20 Feb 2017",
    "url" : "https://twitter.com/dog_rates/status/833722901757046785",
    "favourite" : false,
  },]
  });

  var _getAll = function() {
    return $localStorage.dogs;
  };

  return {
      getAll: _getAll
  };

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    
  })

  .state('app.favourites', {
    url: '/favourites',
    views: {
      'menuContent': {
        templateUrl: 'templates/favourites.html',
        controller: 'dogsCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
          controller: 'dogsCtrl'
        }
      }
    })
    .state('app.dogs', {
      url: '/dogs',
      views: {
        'menuContent': {
          templateUrl: 'templates/dogs.html',
          controller: 'dogsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/dogs/:dogId',
    views: {
      'menuContent': {
        templateUrl: 'templates/dog.html',
        controller: 'dogsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dogs');
});
