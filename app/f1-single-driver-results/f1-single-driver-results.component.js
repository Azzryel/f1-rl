"use strict";

angular.
    module("f1SingleDriverResults").
    component("f1SingleDriverResults", {
        templateUrl: "f1-single-driver-results/f1-single-driver-results.template.html",
        controller: [ "$http", "$routeParams", function F1Drivf1SingleDriverResultsController($http, $routeParams) {
            console.log("F1 driver results")
            let self = this;

            self.year = $routeParams.year;
            self.driverId = $routeParams.driverId;

            console.log("THIS", this.year)
            console.log("THIS", this.driverId)

            $http.get("https://ergast.com/api/f1/" + self.year + "/drivers/" + self.driverId + "/results.json")
                .then(response => {
                    console.log("DATA",response.data.MRData.RaceTable.Races);
                    self.races = response.data.MRData.RaceTable.Races;
                    self.driver = response.data.MRData.RaceTable.Races[0].Results[0].Driver;
                })
                .catch(err => {
                    console.log("Error", err)
                    self.errorMessage = "Error fetching data";
                });

        }]
    });