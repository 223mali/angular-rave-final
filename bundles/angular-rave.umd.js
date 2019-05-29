(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-rave', ['exports', 'tslib', '@angular/core'], factory) :
    (factory((global['angular-rave'] = {}),global.tslib,global.ng.core));
}(this, (function (exports,tslib_1,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularRaveComponent = (function () {
        function AngularRaveComponent() {
            this.onclose = new core.EventEmitter();
            this.callback = new core.EventEmitter();
            this.init = new core.EventEmitter();
            this._raveOptions = {};
        }
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.pay = /**
         * @return {?}
         */
            function () {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (this.init) {
                                    this.init.emit();
                                }
                                return [4 /*yield*/, this.loadScript()];
                            case 1:
                                _a.sent();
                                if (typeof window.getpaidSetup !== 'function') {
                                    return [2 /*return*/, console.error('ANGULAR-RAVE: Please verify that you imported rave\'s script into your index.html')];
                                }
                                // If the raveoptions Input is present then use it
                                if (this.raveOptions && Object.keys(this.raveOptions).length > 3) {
                                    if (this.validateOptions()) {
                                        this.paymentSetup = window.getpaidSetup(this.raveOptions);
                                    }
                                }
                                else {
                                    if (this.validateInput()) {
                                        this.insertRaveOptions();
                                        this.paymentSetup = window.getpaidSetup(this._raveOptions);
                                    }
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.insertRaveOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.amount) {
                    this._raveOptions.amount = this.amount;
                }
                if (this.PBFPubKey) {
                    this._raveOptions.PBFPubKey = this.PBFPubKey;
                }
                if (this.payment_method) {
                    this._raveOptions.payment_method = this.payment_method;
                }
                if (this.redirect_url) {
                    this._raveOptions.redirect_url = this.redirect_url;
                }
                if (this.integrity_hash) {
                    this._raveOptions.integrity_hash = this.integrity_hash;
                }
                if (this.pay_button_text) {
                    this._raveOptions.pay_button_text = this.pay_button_text;
                }
                if (this.country) {
                    this._raveOptions.country = this.country;
                }
                if (this.payment_plan) {
                    this._raveOptions.payment_plan = this.payment_plan;
                }
                if (this.currency) {
                    this._raveOptions.currency = this.currency;
                }
                if (this.custom_description) {
                    this._raveOptions.custom_description = this.custom_description;
                }
                if (this.customer_email) {
                    this._raveOptions.customer_email = this.customer_email;
                }
                if (this.custom_logo) {
                    this._raveOptions.custom_logo = this.custom_logo;
                }
                if (this.custom_title) {
                    this._raveOptions.custom_title = this.custom_title;
                }
                if (this.customer_firstname) {
                    this._raveOptions.customer_firstname = this.customer_firstname;
                }
                if (this.subaccount) {
                    this._raveOptions.subaccount = this.subaccount;
                }
                if (this.customer_lastname) {
                    this._raveOptions.customer_lastname = this.customer_lastname;
                }
                if (this.txref) {
                    this._raveOptions.txref = this.txref;
                }
                if (this.customer_phone) {
                    this._raveOptions.customer_phone = this.customer_phone;
                }
                if (this.onclose) {
                    this._raveOptions.onclose = function () { return _this.onclose.emit(); };
                }
                if (this.init) {
                    this._raveOptions.init = function () { return _this.init.emit(); };
                }
                if (this.callback) {
                    this._raveOptions.callback = function (res) {
                        _this.onclose.emit(res);
                        _this.paymentSetup.close();
                    };
                }
            };
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.loadScript = /**
         * @return {?}
         */
            function () {
                return new Promise(function (resolve) {
                    if (typeof window.getpaidSetup === 'function') {
                        resolve();
                        return;
                    }
                    var /** @type {?} */ script = window.document.createElement('script');
                    window.document.head.appendChild(script);
                    var /** @type {?} */ onLoadFunc = function () {
                        script.removeEventListener('load', onLoadFunc);
                        resolve();
                    };
                    script.addEventListener('load', onLoadFunc);
                    script.setAttribute('src', 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js');
                });
            };
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.validateOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.raveOptions.PBFPubKey) {
                    return console.error('ANGULAR-RAVE: Merchant public key is required');
                }
                if (!(this.raveOptions.customer_email || this.raveOptions.customer_phone)) {
                    return console.error('ANGULAR-RAVE: Customer email or phone number is required');
                }
                if (!this.raveOptions.txref) {
                    return console.error('ANGULAR-RAVE: A unique transaction reference is required');
                }
                if (!this.raveOptions.amount) {
                    return console.error('ANGULAR-RAVE: Amount to charge is required');
                }
                if (!this.callback.observers.length) {
                    return console.error('ANGULAR-RAVE: You should attach to callback to verify your transaction');
                }
                if (this.onclose.observers.length)
                    this.raveOptions.onclose = function () { return _this.onclose.emit(); };
                this.raveOptions.callback = function (res) {
                    _this.callback.emit(res);
                    _this.paymentSetup.close();
                };
                return true;
            };
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.validateInput = /**
         * @return {?}
         */
            function () {
                if (!this.PBFPubKey) {
                    return console.error('ANGULAR-RAVE: Merchant public key is required');
                }
                if (!(this.customer_email || this.customer_phone)) {
                    return console.error('ANGULAR-RAVE: Customer email or phone number is required');
                }
                if (!this.txref) {
                    return console.error('ANGULAR-RAVE: A unique transaction reference is required');
                }
                if (!this.amount) {
                    return console.error('ANGULAR-RAVE: Amount to charge is required');
                }
                if (!this.callback) {
                    return console.error('ANGULAR-RAVE: You should attach to callback to verify your transaction');
                }
                return true;
            };
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.pay();
            };
        AngularRaveComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'angular-rave',
                        // tslint:disable-line
                        template: "<ng-content></ng-content>"
                    },] },
        ];
        /** @nocollapse */
        AngularRaveComponent.ctorParameters = function () { return []; };
        AngularRaveComponent.propDecorators = {
            "PBFPubKey": [{ type: core.Input },],
            "integrity_hash": [{ type: core.Input },],
            "txref": [{ type: core.Input },],
            "payment_method": [{ type: core.Input },],
            "amount": [{ type: core.Input },],
            "currency": [{ type: core.Input },],
            "country": [{ type: core.Input },],
            "payment_plan": [{ type: core.Input },],
            "customer_email": [{ type: core.Input },],
            "customer_phone": [{ type: core.Input },],
            "customer_firstname": [{ type: core.Input },],
            "customer_lastname": [{ type: core.Input },],
            "subaccount": [{ type: core.Input },],
            "pay_button_text": [{ type: core.Input },],
            "custom_title": [{ type: core.Input },],
            "custom_description": [{ type: core.Input },],
            "redirect_url": [{ type: core.Input },],
            "custom_logo": [{ type: core.Input },],
            "meta": [{ type: core.Input },],
            "raveOptions": [{ type: core.Input },],
            "onclose": [{ type: core.Output },],
            "callback": [{ type: core.Output },],
            "init": [{ type: core.Output },],
        };
        return AngularRaveComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularRaveDirective = (function () {
        function AngularRaveDirective() {
            this.raveOptions = {};
            this.onclose = new core.EventEmitter();
            this.callback = new core.EventEmitter();
            this.init = new core.EventEmitter();
            this._raveOptions = {};
        }
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.buttonClick = /**
         * @return {?}
         */
            function () {
                this.pay();
            };
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.pay = /**
         * @return {?}
         */
            function () {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (this.init) {
                                    this.init.emit();
                                }
                                return [4 /*yield*/, this.loadScript()];
                            case 1:
                                _a.sent();
                                if (typeof window.getpaidSetup !== 'function') {
                                    return [2 /*return*/, console.error('ANGULAR-RAVE: Please verify that you imported rave\'s script into your index.html')];
                                }
                                // If the raveoptions Input is present then use
                                if (this.raveOptions && Object.keys(this.raveOptions).length > 3) {
                                    if (this.validateOptions()) {
                                        this.paymentSetup = window.getpaidSetup(this.raveOptions);
                                    }
                                }
                                else {
                                    if (this.validateInput()) {
                                        this.insertRaveOptions();
                                        this.paymentSetup = window.getpaidSetup(this._raveOptions);
                                    }
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.insertRaveOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.amount) {
                    this._raveOptions.amount = this.amount;
                }
                if (this.PBFPubKey) {
                    this._raveOptions.PBFPubKey = this.PBFPubKey;
                }
                if (this.payment_method) {
                    this._raveOptions.payment_method = this.payment_method;
                }
                if (this.redirect_url) {
                    this._raveOptions.redirect_url = this.redirect_url;
                }
                if (this.integrity_hash) {
                    this._raveOptions.integrity_hash = this.integrity_hash;
                }
                if (this.pay_button_text) {
                    this._raveOptions.pay_button_text = this.pay_button_text;
                }
                if (this.country) {
                    this._raveOptions.country = this.country;
                }
                if (this.payment_plan) {
                    this._raveOptions.payment_plan = this.payment_plan;
                }
                if (this.currency) {
                    this._raveOptions.currency = this.currency;
                }
                if (this.custom_description) {
                    this._raveOptions.custom_description = this.custom_description;
                }
                if (this.customer_email) {
                    this._raveOptions.customer_email = this.customer_email;
                }
                if (this.custom_logo) {
                    this._raveOptions.custom_logo = this.custom_logo;
                }
                if (this.custom_title) {
                    this._raveOptions.custom_title = this.custom_title;
                }
                if (this.customer_firstname) {
                    this._raveOptions.customer_firstname = this.customer_firstname;
                }
                if (this.customer_lastname) {
                    this._raveOptions.customer_lastname = this.customer_lastname;
                }
                if (this.subaccount) {
                    this._raveOptions.subaccount = this.subaccount;
                }
                if (this.customer_phone) {
                    this._raveOptions.customer_phone = this.customer_phone;
                }
                if (this.txref) {
                    this._raveOptions.txref = this.txref;
                }
                if (this.init) {
                    this._raveOptions.init = function () { return _this.init.emit(); };
                }
                if (this.onclose) {
                    this._raveOptions.onclose = function () { return _this.onclose.emit(); };
                }
                if (this.callback) {
                    this._raveOptions.callback = function (res) {
                        _this.onclose.emit(res);
                        _this.paymentSetup.close();
                    };
                }
            };
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.validateOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.raveOptions.PBFPubKey) {
                    return console.error('ANGULAR-RAVE: Merchant public key is required');
                }
                if (!(this.raveOptions.customer_email || this.raveOptions.customer_phone)) {
                    return console.error('ANGULAR-RAVE: Customer email or phone number is required');
                }
                if (!this.raveOptions.txref) {
                    return console.error('ANGULAR-RAVE: A unique transaction reference is required');
                }
                if (!this.raveOptions.amount) {
                    return console.error('ANGULAR-RAVE: Amount to charge is required');
                }
                if (!this.callback.observers.length) {
                    return console.error('ANGULAR-RAVE: You should attach to callback to verify your transaction');
                }
                if (this.onclose.observers.length) {
                    this.raveOptions.onclose = function () { return _this.onclose.emit(); };
                }
                this.raveOptions.callback = function (res) {
                    _this.callback.emit(res);
                    _this.paymentSetup.close();
                };
                return true;
            };
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.loadScript = /**
         * @return {?}
         */
            function () {
                return new Promise(function (resolve) {
                    if (typeof window.getpaidSetup === 'function') {
                        resolve();
                        return;
                    }
                    var /** @type {?} */ script = window.document.createElement('script');
                    window.document.head.appendChild(script);
                    var /** @type {?} */ onLoadFunc = function () {
                        script.removeEventListener('load', onLoadFunc);
                        resolve();
                    };
                    script.addEventListener('load', onLoadFunc);
                    script.setAttribute('src', 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js');
                });
            };
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.validateInput = /**
         * @return {?}
         */
            function () {
                if (!this.PBFPubKey) {
                    return console.error('ANGULAR-RAVE: Merchant public key is required');
                }
                if (!(this.customer_email || this.customer_phone)) {
                    return console.error('ANGULAR-RAVE: Customer email or phone number is required');
                }
                if (!this.txref) {
                    return console.error('ANGULAR-RAVE: A unique transaction reference is required');
                }
                if (!this.amount) {
                    return console.error('ANGULAR-RAVE: Amount to charge is required');
                }
                if (!this.callback) {
                    return console.error('ANGULAR-RAVE: You should attach to callback to verify your transaction');
                }
                return true;
            };
        AngularRaveDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[angular-rave]' // tslint:disable-line
                    },] },
        ];
        /** @nocollapse */
        AngularRaveDirective.ctorParameters = function () { return []; };
        AngularRaveDirective.propDecorators = {
            "PBFPubKey": [{ type: core.Input },],
            "integrity_hash": [{ type: core.Input },],
            "txref": [{ type: core.Input },],
            "payment_method": [{ type: core.Input },],
            "amount": [{ type: core.Input },],
            "currency": [{ type: core.Input },],
            "country": [{ type: core.Input },],
            "payment_plan": [{ type: core.Input },],
            "customer_email": [{ type: core.Input },],
            "customer_phone": [{ type: core.Input },],
            "customer_firstname": [{ type: core.Input },],
            "customer_lastname": [{ type: core.Input },],
            "pay_button_text": [{ type: core.Input },],
            "custom_title": [{ type: core.Input },],
            "subaccount": [{ type: core.Input },],
            "custom_description": [{ type: core.Input },],
            "redirect_url": [{ type: core.Input },],
            "custom_logo": [{ type: core.Input },],
            "meta": [{ type: core.Input },],
            "raveOptions": [{ type: core.Input },],
            "onclose": [{ type: core.Output },],
            "callback": [{ type: core.Output },],
            "init": [{ type: core.Output },],
            "buttonClick": [{ type: core.HostListener, args: ['click',] },],
        };
        return AngularRaveDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RaveOptions = (function () {
        function RaveOptions() {
        }
        return RaveOptions;
    }());
    var PrivateRaveOptions = (function (_super) {
        tslib_1.__extends(PrivateRaveOptions, _super);
        function PrivateRaveOptions() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PrivateRaveOptions;
    }(RaveOptions));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularRaveModule = (function () {
        function AngularRaveModule() {
        }
        AngularRaveModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        exports: [AngularRaveComponent, AngularRaveDirective],
                        declarations: [AngularRaveComponent, AngularRaveDirective],
                        providers: [],
                    },] },
        ];
        return AngularRaveModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.RaveOptions = RaveOptions;
    exports.AngularRaveComponent = AngularRaveComponent;
    exports.AngularRaveDirective = AngularRaveDirective;
    exports.AngularRaveModule = AngularRaveModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1yYXZlL2xpYi9hbmd1bGFyLXJhdmUuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvcmF2ZS1vcHRpb25zLnRzIiwibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcml2YXRlUmF2ZU9wdGlvbnMgfSBmcm9tICcuL3JhdmUtb3B0aW9ucyc7XHJcblxyXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xyXG4gIGdldHBhaWRTZXR1cDogKHJhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FuZ3VsYXItcmF2ZScsIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIFBCRlB1YktleTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGludGVncml0eV9oYXNoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdHhyZWY6IHN0cmluZztcclxuICBASW5wdXQoKSBwYXltZW50X21ldGhvZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFtb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBheW1lbnRfcGxhbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2VtYWlsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfcGhvbmU6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21lcl9maXJzdG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21lcl9sYXN0bmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN1YmFjY291bnQ6IHsgaWQ6IHN0cmluZywgdHJhbnNhY3Rpb25fc3BsaXRfcmF0aW86IHN0cmluZyB9W107XHJcbiAgQElucHV0KCkgcGF5X2J1dHRvbl90ZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tX3RpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmVkaXJlY3RfdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tX2xvZ286IHN0cmluZztcclxuICBASW5wdXQoKSBtZXRhOiBhbnk7XHJcbiAgQElucHV0KCkgcmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPjtcclxuICBAT3V0cHV0KCkgb25jbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcclxuICBAT3V0cHV0KCkgaW5pdDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcclxuICBwcml2YXRlIF9yYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+ID0ge307XHJcbiAgcHJpdmF0ZSBwYXltZW50U2V0dXA6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgYXN5bmMgcGF5KCkge1xyXG4gICAgaWYgKHRoaXMuaW5pdCkge1xyXG4gICAgICB0aGlzLmluaXQuZW1pdCgpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgdGhpcy5sb2FkU2NyaXB0KCk7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogUGxlYXNlIHZlcmlmeSB0aGF0IHlvdSBpbXBvcnRlZCByYXZlXFwncyBzY3JpcHQgaW50byB5b3VyIGluZGV4Lmh0bWwnKTtcclxuICAgIH1cclxuICAgIC8vIElmIHRoZSByYXZlb3B0aW9ucyBJbnB1dCBpcyBwcmVzZW50IHRoZW4gdXNlIGl0XHJcbiAgICBpZiAodGhpcy5yYXZlT3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLnJhdmVPcHRpb25zKS5sZW5ndGggPiAzKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlT3B0aW9ucygpKSB7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMucmF2ZU9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUlucHV0KCkpIHtcclxuICAgICAgICB0aGlzLmluc2VydFJhdmVPcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMuX3JhdmVPcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5zZXJ0UmF2ZU9wdGlvbnMoKSB7XHJcbiAgICBpZiAodGhpcy5hbW91bnQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuYW1vdW50ID0gdGhpcy5hbW91bnQ7IH1cclxuICAgIGlmICh0aGlzLlBCRlB1YktleSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5QQkZQdWJLZXkgPSB0aGlzLlBCRlB1YktleTsgfVxyXG4gICAgaWYgKHRoaXMucGF5bWVudF9tZXRob2QpIHsgdGhpcy5fcmF2ZU9wdGlvbnMucGF5bWVudF9tZXRob2QgPSB0aGlzLnBheW1lbnRfbWV0aG9kOyB9XHJcbiAgICBpZiAodGhpcy5yZWRpcmVjdF91cmwpIHsgdGhpcy5fcmF2ZU9wdGlvbnMucmVkaXJlY3RfdXJsID0gdGhpcy5yZWRpcmVjdF91cmw7IH1cclxuICAgIGlmICh0aGlzLmludGVncml0eV9oYXNoKSB7IHRoaXMuX3JhdmVPcHRpb25zLmludGVncml0eV9oYXNoID0gdGhpcy5pbnRlZ3JpdHlfaGFzaDsgfVxyXG4gICAgaWYgKHRoaXMucGF5X2J1dHRvbl90ZXh0KSB7IHRoaXMuX3JhdmVPcHRpb25zLnBheV9idXR0b25fdGV4dCA9IHRoaXMucGF5X2J1dHRvbl90ZXh0OyB9XHJcbiAgICBpZiAodGhpcy5jb3VudHJ5KSB7IHRoaXMuX3JhdmVPcHRpb25zLmNvdW50cnkgPSB0aGlzLmNvdW50cnk7IH1cclxuICAgIGlmICh0aGlzLnBheW1lbnRfcGxhbikgeyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X3BsYW4gPSB0aGlzLnBheW1lbnRfcGxhbjsgfVxyXG4gICAgaWYgKHRoaXMuY3VycmVuY3kpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VycmVuY3kgPSB0aGlzLmN1cnJlbmN5OyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21fZGVzY3JpcHRpb24pIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2Rlc2NyaXB0aW9uID0gdGhpcy5jdXN0b21fZGVzY3JpcHRpb247IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbWVyX2VtYWlsKSB7IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsID0gdGhpcy5jdXN0b21lcl9lbWFpbDsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tX2xvZ28pIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2xvZ28gPSB0aGlzLmN1c3RvbV9sb2dvOyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21fdGl0bGUpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX3RpdGxlID0gdGhpcy5jdXN0b21fdGl0bGU7IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9maXJzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZTsgfVxyXG4gICAgaWYgKHRoaXMuc3ViYWNjb3VudCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5zdWJhY2NvdW50ID0gdGhpcy5zdWJhY2NvdW50OyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21lcl9sYXN0bmFtZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9sYXN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWU7IH1cclxuICAgIGlmICh0aGlzLnR4cmVmKSB7IHRoaXMuX3JhdmVPcHRpb25zLnR4cmVmID0gdGhpcy50eHJlZjsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJfcGhvbmUpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUgPSB0aGlzLmN1c3RvbWVyX3Bob25lOyB9XHJcbiAgICBpZiAodGhpcy5vbmNsb3NlKSB7IHRoaXMuX3JhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB0aGlzLm9uY2xvc2UuZW1pdCgpOyB9XHJcbiAgICBpZiAodGhpcy5pbml0KSB7IHRoaXMuX3JhdmVPcHRpb25zLmluaXQgPSAoKSA9PiB0aGlzLmluaXQuZW1pdCgpOyB9XHJcbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xyXG4gICAgICB0aGlzLl9yYXZlT3B0aW9ucy5jYWxsYmFjayA9IChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLm9uY2xvc2UuZW1pdChyZXMpO1xyXG4gICAgICAgIHRoaXMucGF5bWVudFNldHVwLmNsb3NlKCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkU2NyaXB0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgY29uc3Qgb25Mb2FkRnVuYyA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfTtcclxuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcclxuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vcmF2ZXNhbmRib3hhcGkuZmx1dHRlcndhdmUuY29tL2Zsd3YzLXB1Zy9nZXRwYWlkeC9hcGkvZmx3cGJmLWlubGluZS5qcycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZU9wdGlvbnMoKSB7XHJcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCEodGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lKSkge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy50eHJlZikgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLmFtb3VudCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cclxuICAgIGlmICh0aGlzLm9uY2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkgdGhpcy5yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4gdGhpcy5vbmNsb3NlLmVtaXQoKTtcclxuICAgIHRoaXMucmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSByZXMgPT4ge1xyXG4gICAgICB0aGlzLmNhbGxiYWNrLmVtaXQocmVzKTtcclxuICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlSW5wdXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCEodGhpcy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLmN1c3RvbWVyX3Bob25lKSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLnR4cmVmKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMuYW1vdW50KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBheSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQcml2YXRlUmF2ZU9wdGlvbnMgfSBmcm9tICcuL3JhdmUtb3B0aW9ucyc7XHJcblxyXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xyXG4gIGdldHBhaWRTZXR1cDogKHJhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thbmd1bGFyLXJhdmVdJyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZURpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgUEJGUHViS2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW50ZWdyaXR5X2hhc2g6IHN0cmluZztcclxuICBASW5wdXQoKSB0eHJlZjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBheW1lbnRfbWV0aG9kOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcclxuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF5bWVudF9wbGFuOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfZW1haWw6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21lcl9waG9uZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF5X2J1dHRvbl90ZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tX3RpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3ViYWNjb3VudDogeyBpZDogc3RyaW5nLCB0cmFuc2FjdGlvbl9zcGxpdF9yYXRpbzogc3RyaW5nIH1bXTtcclxuICBASW5wdXQoKSBjdXN0b21fZGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSByZWRpcmVjdF91cmw6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fbG9nbzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1ldGE6IGFueTtcclxuICBASW5wdXQoKSByYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+ID0ge307XHJcbiAgQE91dHB1dCgpIG9uY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgY2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGluaXQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XHJcbiAgcHJpdmF0ZSBfcmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPiA9IHt9O1xyXG4gIHByaXZhdGUgcGF5bWVudFNldHVwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgYnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLnBheSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcGF5KCkge1xyXG4gICAgaWYgKHRoaXMuaW5pdCkge1xyXG4gICAgICB0aGlzLmluaXQuZW1pdCgpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgdGhpcy5sb2FkU2NyaXB0KCk7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogUGxlYXNlIHZlcmlmeSB0aGF0IHlvdSBpbXBvcnRlZCByYXZlXFwncyBzY3JpcHQgaW50byB5b3VyIGluZGV4Lmh0bWwnKTtcclxuICAgIH1cclxuICAgIC8vIElmIHRoZSByYXZlb3B0aW9ucyBJbnB1dCBpcyBwcmVzZW50IHRoZW4gdXNlXHJcbiAgICBpZiAodGhpcy5yYXZlT3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLnJhdmVPcHRpb25zKS5sZW5ndGggPiAzKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlT3B0aW9ucygpKSB7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMucmF2ZU9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUlucHV0KCkpIHtcclxuICAgICAgICB0aGlzLmluc2VydFJhdmVPcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMuX3JhdmVPcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5zZXJ0UmF2ZU9wdGlvbnMoKSB7XHJcbiAgICBpZiAodGhpcy5hbW91bnQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuYW1vdW50ID0gdGhpcy5hbW91bnQ7IH1cclxuICAgIGlmICh0aGlzLlBCRlB1YktleSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5QQkZQdWJLZXkgPSB0aGlzLlBCRlB1YktleTsgfVxyXG4gICAgaWYgKHRoaXMucGF5bWVudF9tZXRob2QpIHsgdGhpcy5fcmF2ZU9wdGlvbnMucGF5bWVudF9tZXRob2QgPSB0aGlzLnBheW1lbnRfbWV0aG9kOyB9XHJcbiAgICBpZiAodGhpcy5yZWRpcmVjdF91cmwpIHsgdGhpcy5fcmF2ZU9wdGlvbnMucmVkaXJlY3RfdXJsID0gdGhpcy5yZWRpcmVjdF91cmw7IH1cclxuICAgIGlmICh0aGlzLmludGVncml0eV9oYXNoKSB7IHRoaXMuX3JhdmVPcHRpb25zLmludGVncml0eV9oYXNoID0gdGhpcy5pbnRlZ3JpdHlfaGFzaDsgfVxyXG4gICAgaWYgKHRoaXMucGF5X2J1dHRvbl90ZXh0KSB7IHRoaXMuX3JhdmVPcHRpb25zLnBheV9idXR0b25fdGV4dCA9IHRoaXMucGF5X2J1dHRvbl90ZXh0OyB9XHJcbiAgICBpZiAodGhpcy5jb3VudHJ5KSB7IHRoaXMuX3JhdmVPcHRpb25zLmNvdW50cnkgPSB0aGlzLmNvdW50cnk7IH1cclxuICAgIGlmICh0aGlzLnBheW1lbnRfcGxhbikgeyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X3BsYW4gPSB0aGlzLnBheW1lbnRfcGxhbjsgfVxyXG4gICAgaWYgKHRoaXMuY3VycmVuY3kpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VycmVuY3kgPSB0aGlzLmN1cnJlbmN5OyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21fZGVzY3JpcHRpb24pIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2Rlc2NyaXB0aW9uID0gdGhpcy5jdXN0b21fZGVzY3JpcHRpb247IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbWVyX2VtYWlsKSB7IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsID0gdGhpcy5jdXN0b21lcl9lbWFpbDsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tX2xvZ28pIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2xvZ28gPSB0aGlzLmN1c3RvbV9sb2dvOyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21fdGl0bGUpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX3RpdGxlID0gdGhpcy5jdXN0b21fdGl0bGU7IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9maXJzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZTsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfbGFzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lOyB9XHJcbiAgICBpZiAodGhpcy5zdWJhY2NvdW50KSB7IHRoaXMuX3JhdmVPcHRpb25zLnN1YmFjY291bnQgPSB0aGlzLnN1YmFjY291bnQ7IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbWVyX3Bob25lKSB7IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lID0gdGhpcy5jdXN0b21lcl9waG9uZTsgfVxyXG4gICAgaWYgKHRoaXMudHhyZWYpIHsgdGhpcy5fcmF2ZU9wdGlvbnMudHhyZWYgPSB0aGlzLnR4cmVmOyB9XHJcbiAgICBpZiAodGhpcy5pbml0KSB7IHRoaXMuX3JhdmVPcHRpb25zLmluaXQgPSAoKSA9PiB0aGlzLmluaXQuZW1pdCgpOyB9XHJcbiAgICBpZiAodGhpcy5vbmNsb3NlKSB7IHRoaXMuX3JhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB0aGlzLm9uY2xvc2UuZW1pdCgpOyB9XHJcbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xyXG4gICAgICB0aGlzLl9yYXZlT3B0aW9ucy5jYWxsYmFjayA9IChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLm9uY2xvc2UuZW1pdChyZXMpO1xyXG4gICAgICAgIHRoaXMucGF5bWVudFNldHVwLmNsb3NlKCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZU9wdGlvbnMoKSB7XHJcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCEodGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lKSkge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy50eHJlZikgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLmFtb3VudCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cclxuICAgIGlmICh0aGlzLm9uY2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkgeyB0aGlzLnJhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB0aGlzLm9uY2xvc2UuZW1pdCgpOyB9XHJcbiAgICB0aGlzLnJhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHtcclxuICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KHJlcyk7XHJcbiAgICAgIHRoaXMucGF5bWVudFNldHVwLmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBsb2FkU2NyaXB0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgY29uc3Qgb25Mb2FkRnVuYyA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfTtcclxuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcclxuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vcmF2ZXNhbmRib3hhcGkuZmx1dHRlcndhdmUuY29tL2Zsd3YzLXB1Zy9nZXRwYWlkeC9hcGkvZmx3cGJmLWlubGluZS5qcycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUlucHV0KCkge1xyXG4gICAgaWYgKCF0aGlzLlBCRlB1YktleSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghKHRoaXMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5jdXN0b21lcl9waG9uZSkpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy50eHJlZikgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmFtb3VudCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5jYWxsYmFjaykgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvbicpOyB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBSYXZlT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogWW91ciBtZXJjaGFudCBwdWJsaWMga2V5IHByb3ZpZGVkIHdoZW4geW91IGNyZWF0ZSBhIGJ1dHRvblxyXG4gICAqL1xyXG4gIFBCRlB1YktleTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEVtYWlsIG9mIHRoZSBjdXN0b21lclxyXG4gICAqL1xyXG4gIGN1c3RvbWVyX2VtYWlsPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEZpcnN0bmFtZSBvZiB0aGUgY3VzdG9tZXJcclxuICAgKi9cclxuICBjdXN0b21lcl9maXJzdG5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogZmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxyXG4gICAqL1xyXG4gIGN1c3RvbWVyX2xhc3RuYW1lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIGEgc2hvcnQgbW9kYWwgZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBjdXN0b21fZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTGluayB0byB5b3VyIGN1c3RvbSBpbWFnZVxyXG4gICAqL1xyXG4gIGN1c3RvbV9sb2dvPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSB0aXRsZSBvZiB0aGUgcGF5bWVudCBtb2RhbFxyXG4gICAqL1xyXG4gIGN1c3RvbV90aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBBbW91bnQgdG8gY2hhcmdlXHJcbiAgICovXHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogcGhvbmUgbnVtYmVyIG9mIHRoZSBjdXN0b21lclxyXG4gICAqL1xyXG4gIGN1c3RvbWVyX3Bob25lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFVSTCB0byByZWRpcmVjdCB0byB3aGVuIHRyYW5zYWN0aW9uIGlzIGNvbXBsZXRlZC5cclxuICAgKi9cclxuICByZWRpcmVjdF91cmw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogcm91dGUgY291bnRyeS4gRGVmYXVsdCBOR1xyXG4gICAqL1xyXG4gIGNvdW50cnk/OiBzdHJpbmc7XHJcblxyXG4gIHBheW1lbnRfcGxhbj86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBjdXJyZW5jeSB0byBjaGFyZ2UgdGhlIGNhcmQgaW4uIERlZmF1bHQgXCJOR05cIlxyXG4gICAqL1xyXG4gIGN1cnJlbmN5Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgYWxsb3dzIHlvdSBzZWxlY3QgdGhlIHBheW1lbnQgb3B0aW9uIHlvdSB3YW50IGZvciB5b3VyIHVzZXJzLCBwb3NzaWJsZSB2YWx1ZXMgYXJlIGNhcmQsIGFjY291bnQgb3IgYm90aFxyXG4gICAqL1xyXG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBSYXZlIENoZWNrb3V0IEJ1dHRvblxyXG4gICAqL1xyXG4gIHBheV9idXR0b25fdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBVbmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIHByb3ZpZGVkIGJ5IHRoZSBtZXJjaGFudFxyXG4gICAqL1xyXG4gIHR4cmVmOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBhIHNoYTI1NiBoYXNoIG9mIHlvdXIgZ2V0cGFpZFNldHVwIHZhbHVlcywgaXQgaXMgdXNlZCBmb3IgcGFzc2luZyBzZWN1cmVkIHZhbHVlcyB0byB0aGUgcGF5bWVudCBnYXRld2F5XHJcbiAgICovXHJcbiAgaW50ZWdyaXR5X2hhc2g/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhbHVlIHRvIGJlIHBhc3NlZCBmb3IgdGhpcyBpcyAxLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGN1c3RvbWVyIGlzIHVzaW5nIGFuIG9wZXJhIGJyb3dzZXIsIGl0XHJcbiAgICogd291bGQgbG9hZCB0aGUgcGF5bWVudCBtb2RhbCBvbiBhIG5ldyBwYWdlLlxyXG4gICAqL1xyXG4gIGhvc3RlZF9wYXltZW50PzogMTtcclxuICAvKipcclxuICAgKiBBbnkgb3RoZXIgY3VzdG9tIGRhdGEgeW91IHdpc2ggdG8gcGFzcy5cclxuICAgKi9cclxuICBtZXRhPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIFN1YmFjY291bnRzIHRvIHNwbGl0IHBheW1lbnQgd2l0aFxyXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLmZsdXR0ZXJ3YXZlLmNvbS92Mi4wL2RvY3Mvc3BsaXQtcGF5bWVudFxyXG4gICAqL1xyXG4gIHN1YmFjY291bnQ/OiB7IGlkOiBzdHJpbmcsIHRyYW5zYWN0aW9uX3NwbGl0X3JhdGlvOiBzdHJpbmcgfVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmF0ZVJhdmVPcHRpb25zIGV4dGVuZHMgUmF2ZU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3NmdWwgY2FyZCBjaGFyZ2UuIFVzZXLDosKAwplzIGNhbiBhbHdheXMgYmUgcmVkaXJlY3RlZCB0byBhIHN1Y2Nlc3NmdWwgb3JcclxuICAgKiBmYWlsZWQgcGFnZSBzdXBwbGllZCBieSB0aGUgbWVyY2hhbnQgaGVyZSBiYXNlZCBvbiByZXNwb25zZVxyXG4gICAqIEBwYXJhbSByZXNwb25zZT86IFRoZSBzZXJ2ZXIgcmVzcG9uc2VcclxuICAgKi9cclxuICBjYWxsYmFjazogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHBheSBtb2RhbCBpcyBjbG9zZWQuXHJcbiAgICovXHJcbiAgb25jbG9zZTogKCkgPT4gdm9pZDtcclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHBheW1lbnQgaXMgYWJvdXQgdG8gYmVnaW5cclxuICAgKi9cclxuICBpbml0OiAoKSA9PiB2b2lkO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBbmd1bGFyUmF2ZUNvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhci1yYXZlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFuZ3VsYXJSYXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9hbmd1bGFyLXJhdmUuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW10sXHJcbiAgZXhwb3J0czogW0FuZ3VsYXJSYXZlQ29tcG9uZW50LCBBbmd1bGFyUmF2ZURpcmVjdGl2ZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhclJhdmVDb21wb25lbnQsIEFuZ3VsYXJSYXZlRGlyZWN0aXZlXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdmVNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbnB1dCIsIk91dHB1dCIsIkRpcmVjdGl2ZSIsIkhvc3RMaXN0ZW5lciIsInRzbGliXzEuX19leHRlbmRzIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBeUNFOzJCQU53QyxJQUFJQSxpQkFBWSxFQUFROzRCQUNyQixJQUFJQSxpQkFBWSxFQUFVO3dCQUM5QixJQUFJQSxpQkFBWSxFQUFVO2dDQUNiLEVBQUU7U0FHckM7Ozs7UUFFWCxrQ0FBRzs7O1lBQVQ7Ozs7O2dDQUNFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQ0FDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lDQUNsQjtnQ0FDRCxxQkFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUE7O2dDQUF2QixTQUF1QixDQUFDO2dDQUN4QixJQUFJLE9BQU8sTUFBTSxDQUFDLFlBQVksS0FBSyxVQUFVLEVBQUU7b0NBQzdDLHNCQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUZBQW1GLENBQUMsRUFBQztpQ0FDM0c7O2dDQUVELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29DQUNoRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTt3Q0FDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMs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