/**
 * Created by TamDT on 12/12/2017.
 */
app.controller('myCtrl', function ($rootScope, $scope, $translate, $modal) {
    var easing = 1;
    var easing_effect = 'easeOutBounce';
    var animation_speed = 500;

    var slider_width = $('#content').width();//get width automaticly
    var slider_width1 = $('#content1').width();//get width automaticly
    $scope.is_collapsed = true;
    function init() {
        $scope.lstLanguage = [];
        $scope.page = [];
        $scope.lstBtn = [];
        $scope.isFullscreen = false;
        $scope.languageCurrent = {"name": "Tiếng Việt", "icon": "flag-icon flag-icon-vn", "key": "vi"};
        $scope.main = {
            brand: 'Story'
        };

        $scope.lang = 'vi';
        $scope.sizeList = [{value: '10', label: '10'}, {value: '20', label: '20'}, {value: '50', label: '50'}];
        getAllLanguage();
        initPage();
        initButton();
        $scope.images = [
            {
                small: 'image/truyen/Bia.jpg',
                big: 'image/truyen/Bia.jpg'
            }, {
                small: 'image/truyen/1.jpg',
                big: 'image/truyen/1.jpg'
            },
            {
                small: 'image/truyen/2.jpg',
                big: 'image/truyen/2.jpg'
            },
            {
                small: 'image/truyen/3.jpg',
                big: 'image/truyen/3.jpg'
            },
            {
                small: 'image/truyen/4.jpg',
                big: 'image/truyen/4.jpg'
            },
            {
                small: 'image/truyen/6.jpg',
                big: 'image/truyen/6.jpg'
            },
            {
                small: 'image/truyen/7.jpg',
                big: 'image/truyen/7.jpg'
            },
            {
                small: 'image/truyen/8.jpg',
                big: 'image/truyen/8.jpg'
            },
            {
                small: 'image/truyen/9.jpg',
                big: 'image/truyen/9.jpg'
            },
            {
                small: 'image/truyen/10.jpg',
                big: 'image/truyen/10.jpg'
            },
            {
                small: 'image/truyen/11.jpg',
                big: 'image/truyen/11.jpg'
            },
            {
                small: 'image/truyen/12.jpg',
                big: 'image/truyen/12.jpg'
            },
            {
                small: 'image/truyen/13.jpg',
                big: 'image/truyen/13.jpg'
            },
            {
                small: 'image/truyen/14.jpg',
                big: 'image/truyen/14.jpg'
            },
            {
                small: 'image/truyen/15.jpg',
                big: 'image/truyen/15.jpg'
            },
            {
                small: 'image/truyen/16.jpg',
                big: 'image/truyen/16.jpg'
            },
            {
                small: 'image/truyen/17.jpg',
                big: 'image/truyen/17.jpg'
            },
            {
                small: 'image/truyen/18.jpg',
                big: 'image/truyen/18.jpg'
            },
            {
                small: 'image/truyen/19.jpg',
                big: 'image/truyen/19.jpg'
            },
            {
                small: 'image/truyen/20.jpg',
                big: 'image/truyen/20.jpg'
            },
            {
                small: 'image/truyen/21.jpg',
                big: 'image/truyen/21.jpg'
            },
            {
                small: 'image/truyen/22.jpg',
                big: 'image/truyen/22.jpg'
            },
            {
                small: 'image/truyen/23.jpg',
                big: 'image/truyen/23.jpg'
            },
            {
                small: 'image/truyen/24.jpg',
                big: 'image/truyen/24.jpg'
            },
            {
                small: 'image/truyen/25.jpg',
                big: 'image/truyen/25.jpg'
            },
            {
                small: 'image/truyen/26.jpg',
                big: 'image/truyen/26.jpg'
            },
            {
                small: 'image/truyen/27.jpg',
                big: 'image/truyen/27.jpg'
            },
            {
                small: 'image/truyen/28.jpg',
                big: 'image/truyen/28.jpg'
            },
            {
                small: 'image/truyen/29.jpg',
                big: 'image/truyen/29.jpg'
            },
            {
                small: 'image/truyen/30.jpg',
                big: 'image/truyen/30.jpg'
            },
            {
                small: 'image/truyen/31.jpg',
                big: 'image/truyen/31.jpg'
            },
            {
                small: 'image/truyen/32.jpg',
                big: 'image/truyen/32.jpg'
            },
            {
                small: 'image/truyen/33.jpg',
                big: 'image/truyen/33.jpg'
            },
            {
                small: 'image/truyen/34.jpg',
                big: 'image/truyen/34.jpg'
            },
            {
                small: 'image/truyen/35.jpg',
                big: 'image/truyen/35.jpg'
            },
            {
                small: 'image/truyen/36.jpg',
                big: 'image/truyen/36.jpg'
            },
            {
                small: 'image/truyen/37.jpg',
                big: 'image/truyen/37.jpg'
            },
            {
                small: 'image/truyen/38.jpg',
                big: 'image/truyen/38.jpg'
            },
            {
                small: 'image/truyen/39.jpg',
                big: 'image/truyen/39.jpg'
            },
            {
                small: 'image/truyen/40.jpg',
                big: 'image/truyen/40.jpg'
            },
            {
                small: 'image/truyen/41.jpg',
                big: 'image/truyen/41.jpg'
            },
            {
                small: 'image/truyen/42.jpg',
                big: 'image/truyen/42.jpg'
            }
        ];

        $scope.currentIndex = 28;
        $scope.total = $scope.images.length;


        var wrapper = $('#story-content');
        $scope.viewer = ImageViewer(wrapper);
        //$scope.viewer = ImageViewer(wrapper.find('.story-img'));
        $scope.showImage();
    }


    $scope.changeLanguage = function (obj) {
        $translate.use(obj.key);
        $scope.languageCurrent = angular.copy(obj);
    }
    $scope.setCurrentImage = function (index) {
        $scope.currentIndex = index;
        $scope.showImage();
        $scope.showPopup();
    }
    $scope.pickEnd1Choice = function (index) {
        $scope.currentIndex = 29;
        $scope.showImage();
    }
    $scope.pickEnd2Choice = function (index) {
        $scope.currentIndex = 32;
        $scope.showImage();
    }
    function getAllLanguage() {
        $scope.lstLanguage = [
            {"name": "Tiếng Việt", "icon": "flag-icon flag-icon-vn", "key": "vi"},
            {"name": "Tiếng Anh", "icon": "flag-icon flag-icon-gb", "key": "en"},
            {"name": "Tiếng Pháp", "icon": "flag-icon flag-icon-fr", "key": "ph"},
            {"name": "Tiếng Trung", "icon": "flag-icon flag-icon-cn", "key": "tr"},
            {"name": "Tiếng Đức", "icon": "flag-icon flag-icon-de", "key": "d"}
        ]
    }

    function initPage() {
        $scope.page = [
            {"title": "Story1", "url": "abc", "background": "s1.png"},
            {"title": "Story1", "url": "abc", "background": "s1.png"},
            {"title": "Story1", "url": "abc", "background": "s1.png"},
            {"title": "Story1", "url": "abc", "background": "s1.png"},
            {"title": "Story1", "url": "abc", "background": "s1.png"},
            {"title": "Story1", "url": "abc", "background": "s1.png"},
            {"title": "Story1", "url": "abc", "background": "s1.png"},
            {"title": "Story1", "url": "abc", "background": "s1.png"},
            {"title": "Story1", "url": "abc", "background": "s1.png"},
            {"title": "Story1", "url": "abc", "background": "s1.png"}
        ];
    }

    function initButton() {
        $scope.lstBtn = [
            {"icon": "fa fa-book", "value": 1},
            {"icon": "fa fa-expand", "value": 3},
        ];
    }

    $scope.showPopup = function () {
        var detailTemplate = "mvc/view/confirm-modal-popup.html";
        var detailCtrl = 'ConfirmModalPopupCtrl';
        var modalInstance = $modal.open({
            templateUrl: detailTemplate,
            controller: detailCtrl,
            windowClass: 'app-modal-window-30',
            size: 'lg',
            resolve: {}
        });

        modalInstance.result.then(function (data) {
        if(data=='1')
        $scope.nextImage();
        else if(data=='2')
        $scope.jumpTo(39);
        }, function () {
        });
    }
    $scope.jumpTo = function(pageIndex){
        if ($scope.currentIndex != 0) $scope.currentIndex=pageIndex;
        $scope.showImage();
        if ($scope.currentIndex == 36)$scope.showPopup();
    }
    $scope.author = function () {
        //var detailTemplate = "mvc/view/author/author.html";
        //var detailCtrl = 'AuthorCtrl';
        //var modalInstance = $modal.open({
        //    templateUrl: detailTemplate,
        //    controller: detailCtrl,
        //    windowClass: 'app-modal-window-85',
        //    size: 'lg',
        //    resolve: {}
        //});
        //
        //modalInstance.result.then(function () {
        //
        //}, function () {
        //});

        $scope.is_collapsed = !$scope.is_collapsed
        var is_collapsed = $scope.is_collapsed;
        var sign = (is_collapsed) ? '-' : '+';

        if (!$(this).is(':animated')) //prevent double margin on double click
        {
            if (easing) $('.willSlide1').animate({"margin-right": sign + '=' + slider_width1}, animation_speed, easing_effect);
            else $('.willSlide1').animate({"margin-right": sign + '=' + slider_width1}, animation_speed);
        }
        (is_collapsed) ? $('.willSlide1').removeClass('expanded') : $('.willSlide1').addClass('expanded');
    }


    $scope.btnClick = function (value) {
        if (value === 3) {
            $scope.isFullscreen = !$scope.isFullscreen;
        } else if (value === 1) {
            var is_collapsed = $(".btn").css("margin-left") == slider_width + "px" && !$(this).is(':animated');
            var sign = (is_collapsed) ? '-' : '+';

            if (!$(this).is(':animated')) //prevent double margin on double click
            {
                if (easing) $('.willSlide').animate({"margin-left": sign + '=' + slider_width}, animation_speed, easing_effect);
                else $('.willSlide').animate({"margin-left": sign + '=' + slider_width}, animation_speed);
            }
            (is_collapsed) ? $('.willSlide').removeClass('expanded') : $('.willSlide').addClass('expanded');
        }
    }

    $scope.btnPre = function () {
        alert("Click Pre");
    }

    $scope.btnNext = function () {
        alert("Click Next");
    }
    $scope.previousImage = function () {
        if ($scope.currentIndex != 0) $scope.currentIndex--;
        $scope.showImage();
        if ($scope.currentIndex == 36)$scope.showPopup();
    };
    $scope.nextImage = function () {
        $scope.currentIndex++;
        if ($scope.currentIndex > $scope.total) $scope.currentIndex = 1;
        $scope.showImage();
        if ($scope.currentIndex == 36)$scope.showPopup();
    }
    $scope.showImage = function () {
        var imgObj = $scope.images[$scope.currentIndex];
        $scope.viewer.load(imgObj.small, imgObj.big);
    }
    init();
});
