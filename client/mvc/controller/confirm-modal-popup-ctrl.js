/**
 * Created by Asus on 12/22/2017.
 */
app.controller('ConfirmModalPopupCtrl', function ($scope, $modalInstance, $state, $modal,$filter) {

    function init() {
        $scope.title = $filter('translate')('confirm.title');
        $scope.message = $filter('translate')('confirm.infor');

    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.confirm = function(){
        $modalInstance.close('1');
    }
    $scope.cancel = function(){
        $modalInstance.close('2');
    }


    init();

});