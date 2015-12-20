angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.articleTitle = '极大极小值算法理解&井字棋javascript实现';
  $scope.articleAuthor = '张章';
  $scope.authorLink = "http://www.siida.cn/"
  $scope.articleTag = '人工智能';
  $scope.articleContent = '这是一个有趣的东西还<a href="good.html">fffff</a>不能换行，能换\n杭吗';

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
