// Code goes here

var app= angular.module('app',[]);
app.controller("MainController", function($scope) { 
      $scope.name="angular"; 
      $scope.user ="bhavya";
      $scope.id = {
          name:"Angular Class",  
                day:"wed",  
                friends:[   
                              'Angular2',   
                               'Javascript',    
                               'Typescript' 
                               ] ,
                members:['aishu','bhavya','aakash']
                            }           
                         }); 
                         
                         
   app.directive('userInfoCard', function(){  
     return{  
     //template:"User Info card", 
     
     templateUrl: "new.html"                                                                        
    restrict:"E"  
     //If you want element than E if attribute than A c:class, Ecomment     
   }});