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
                this.amount ? this._raveOptions.amount = this.amount : null;
                this.payment_plan ? this._raveOptions.payment_plan = this.payment_plan : null;
                this.PBFPubKey ? this._raveOptions.PBFPubKey = this.PBFPubKey : null;
                this.payment_method ? this._raveOptions.payment_method = this.payment_method : null;
                this.redirect_url ? this._raveOptions.redirect_url = this.redirect_url : null;
                this.integrity_hash ? this._raveOptions.integrity_hash = this.integrity_hash : null;
                this.pay_button_text ? this._raveOptions.pay_button_text = this.pay_button_text : null;
                this.country ? this._raveOptions.country = this.country : null;
                this.currency ? this._raveOptions.currency = this.currency : null;
                this.custom_description ? this._raveOptions.custom_description = this.custom_description : null;
                this.customer_email ? this._raveOptions.customer_email = this.customer_email : null;
                this.custom_logo ? this._raveOptions.custom_logo = this.custom_logo : null;
                this.custom_title ? this._raveOptions.custom_title = this.custom_title : null;
                this.customer_firstname ? this._raveOptions.customer_firstname = this.customer_firstname : null;
                this.customer_lastname ? this._raveOptions.customer_lastname = this.customer_lastname : null;
                this.txref ? this._raveOptions.txref = this.txref : null;
                this.customer_phone ? this._raveOptions.customer_phone = this.customer_phone : null;
                this.onclose ? this._raveOptions.onclose = function () { _this.onclose.emit(); _this.paymentSetup.close(); } : null;
                this.callback ? this._raveOptions.callback = function (res) { return _this.onclose.emit(res); } : null;
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
                this.amount ? this._raveOptions.amount = this.amount : null;
                this.payment_plan ? this._raveOptions.payment_plan = this.payment_plan : null;
                this.PBFPubKey ? this._raveOptions.PBFPubKey = this.PBFPubKey : null;
                this.payment_method ? this._raveOptions.payment_method = this.payment_method : null;
                this.redirect_url ? this._raveOptions.redirect_url = this.redirect_url : null;
                this.integrity_hash ? this._raveOptions.integrity_hash = this.integrity_hash : null;
                this.pay_button_text ? this._raveOptions.pay_button_text = this.pay_button_text : null;
                this.country ? this._raveOptions.country = this.country : null;
                this.currency ? this._raveOptions.currency = this.currency : null;
                this.custom_description ? this._raveOptions.custom_description = this.custom_description : null;
                this.customer_email ? this._raveOptions.customer_email = this.customer_email : null;
                this.custom_logo ? this._raveOptions.custom_logo = this.custom_logo : null;
                this.custom_title ? this._raveOptions.custom_title = this.custom_title : null;
                this.customer_firstname ? this._raveOptions.customer_firstname = this.customer_firstname : null;
                this.customer_lastname ? this._raveOptions.customer_lastname = this.customer_lastname : null;
                this.customer_phone ? this._raveOptions.customer_phone = this.customer_phone : null;
                this.txref ? this._raveOptions.txref = this.txref : null;
                this.onclose ? this._raveOptions.onclose = function () {
                    _this.onclose.emit();
                } : null;
                this.callback ? this._raveOptions.callback = function (res) {
                    _this.callback.emit(res);
                    _this.paymentSetup.close();
                } : null;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1yYXZlL2xpYi9hbmd1bGFyLXJhdmUuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvcmF2ZS1vcHRpb25zLnRzIiwibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcml2YXRlUmF2ZU9wdGlvbnMgfSBmcm9tICcuL3JhdmUtb3B0aW9ucyc7XHJcblxyXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xyXG4gIGdldHBhaWRTZXR1cDogKHJhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FuZ3VsYXItcmF2ZScsIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIFBCRlB1YktleTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGludGVncml0eV9oYXNoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdHhyZWY6IHN0cmluZztcclxuICBASW5wdXQoKSBwYXltZW50X21ldGhvZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFtb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBheW1lbnRfcGxhbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2VtYWlsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfcGhvbmU6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21lcl9maXJzdG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21lcl9sYXN0bmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN1YmFjY291bnQ6IHsgaWQ6IHN0cmluZywgdHJhbnNhY3Rpb25fc3BsaXRfcmF0aW86IHN0cmluZyB9W107XHJcbiAgQElucHV0KCkgcGF5X2J1dHRvbl90ZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tX3RpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmVkaXJlY3RfdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tX2xvZ286IHN0cmluZztcclxuICBASW5wdXQoKSBtZXRhOiBhbnk7XHJcbiAgQElucHV0KCkgcmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPjtcclxuICBAT3V0cHV0KCkgb25jbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcclxuICBAT3V0cHV0KCkgaW5pdDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcclxuICBwcml2YXRlIF9yYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+ID0ge307XHJcbiAgcHJpdmF0ZSBwYXltZW50U2V0dXA6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgYXN5bmMgcGF5KCkge1xyXG4gICAgaWYgKHRoaXMuaW5pdCkge1xyXG4gICAgICB0aGlzLmluaXQuZW1pdCgpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgdGhpcy5sb2FkU2NyaXB0KCk7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogUGxlYXNlIHZlcmlmeSB0aGF0IHlvdSBpbXBvcnRlZCByYXZlXFwncyBzY3JpcHQgaW50byB5b3VyIGluZGV4Lmh0bWwnKTtcclxuICAgIH1cclxuICAgIC8vIElmIHRoZSByYXZlb3B0aW9ucyBJbnB1dCBpcyBwcmVzZW50IHRoZW4gdXNlIGl0XHJcbiAgICBpZiAodGhpcy5yYXZlT3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLnJhdmVPcHRpb25zKS5sZW5ndGggPiAzKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlT3B0aW9ucygpKSB7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMucmF2ZU9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUlucHV0KCkpIHtcclxuICAgICAgICB0aGlzLmluc2VydFJhdmVPcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMuX3JhdmVPcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5zZXJ0UmF2ZU9wdGlvbnMoKSB7XHJcbiAgICB0aGlzLmFtb3VudCA/IHRoaXMuX3JhdmVPcHRpb25zLmFtb3VudCA9IHRoaXMuYW1vdW50IDogbnVsbFxyXG4gICAgdGhpcy5wYXltZW50X3BsYW4gPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X3BsYW4gPSB0aGlzLnBheW1lbnRfcGxhbiA6IG51bGxcclxuICAgIHRoaXMuUEJGUHViS2V5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuUEJGUHViS2V5ID0gdGhpcy5QQkZQdWJLZXkgOiBudWxsXHJcbiAgICB0aGlzLnBheW1lbnRfbWV0aG9kID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5bWVudF9tZXRob2QgPSB0aGlzLnBheW1lbnRfbWV0aG9kIDogbnVsbFxyXG4gICAgdGhpcy5yZWRpcmVjdF91cmwgPyB0aGlzLl9yYXZlT3B0aW9ucy5yZWRpcmVjdF91cmwgPSB0aGlzLnJlZGlyZWN0X3VybCA6IG51bGxcclxuICAgIHRoaXMuaW50ZWdyaXR5X2hhc2ggPyB0aGlzLl9yYXZlT3B0aW9ucy5pbnRlZ3JpdHlfaGFzaCA9IHRoaXMuaW50ZWdyaXR5X2hhc2ggOiBudWxsXHJcbiAgICB0aGlzLnBheV9idXR0b25fdGV4dCA/IHRoaXMuX3JhdmVPcHRpb25zLnBheV9idXR0b25fdGV4dCA9IHRoaXMucGF5X2J1dHRvbl90ZXh0IDogbnVsbFxyXG4gICAgdGhpcy5jb3VudHJ5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY291bnRyeSA9IHRoaXMuY291bnRyeSA6IG51bGxcclxuICAgIHRoaXMuY3VycmVuY3kgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXJyZW5jeSA9IHRoaXMuY3VycmVuY3kgOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbiA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV9kZXNjcmlwdGlvbiA9IHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21lcl9lbWFpbCA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsID0gdGhpcy5jdXN0b21lcl9lbWFpbCA6IG51bGxcclxuICAgIHRoaXMuY3VzdG9tX2xvZ28gPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fbG9nbyA9IHRoaXMuY3VzdG9tX2xvZ28gOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbV90aXRsZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV90aXRsZSA9IHRoaXMuY3VzdG9tX3RpdGxlIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21lcl9maXJzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9maXJzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA6IG51bGxcclxuICAgIHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9sYXN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgOiBudWxsXHJcbiAgICB0aGlzLnR4cmVmID8gdGhpcy5fcmF2ZU9wdGlvbnMudHhyZWYgPSB0aGlzLnR4cmVmIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21lcl9waG9uZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lID0gdGhpcy5jdXN0b21lcl9waG9uZSA6IG51bGxcclxuICAgIHRoaXMub25jbG9zZSA/IHRoaXMuX3JhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB7dGhpcy5vbmNsb3NlLmVtaXQoKTsgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKX0gOiBudWxsXHJcbiAgICB0aGlzLmNhbGxiYWNrID8gdGhpcy5fcmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSAocmVzKSA9PiB0aGlzLm9uY2xvc2UuZW1pdChyZXMpIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgbG9hZFNjcmlwdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0cGFpZFNldHVwID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgIGNvbnN0IG9uTG9hZEZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XHJcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL3JhdmVzYW5kYm94YXBpLmZsdXR0ZXJ3YXZlLmNvbS9mbHd2My1wdWcvZ2V0cGFpZHgvYXBpL2Zsd3BiZi1pbmxpbmUuanMnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVPcHRpb25zKCkge1xyXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLlBCRlB1YktleSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghKHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSkpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMudHhyZWYpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy5hbW91bnQpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2sub2JzZXJ2ZXJzLmxlbmd0aCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvbicpOyB9XHJcbiAgICBpZiAodGhpcy5vbmNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHRoaXMucmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KCk7XHJcbiAgICB0aGlzLnJhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHtcclxuICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KHJlcyk7XHJcbiAgICAgIHRoaXMucGF5bWVudFNldHVwLmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUlucHV0KCkge1xyXG4gICAgaWYgKCF0aGlzLlBCRlB1YktleSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghKHRoaXMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5jdXN0b21lcl9waG9uZSkpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy50eHJlZikgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmFtb3VudCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5jYWxsYmFjaykgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvbicpOyB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYXkoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUHJpdmF0ZVJhdmVPcHRpb25zIH0gZnJvbSAnLi9yYXZlLW9wdGlvbnMnO1xyXG5cclxuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcclxuICBnZXRwYWlkU2V0dXA6IChyYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+KSA9PiB2b2lkO1xyXG59XHJcblxyXG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYW5ndWxhci1yYXZlXScgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdmVEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIFBCRlB1YktleTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGludGVncml0eV9oYXNoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdHhyZWY6IHN0cmluZztcclxuICBASW5wdXQoKSBwYXltZW50X21ldGhvZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFtb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBheW1lbnRfcGxhbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2VtYWlsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfcGhvbmU6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21lcl9maXJzdG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21lcl9sYXN0bmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBheV9idXR0b25fdGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbV90aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN1YmFjY291bnQ6IHsgaWQ6IHN0cmluZywgdHJhbnNhY3Rpb25fc3BsaXRfcmF0aW86IHN0cmluZyB9W107XHJcbiAgQElucHV0KCkgY3VzdG9tX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmVkaXJlY3RfdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tX2xvZ286IHN0cmluZztcclxuICBASW5wdXQoKSBtZXRhOiBhbnk7XHJcbiAgQElucHV0KCkgcmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPiA9IHt9O1xyXG4gIEBPdXRwdXQoKSBvbmNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBpbml0OiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xyXG4gIHByaXZhdGUgX3JhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz4gPSB7fTtcclxuICBwcml2YXRlIHBheW1lbnRTZXR1cDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIGJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5wYXkoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHBheSgpIHtcclxuICAgIGlmICh0aGlzLmluaXQpIHtcclxuICAgICAgdGhpcy5pbml0LmVtaXQoKTtcclxuICAgIH1cclxuICAgIGF3YWl0IHRoaXMubG9hZFNjcmlwdCgpO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0cGFpZFNldHVwICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFBsZWFzZSB2ZXJpZnkgdGhhdCB5b3UgaW1wb3J0ZWQgcmF2ZVxcJ3Mgc2NyaXB0IGludG8geW91ciBpbmRleC5odG1sJyk7XHJcbiAgICB9XHJcbiAgICAvLyBJZiB0aGUgcmF2ZW9wdGlvbnMgSW5wdXQgaXMgcHJlc2VudCB0aGVuIHVzZVxyXG4gICAgaWYgKHRoaXMucmF2ZU9wdGlvbnMgJiYgT2JqZWN0LmtleXModGhpcy5yYXZlT3B0aW9ucykubGVuZ3RoID4gMykge1xyXG4gICAgICBpZiAodGhpcy52YWxpZGF0ZU9wdGlvbnMoKSkge1xyXG4gICAgICAgIHRoaXMucGF5bWVudFNldHVwID0gd2luZG93LmdldHBhaWRTZXR1cCh0aGlzLnJhdmVPcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMudmFsaWRhdGVJbnB1dCgpKSB7XHJcbiAgICAgICAgdGhpcy5pbnNlcnRSYXZlT3B0aW9ucygpO1xyXG4gICAgICAgIHRoaXMucGF5bWVudFNldHVwID0gd2luZG93LmdldHBhaWRTZXR1cCh0aGlzLl9yYXZlT3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluc2VydFJhdmVPcHRpb25zKCkge1xyXG4gICAgdGhpcy5hbW91bnQgPyB0aGlzLl9yYXZlT3B0aW9ucy5hbW91bnQgPSB0aGlzLmFtb3VudCA6IG51bGxcclxuICAgIHRoaXMucGF5bWVudF9wbGFuID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5bWVudF9wbGFuID0gdGhpcy5wYXltZW50X3BsYW4gOiBudWxsXHJcbiAgICB0aGlzLlBCRlB1YktleSA/IHRoaXMuX3JhdmVPcHRpb25zLlBCRlB1YktleSA9IHRoaXMuUEJGUHViS2V5IDogbnVsbFxyXG4gICAgdGhpcy5wYXltZW50X21ldGhvZCA/IHRoaXMuX3JhdmVPcHRpb25zLnBheW1lbnRfbWV0aG9kID0gdGhpcy5wYXltZW50X21ldGhvZCA6IG51bGxcclxuICAgIHRoaXMucmVkaXJlY3RfdXJsID8gdGhpcy5fcmF2ZU9wdGlvbnMucmVkaXJlY3RfdXJsID0gdGhpcy5yZWRpcmVjdF91cmwgOiBudWxsXHJcbiAgICB0aGlzLmludGVncml0eV9oYXNoID8gdGhpcy5fcmF2ZU9wdGlvbnMuaW50ZWdyaXR5X2hhc2ggPSB0aGlzLmludGVncml0eV9oYXNoIDogbnVsbFxyXG4gICAgdGhpcy5wYXlfYnV0dG9uX3RleHQgPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXlfYnV0dG9uX3RleHQgPSB0aGlzLnBheV9idXR0b25fdGV4dCA6IG51bGxcclxuICAgIHRoaXMuY291bnRyeSA/IHRoaXMuX3JhdmVPcHRpb25zLmNvdW50cnkgPSB0aGlzLmNvdW50cnkgOiBudWxsXHJcbiAgICB0aGlzLmN1cnJlbmN5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VycmVuY3kgPSB0aGlzLmN1cnJlbmN5IDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21fZGVzY3JpcHRpb24gPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fZGVzY3JpcHRpb24gPSB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbiA6IG51bGxcclxuICAgIHRoaXMuY3VzdG9tZXJfZW1haWwgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCA9IHRoaXMuY3VzdG9tZXJfZW1haWwgOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbV9sb2dvID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2xvZ28gPSB0aGlzLmN1c3RvbV9sb2dvIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21fdGl0bGUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fdGl0bGUgPSB0aGlzLmN1c3RvbV90aXRsZSA6IG51bGxcclxuICAgIHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZmlyc3RuYW1lID0gdGhpcy5jdXN0b21lcl9maXJzdG5hbWUgOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfbGFzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21lcl9waG9uZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lID0gdGhpcy5jdXN0b21lcl9waG9uZSA6IG51bGxcclxuICAgIHRoaXMudHhyZWYgPyB0aGlzLl9yYXZlT3B0aW9ucy50eHJlZiA9IHRoaXMudHhyZWYgOiBudWxsXHJcbiAgICB0aGlzLm9uY2xvc2UgPyB0aGlzLl9yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uY2xvc2UuZW1pdCgpXHJcbiAgICB9IDogbnVsbFxyXG4gICAgdGhpcy5jYWxsYmFjayA/IHRoaXMuX3JhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHtcclxuICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KHJlcyk7XHJcbiAgICAgIHRoaXMucGF5bWVudFNldHVwLmNsb3NlKCk7XHJcbiAgICB9IDogbnVsbFxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVPcHRpb25zKCkge1xyXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLlBCRlB1YktleSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghKHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSkpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMudHhyZWYpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy5hbW91bnQpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2sub2JzZXJ2ZXJzLmxlbmd0aCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvbicpOyB9XHJcbiAgICBpZiAodGhpcy5vbmNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHsgdGhpcy5yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4gdGhpcy5vbmNsb3NlLmVtaXQoKTsgfVxyXG4gICAgdGhpcy5yYXZlT3B0aW9ucy5jYWxsYmFjayA9IHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuY2FsbGJhY2suZW1pdChyZXMpO1xyXG4gICAgICB0aGlzLnBheW1lbnRTZXR1cC5jbG9zZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbG9hZFNjcmlwdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0cGFpZFNldHVwID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgIGNvbnN0IG9uTG9hZEZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XHJcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL3JhdmVzYW5kYm94YXBpLmZsdXR0ZXJ3YXZlLmNvbS9mbHd2My1wdWcvZ2V0cGFpZHgvYXBpL2Zsd3BiZi1pbmxpbmUuanMnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVJbnB1dCgpIHtcclxuICAgIGlmICghdGhpcy5QQkZQdWJLZXkpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoISh0aGlzLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMuY3VzdG9tZXJfcGhvbmUpKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMudHhyZWYpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5hbW91bnQpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2spIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogWW91IHNob3VsZCBhdHRhY2ggdG8gY2FsbGJhY2sgdG8gdmVyaWZ5IHlvdXIgdHJhbnNhY3Rpb24nKTsgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUmF2ZU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFlvdXIgbWVyY2hhbnQgcHVibGljIGtleSBwcm92aWRlZCB3aGVuIHlvdSBjcmVhdGUgYSBidXR0b25cclxuICAgKi9cclxuICBQQkZQdWJLZXk6IHN0cmluZztcclxuICAvKipcclxuICAgKiBFbWFpbCBvZiB0aGUgY3VzdG9tZXJcclxuICAgKi9cclxuICBjdXN0b21lcl9lbWFpbD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBGaXJzdG5hbWUgb2YgdGhlIGN1c3RvbWVyXHJcbiAgICovXHJcbiAgY3VzdG9tZXJfZmlyc3RuYW1lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGZpcnN0bmFtZSBvZiB0aGUgY3VzdG9tZXJcclxuICAgKi9cclxuICBjdXN0b21lcl9sYXN0bmFtZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBhcyBhIHNob3J0IG1vZGFsIGRlc2NyaXB0aW9uXHJcbiAgICovXHJcbiAgY3VzdG9tX2Rlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIExpbmsgdG8geW91ciBjdXN0b20gaW1hZ2VcclxuICAgKi9cclxuICBjdXN0b21fbG9nbz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBhcyB0aGUgdGl0bGUgb2YgdGhlIHBheW1lbnQgbW9kYWxcclxuICAgKi9cclxuICBjdXN0b21fdGl0bGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQW1vdW50IHRvIGNoYXJnZVxyXG4gICAqL1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIHBob25lIG51bWJlciBvZiB0aGUgY3VzdG9tZXJcclxuICAgKi9cclxuICBjdXN0b21lcl9waG9uZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBVUkwgdG8gcmVkaXJlY3QgdG8gd2hlbiB0cmFuc2FjdGlvbiBpcyBjb21wbGV0ZWQuXHJcbiAgICovXHJcbiAgcmVkaXJlY3RfdXJsPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHJvdXRlIGNvdW50cnkuIERlZmF1bHQgTkdcclxuICAgKi9cclxuICBjb3VudHJ5Pzogc3RyaW5nO1xyXG5cclxuICBwYXltZW50X3BsYW4/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogY3VycmVuY3kgdG8gY2hhcmdlIHRoZSBjYXJkIGluLiBEZWZhdWx0IFwiTkdOXCJcclxuICAgKi9cclxuICBjdXJyZW5jeT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGlzIGFsbG93cyB5b3Ugc2VsZWN0IHRoZSBwYXltZW50IG9wdGlvbiB5b3Ugd2FudCBmb3IgeW91ciB1c2VycywgcG9zc2libGUgdmFsdWVzIGFyZSBjYXJkLCBhY2NvdW50IG9yIGJvdGhcclxuICAgKi9cclxuICBwYXltZW50X21ldGhvZD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgUmF2ZSBDaGVja291dCBCdXR0b25cclxuICAgKi9cclxuICBwYXlfYnV0dG9uX3RleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBwcm92aWRlZCBieSB0aGUgbWVyY2hhbnRcclxuICAgKi9cclxuICB0eHJlZjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgYSBzaGEyNTYgaGFzaCBvZiB5b3VyIGdldHBhaWRTZXR1cCB2YWx1ZXMsIGl0IGlzIHVzZWQgZm9yIHBhc3Npbmcgc2VjdXJlZCB2YWx1ZXMgdG8gdGhlIHBheW1lbnQgZ2F0ZXdheVxyXG4gICAqL1xyXG4gIGludGVncml0eV9oYXNoPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWx1ZSB0byBiZSBwYXNzZWQgZm9yIHRoaXMgaXMgMS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBjdXN0b21lciBpcyB1c2luZyBhbiBvcGVyYSBicm93c2VyLCBpdFxyXG4gICAqIHdvdWxkIGxvYWQgdGhlIHBheW1lbnQgbW9kYWwgb24gYSBuZXcgcGFnZS5cclxuICAgKi9cclxuICBob3N0ZWRfcGF5bWVudD86IDE7XHJcbiAgLyoqXHJcbiAgICogQW55IG90aGVyIGN1c3RvbSBkYXRhIHlvdSB3aXNoIHRvIHBhc3MuXHJcbiAgICovXHJcbiAgbWV0YT86IGFueTtcclxuICAvKipcclxuICAgKiBTdWJhY2NvdW50cyB0byBzcGxpdCBwYXltZW50IHdpdGhcclxuICAgKiBodHRwczovL2RldmVsb3Blci5mbHV0dGVyd2F2ZS5jb20vdjIuMC9kb2NzL3NwbGl0LXBheW1lbnRcclxuICAgKi9cclxuICBzdWJhY2NvdW50PzogeyBpZDogc3RyaW5nLCB0cmFuc2FjdGlvbl9zcGxpdF9yYXRpbzogc3RyaW5nIH1bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByaXZhdGVSYXZlT3B0aW9ucyBleHRlbmRzIFJhdmVPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBzdWNjZXNzZnVsIGNhcmQgY2hhcmdlLiBVc2Vyw6LCgMKZcyBjYW4gYWx3YXlzIGJlIHJlZGlyZWN0ZWQgdG8gYSBzdWNjZXNzZnVsIG9yXHJcbiAgICogZmFpbGVkIHBhZ2Ugc3VwcGxpZWQgYnkgdGhlIG1lcmNoYW50IGhlcmUgYmFzZWQgb24gcmVzcG9uc2VcclxuICAgKiBAcGFyYW0gcmVzcG9uc2U/OiBUaGUgc2VydmVyIHJlc3BvbnNlXHJcbiAgICovXHJcbiAgY2FsbGJhY2s6IChyZXNwb25zZT86IGFueSkgPT4gdm9pZDtcclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBwYXkgbW9kYWwgaXMgY2xvc2VkLlxyXG4gICAqL1xyXG4gIG9uY2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBwYXltZW50IGlzIGFib3V0IHRvIGJlZ2luXHJcbiAgICovXHJcbiAgaW5pdDogKCkgPT4gdm9pZDtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQW5ndWxhclJhdmVDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItcmF2ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbmd1bGFyUmF2ZURpcmVjdGl2ZSB9IGZyb20gJy4vYW5ndWxhci1yYXZlLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtdLFxyXG4gIGV4cG9ydHM6IFtBbmd1bGFyUmF2ZUNvbXBvbmVudCwgQW5ndWxhclJhdmVEaXJlY3RpdmVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJSYXZlQ29tcG9uZW50LCBBbmd1bGFyUmF2ZURpcmVjdGl2ZV0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJSYXZlTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJPdXRwdXQiLCJEaXJlY3RpdmUiLCJIb3N0TGlzdGVuZXIiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQXlDRTsyQkFOd0MsSUFBSUEsaUJBQVksRUFBUTs0QkFDckIsSUFBSUEsaUJBQVksRUFBVTt3QkFDOUIs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