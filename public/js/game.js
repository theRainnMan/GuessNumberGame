/**
 * Created by George on 2017/12/7.
 */
var app = angular.module('mainApp', []);

app.controller("mainCtrl", ["$scope", function ($scope) {
    $scope.lowStatus = false;
    $scope.highStatus = false;
    $scope.winStatus = false;
    $scope.currentMin = 0;
    $scope.currentMax = 100;
    $scope.GuessNumber = function (userGuess) {
        $scope.rr = userGuess;
        if(userGuess === $scope.randomNumber){
            $scope.winStatus = true;
            console.log("win");
            $scope.highStatus = false;
            $scope.lowStatus = false;
        }
        else if(userGuess < $scope.randomNumber){
            $scope.highStatus = false;
            $scope.lowStatus = true
            if(userGuess > $scope.currentMin) {
                $scope.currentMin = userGuess;
            }
            console.log("small");
        }
        else {
            $scope.lowStatus = false;
            $scope.highStatus = true
            if(userGuess < $scope.currentMax) {
                $scope.currentMax = userGuess;
            }
            console.log("large");
        }
    }

    $scope.generateNum = function () {
        $scope.randomNumber = Math.floor(Math.random() * 100) + 1;
        $scope.lowStatus = false;
        $scope.highStatus = false;
        $scope.winStatus = false;
        console.log($scope.randomNumber);
    }

    $scope.updaeBar = function () {
        var elem = document.getElementById("myBar")
    }
}]);