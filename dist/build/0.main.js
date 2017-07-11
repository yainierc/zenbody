webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectServicesPageModule", function() { return SelectServicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_services__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectServicesPageModule = (function () {
    function SelectServicesPageModule() {
    }
    return SelectServicesPageModule;
}());
SelectServicesPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__select_services__["a" /* SelectServicesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_services__["a" /* SelectServicesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__select_services__["a" /* SelectServicesPage */]
        ]
    })
], SelectServicesPageModule);

//# sourceMappingURL=select-services.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_schedule_schedule__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SelectServicesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SelectServicesPage = (function () {
    function SelectServicesPage(navCtrl, serviceSvc, scheduleSvc, navParams) {
        this.navCtrl = navCtrl;
        this.serviceSvc = serviceSvc;
        this.scheduleSvc = scheduleSvc;
        this.navParams = navParams;
        this.complementaryAvailable = false;
        this.scheduleId = navParams.get("scheduleId");
        this.timeId = navParams.get("timeId");
        this.date = navParams.get("date");
    }
    SelectServicesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ScheduleId: ' + this.scheduleId);
        console.log('TimeId: ' + this.timeId);
        this.scheduleSvc.getTimeByScheduleAndTimeId(this.scheduleId, this.timeId).then(function (data) {
            if (data) {
                _this.selectedSchedule = data.times[0];
            }
            if (_this.selectedSchedule != null) {
                _this.hour = _this.selectedSchedule.hour;
                _this.serviceSvc.getServices().then(function (data) {
                    _this.services = data;
                });
            }
        });
    };
    SelectServicesPage.prototype.selectService = function (item) {
        if (this.selectedSchedule && this.selectedSchedule.appointment.services) {
            var serviceFound = this.selectedSchedule.appointment.services.find(function (x) { return x == item; });
            if (serviceFound != null) {
                delete this.selectedSchedule.appointment.services[item];
            }
            else {
                this.selectedSchedule.appointment.services.push(item);
            }
            this.recalculateServices();
        }
        console.log('ionViewDidLoad SelectServicesPage');
        console.log('schedule:' + this.selectedSchedule);
    };
    SelectServicesPage.prototype.recalculateServices = function () {
        var duration = 0;
        var price = 0;
        this.complementaryAvailable = this.selectedSchedule.appointment.services.length > 0;
        this.selectedSchedule.appointment.services.forEach(function (element) {
            duration = duration + element.duration;
            price = price + element.price;
        });
        this.selectedSchedule.appointment.duration = duration;
        this.selectedSchedule.appointment.price = price;
    };
    return SelectServicesPage;
}());
SelectServicesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-select-services',template:/*ion-inline-start:"D:\Lab\mean\zenbody\src\pages\select-services\select-services.html"*/'<!--\n  Generated template for the SelectServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Select Massage/Therapy</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header center text-center>\n      <h2> {{date | date:\'EEEE MMM-dd-yy\'}} at {{hour}} </h2>\n    </ion-list-header>\n\n    <ion-item *ngFor="let item of services">\n      <ion-label>{{item.name}}</ion-label>\n      <ion-checkbox checked="false" (click)="selectService(item)" [disabled]="!complementaryAvailable && item.price <= 20"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-card>\n\n    <ion-card-header>\n      Customer Info.\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>Name</ion-label>\n          <ion-input type="text" [(ngModel)]="aa" name="title"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Phone</ion-label>\n          <ion-input type="text" [(ngModel)]="aa" name="title"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Email (optional)</ion-label>\n          <ion-input type="text" [(ngModel)]="aa" name="title"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Notes</ion-label>\n          <ion-textarea [(ngModel)]="aa" name="description"></ion-textarea>\n        </ion-item>\n      </ion-list>\n      <button (click)="goToSchedulePage()" ion-button full icon-left color="primary">\n   <ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon>\n      Confirm Appointment\n     </button>\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Lab\mean\zenbody\src\pages\select-services\select-services.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_schedule_schedule__["a" /* ScheduleProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SelectServicesPage);

//# sourceMappingURL=select-services.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map