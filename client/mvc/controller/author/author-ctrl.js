/**
 * Created by TamDT on 12/20/2017.
 */
app.controller('AuthorCtrl', function ($scope, $modalInstance, $state, $modal,$filter) {

    function init() {
        $scope.title = $filter('translate')('user.title.infor');

    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };



    init();

});