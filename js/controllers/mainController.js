app.controller('mainController', function($scope, $window) {
    var map;

    $scope.show = false; //hides the ul list using the directive ng-show.

    //shows the items of list using the directive ng-show.
    $scope.showFirstItem = true; 
    $scope.showSecodItem = true;
    $scope.showThirdItem = true;
    $scope.showFourthItem = true;

    $scope.latitude = 14.546460505379892;

    $scope.longitude = -90.41483581066132;

    $scope.zoom = 15;

    /*This list stores information of the markers*/
    var favPlaces = [
            {
                name: "Iglesia Antigua",
                id: "IglesiaAntigua",
                position: {A: 14.548927558114249, F: -90.41677303612232},
                image: "images/iglesiaAntigua.jpg",
                info: "It declared a Cultural Heritage in 2003, according to Ministerial Agreement 410-2003, it is an artistic expression of the Hispanic era of the eighteenth century in article one of that agreement Cultural Heritage statement is made. The agreement is the Ministry of Culture and Sports. It opened on November 30, 1914."
            },
            {
                name: "Mercado Municipal",
                id: "MercadoMunicipal",
                position: {A: 14.543704591199763,F: -90.41093923151493},
                image: "images/mercado.jpg",
                info: "The inauguration took place on 15 January 2006 Special events attended by Government officials, some Deputies, among other invited guests to the effect, besides the Market Tenants Committee, City Council and numerous public in the population and villages with their COCODES."
            },
            {
                name: "Torre Municipal",
                id: "TorreMunicipal",
                position: {A: 14.54636444488951, F: -90.41487336158752},
                image: "images/Torre.jpg",
                info: "This was a gift from President Lazaro Chacon at the suggestion of his wife, in gratitude for the hospitality and appreciation that the people gave them, because they resided in the Municipal Head in the 1930s. It was inaugurated on March 19, 1928 together with Municipal Tank located in the village of San Miguel zone 3, by the president of the republic and his wife."
            },
            {
                name: "Estadio San Miguel",
                id: "EstadioSanMiguel",
                position: {A: 14.540228819027814,F: -90.4067824780941},
                image: "images/estadio.jpg",
                info: "The stadium will be used for sports training of young and second-division team to promote sport around the city and to different sports activities. The grass used in the project is monofilamneto with midrib, heat resistant fiber produced TENCATE height of 63 mm was manufactured in the United States with European technology and technical specifications."
            }
        ];


    $scope.places = favPlaces;

    /*'Latlong' objects. They will be used to center the map to perform a search.*/
    $scope.coordsAntigua = new google.maps.LatLng(favPlaces[0].position.A, favPlaces[0].position.F);
    $scope.coordsMercado = new google.maps.LatLng(favPlaces[1].position.A, favPlaces[1].position.F);
    $scope.coordsTorre = new google.maps.LatLng(favPlaces[2].position.A, favPlaces[2].position.F);
    $scope.coordsEstadio = new google.maps.LatLng(favPlaces[3].position.A, favPlaces[3].position.F);

    //This function shows and hides the search bar.
    $scope.showSearchBar = function() {
        $(".searcher").fadeToggle( "slow", "linear" );
    };

    //This function adds the value of the list, the input.
    $scope.addValue = function(value) {
        $("#autocomplete").val(value);
        $scope.NoShowList();
    }

    //This function adds the information to the modal
    $scope.showInfo = function(empty, title) {
        $scope.place = title;
        if (title === "Iglesia Antigua") {
            $scope.image = favPlaces[0].image;
            $scope.info = favPlaces[0].info;
        }
        else if (title === "Mercado Municipal") {
            $scope.image = favPlaces[1].image;
            $scope.info = favPlaces[1].info;
        }
        else if (title === "Torre Municipal") {
            $scope.image = favPlaces[2].image;
            $scope.info = favPlaces[2].info;
        }
        else if(title === "Estadio San Miguel") {
            $scope.image = favPlaces[3].image;
            $scope.info = favPlaces[3].info;
        };
        $('.modal').modal('show');
    };


    /*This function displays the items in the list, only if the string matches.*/
    $scope.showItem = function(place) {
        place = place.toLowerCase();

        if ("iglesia antigua".indexOf(place) != -1) {
            $scope.showFirstItem = true;
        } else {
            $scope.showFirstItem = false;
        };

        if ("mercado municipal".indexOf(place) != -1) {
            $scope.showSecodItem = true;
        } else {
            $scope.showSecodItem = false;
        };

        if ("torre municipal".indexOf(place) != -1) {
            $scope.showThirdItem = true;
        } else {
            $scope.showThirdItem = false;
        };

        if ("estadio san miguel".indexOf(place) != -1) {
            $scope.showFourthItem = true;
        } else {
            $scope.showFourthItem = false;
        };
    };

    //shows the ul element
    $scope.showList = function() {
        $scope.show = true;
    };

    //hides the ul element
    $scope.NoShowList = function() {
        $scope.show = false;
    };

    /*This function sends the user to the requesting marker*/
    $scope.goTo = function() {
        var placeToGo = $("#autocomplete").val();

        placeToGo = placeToGo.toLowerCase();

        if (placeToGo === "iglesia antigua") {
            $scope.map.setZoom(18);
            $scope.map.setCenter($scope.coordsAntigua);
        }
        else if (placeToGo === "mercado municipal") {
            $scope.map.setZoom(18);
            $scope.map.setCenter($scope.coordsMercado);
        }
        else if (placeToGo === "torre municipal") {
            $scope.map.setZoom(18);
            $scope.map.setCenter($scope.coordsTorre);
        }
        else if(placeToGo === "estadio san miguel") {
            $scope.map.setZoom(18);
            $scope.map.setCenter($scope.coordsEstadio);
        };
        $scope.NoShowList();
    };
});
