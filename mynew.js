// Code goes here
var app= angular.module('app',[]);
app.controller("MainController", function($scope) { 
      $scope.name ="Angular"; 
      $scope.user ="Sri Bhavya";
      $scope.id = {
          name1:"Angular Class",  
                day:"wed",  
                frameworks:[   
                              'Angular',   
                               'Javascript',    
                               'sublime' 
                               ] ,
                members:['aishu','bhavya','aakash']
                            }           
                         }); 
                         
                         
   app.directive("userInfoCard", function(){  
     return{  
     restrict:"E" ,
     templateUrl: "new.html"                                                                      
     
      };
  });