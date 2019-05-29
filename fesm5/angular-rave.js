import { __extends, __awaiter, __generator } from 'tslib';
import { Component, EventEmitter, Input, Output, Directive, HostListener, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularRaveComponent = /** @class */ (function () {
    function AngularRaveComponent() {
        this.onclose = new EventEmitter();
        this.callback = new EventEmitter();
        this.init = new EventEmitter();
        this._raveOptions = {};
    }
    /**
     * @return {?}
     */
    AngularRaveComponent.prototype.pay = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
        { type: Component, args: [{
                    selector: 'angular-rave',
                    // tslint:disable-line
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    AngularRaveComponent.ctorParameters = function () { return []; };
    AngularRaveComponent.propDecorators = {
        "PBFPubKey": [{ type: Input },],
        "integrity_hash": [{ type: Input },],
        "txref": [{ type: Input },],
        "payment_method": [{ type: Input },],
        "amount": [{ type: Input },],
        "currency": [{ type: Input },],
        "country": [{ type: Input },],
        "payment_plan": [{ type: Input },],
        "customer_email": [{ type: Input },],
        "customer_phone": [{ type: Input },],
        "customer_firstname": [{ type: Input },],
        "customer_lastname": [{ type: Input },],
        "subaccount": [{ type: Input },],
        "pay_button_text": [{ type: Input },],
        "custom_title": [{ type: Input },],
        "custom_description": [{ type: Input },],
        "redirect_url": [{ type: Input },],
        "custom_logo": [{ type: Input },],
        "meta": [{ type: Input },],
        "raveOptions": [{ type: Input },],
        "onclose": [{ type: Output },],
        "callback": [{ type: Output },],
        "init": [{ type: Output },],
    };
    return AngularRaveComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularRaveDirective = /** @class */ (function () {
    function AngularRaveDirective() {
        this.raveOptions = {};
        this.onclose = new EventEmitter();
        this.callback = new EventEmitter();
        this.init = new EventEmitter();
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
        { type: Directive, args: [{
                    selector: '[angular-rave]' // tslint:disable-line
                },] },
    ];
    /** @nocollapse */
    AngularRaveDirective.ctorParameters = function () { return []; };
    AngularRaveDirective.propDecorators = {
        "PBFPubKey": [{ type: Input },],
        "integrity_hash": [{ type: Input },],
        "txref": [{ type: Input },],
        "payment_method": [{ type: Input },],
        "amount": [{ type: Input },],
        "currency": [{ type: Input },],
        "country": [{ type: Input },],
        "payment_plan": [{ type: Input },],
        "customer_email": [{ type: Input },],
        "customer_phone": [{ type: Input },],
        "customer_firstname": [{ type: Input },],
        "customer_lastname": [{ type: Input },],
        "pay_button_text": [{ type: Input },],
        "custom_title": [{ type: Input },],
        "subaccount": [{ type: Input },],
        "custom_description": [{ type: Input },],
        "redirect_url": [{ type: Input },],
        "custom_logo": [{ type: Input },],
        "meta": [{ type: Input },],
        "raveOptions": [{ type: Input },],
        "onclose": [{ type: Output },],
        "callback": [{ type: Output },],
        "init": [{ type: Output },],
        "buttonClick": [{ type: HostListener, args: ['click',] },],
    };
    return AngularRaveDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RaveOptions = /** @class */ (function () {
    function RaveOptions() {
    }
    return RaveOptions;
}());
var PrivateRaveOptions = /** @class */ (function (_super) {
    __extends(PrivateRaveOptions, _super);
    function PrivateRaveOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PrivateRaveOptions;
}(RaveOptions));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularRaveModule = /** @class */ (function () {
    function AngularRaveModule() {
    }
    AngularRaveModule.decorators = [
        { type: NgModule, args: [{
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

export { RaveOptions, AngularRaveComponent, AngularRaveDirective, AngularRaveModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvYW5ndWxhci1yYXZlLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1yYXZlL2xpYi9yYXZlLW9wdGlvbnMudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvYW5ndWxhci1yYXZlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByaXZhdGVSYXZlT3B0aW9ucyB9IGZyb20gJy4vcmF2ZS1vcHRpb25zJztcclxuXHJcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgZ2V0cGFpZFNldHVwOiAocmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPikgPT4gdm9pZDtcclxufVxyXG5cclxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW5ndWxhci1yYXZlJywgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgUEJGUHViS2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW50ZWdyaXR5X2hhc2g6IHN0cmluZztcclxuICBASW5wdXQoKSB0eHJlZjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBheW1lbnRfbWV0aG9kOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcclxuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF5bWVudF9wbGFuOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfZW1haWw6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21lcl9waG9uZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3ViYWNjb3VudDogeyBpZDogc3RyaW5nLCB0cmFuc2FjdGlvbl9zcGxpdF9yYXRpbzogc3RyaW5nIH1bXTtcclxuICBASW5wdXQoKSBwYXlfYnV0dG9uX3RleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fZGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSByZWRpcmVjdF91cmw6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fbG9nbzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1ldGE6IGFueTtcclxuICBASW5wdXQoKSByYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+O1xyXG4gIEBPdXRwdXQoKSBvbmNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xyXG4gIEBPdXRwdXQoKSBpbml0OiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xyXG4gIHByaXZhdGUgX3JhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz4gPSB7fTtcclxuICBwcml2YXRlIHBheW1lbnRTZXR1cDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBhc3luYyBwYXkoKSB7XHJcbiAgICBpZiAodGhpcy5pbml0KSB7XHJcbiAgICAgIHRoaXMuaW5pdC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRTY3JpcHQoKTtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBQbGVhc2UgdmVyaWZ5IHRoYXQgeW91IGltcG9ydGVkIHJhdmVcXCdzIHNjcmlwdCBpbnRvIHlvdXIgaW5kZXguaHRtbCcpO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgdGhlIHJhdmVvcHRpb25zIElucHV0IGlzIHByZXNlbnQgdGhlbiB1c2UgaXRcclxuICAgIGlmICh0aGlzLnJhdmVPcHRpb25zICYmIE9iamVjdC5rZXlzKHRoaXMucmF2ZU9wdGlvbnMpLmxlbmd0aCA+IDMpIHtcclxuICAgICAgaWYgKHRoaXMudmFsaWRhdGVPcHRpb25zKCkpIHtcclxuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5yYXZlT3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlSW5wdXQoKSkge1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0UmF2ZU9wdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5fcmF2ZU9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnNlcnRSYXZlT3B0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLmFtb3VudCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5hbW91bnQgPSB0aGlzLmFtb3VudDsgfVxyXG4gICAgaWYgKHRoaXMuUEJGUHViS2V5KSB7IHRoaXMuX3JhdmVPcHRpb25zLlBCRlB1YktleSA9IHRoaXMuUEJGUHViS2V5OyB9XHJcbiAgICBpZiAodGhpcy5wYXltZW50X21ldGhvZCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X21ldGhvZCA9IHRoaXMucGF5bWVudF9tZXRob2Q7IH1cclxuICAgIGlmICh0aGlzLnJlZGlyZWN0X3VybCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5yZWRpcmVjdF91cmwgPSB0aGlzLnJlZGlyZWN0X3VybDsgfVxyXG4gICAgaWYgKHRoaXMuaW50ZWdyaXR5X2hhc2gpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuaW50ZWdyaXR5X2hhc2ggPSB0aGlzLmludGVncml0eV9oYXNoOyB9XHJcbiAgICBpZiAodGhpcy5wYXlfYnV0dG9uX3RleHQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMucGF5X2J1dHRvbl90ZXh0ID0gdGhpcy5wYXlfYnV0dG9uX3RleHQ7IH1cclxuICAgIGlmICh0aGlzLmNvdW50cnkpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY291bnRyeSA9IHRoaXMuY291bnRyeTsgfVxyXG4gICAgaWYgKHRoaXMucGF5bWVudF9wbGFuKSB7IHRoaXMuX3JhdmVPcHRpb25zLnBheW1lbnRfcGxhbiA9IHRoaXMucGF5bWVudF9wbGFuOyB9XHJcbiAgICBpZiAodGhpcy5jdXJyZW5jeSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXJyZW5jeSA9IHRoaXMuY3VycmVuY3k7IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbikgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fZGVzY3JpcHRpb24gPSB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbjsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJfZW1haWwpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgPSB0aGlzLmN1c3RvbWVyX2VtYWlsOyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21fbG9nbykgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fbG9nbyA9IHRoaXMuY3VzdG9tX2xvZ287IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbV90aXRsZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fdGl0bGUgPSB0aGlzLmN1c3RvbV90aXRsZTsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lKSB7IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2ZpcnN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lOyB9XHJcbiAgICBpZiAodGhpcy5zdWJhY2NvdW50KSB7IHRoaXMuX3JhdmVPcHRpb25zLnN1YmFjY291bnQgPSB0aGlzLnN1YmFjY291bnQ7IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbWVyX2xhc3RuYW1lKSB7IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2xhc3RuYW1lID0gdGhpcy5jdXN0b21lcl9sYXN0bmFtZTsgfVxyXG4gICAgaWYgKHRoaXMudHhyZWYpIHsgdGhpcy5fcmF2ZU9wdGlvbnMudHhyZWYgPSB0aGlzLnR4cmVmOyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21lcl9waG9uZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSA9IHRoaXMuY3VzdG9tZXJfcGhvbmU7IH1cclxuICAgIGlmICh0aGlzLm9uY2xvc2UpIHsgdGhpcy5fcmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KCk7IH1cclxuICAgIGlmICh0aGlzLmluaXQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuaW5pdCA9ICgpID0+IHRoaXMuaW5pdC5lbWl0KCk7IH1cclxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMuX3JhdmVPcHRpb25zLmNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMub25jbG9zZS5lbWl0KHJlcyk7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRTY3JpcHQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICBjb25zdCBvbkxvYWRGdW5jID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9O1xyXG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xyXG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9yYXZlc2FuZGJveGFwaS5mbHV0dGVyd2F2ZS5jb20vZmx3djMtcHVnL2dldHBhaWR4L2FwaS9mbHdwYmYtaW5saW5lLmpzJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlT3B0aW9ucygpIHtcclxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy5QQkZQdWJLZXkpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoISh0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUpKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLnR4cmVmKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuYW1vdW50KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrLm9ic2VydmVycy5sZW5ndGgpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogWW91IHNob3VsZCBhdHRhY2ggdG8gY2FsbGJhY2sgdG8gdmVyaWZ5IHlvdXIgdHJhbnNhY3Rpb24nKTsgfVxyXG4gICAgdGhpcy5yYXZlT3B0aW9ucy5jYWxsYmFjayA9IHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuY2FsbGJhY2suZW1pdChyZXMpO1xyXG4gICAgICB0aGlzLnBheW1lbnRTZXR1cC5jbG9zZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVJbnB1dCgpIHtcclxuICAgIGlmICghdGhpcy5QQkZQdWJLZXkpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoISh0aGlzLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMuY3VzdG9tZXJfcGhvbmUpKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMudHhyZWYpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5hbW91bnQpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2spIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogWW91IHNob3VsZCBhdHRhY2ggdG8gY2FsbGJhY2sgdG8gdmVyaWZ5IHlvdXIgdHJhbnNhY3Rpb24nKTsgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGF5KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFByaXZhdGVSYXZlT3B0aW9ucyB9IGZyb20gJy4vcmF2ZS1vcHRpb25zJztcclxuXHJcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgZ2V0cGFpZFNldHVwOiAocmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPikgPT4gdm9pZDtcclxufVxyXG5cclxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FuZ3VsYXItcmF2ZV0nIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJSYXZlRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSBQQkZQdWJLZXk6IHN0cmluZztcclxuICBASW5wdXQoKSBpbnRlZ3JpdHlfaGFzaDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHR4cmVmOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF5bWVudF9tZXRob2Q6IHN0cmluZztcclxuICBASW5wdXQoKSBhbW91bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcclxuICBASW5wdXQoKSBwYXltZW50X3BsYW46IG51bWJlcjtcclxuICBASW5wdXQoKSBjdXN0b21lcl9lbWFpbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX3Bob25lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfZmlyc3RuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfbGFzdG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwYXlfYnV0dG9uX3RleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzdWJhY2NvdW50OiB7IGlkOiBzdHJpbmcsIHRyYW5zYWN0aW9uX3NwbGl0X3JhdGlvOiBzdHJpbmcgfVtdO1xyXG4gIEBJbnB1dCgpIGN1c3RvbV9kZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJlZGlyZWN0X3VybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbV9sb2dvOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWV0YTogYW55O1xyXG4gIEBJbnB1dCgpIHJhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz4gPSB7fTtcclxuICBAT3V0cHV0KCkgb25jbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgaW5pdDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcclxuICBwcml2YXRlIF9yYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+ID0ge307XHJcbiAgcHJpdmF0ZSBwYXltZW50U2V0dXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBidXR0b25DbGljaygpIHtcclxuICAgIHRoaXMucGF5KCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBwYXkoKSB7XHJcbiAgICBpZiAodGhpcy5pbml0KSB7XHJcbiAgICAgIHRoaXMuaW5pdC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRTY3JpcHQoKTtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBQbGVhc2UgdmVyaWZ5IHRoYXQgeW91IGltcG9ydGVkIHJhdmVcXCdzIHNjcmlwdCBpbnRvIHlvdXIgaW5kZXguaHRtbCcpO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgdGhlIHJhdmVvcHRpb25zIElucHV0IGlzIHByZXNlbnQgdGhlbiB1c2VcclxuICAgIGlmICh0aGlzLnJhdmVPcHRpb25zICYmIE9iamVjdC5rZXlzKHRoaXMucmF2ZU9wdGlvbnMpLmxlbmd0aCA+IDMpIHtcclxuICAgICAgaWYgKHRoaXMudmFsaWRhdGVPcHRpb25zKCkpIHtcclxuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5yYXZlT3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlSW5wdXQoKSkge1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0UmF2ZU9wdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5fcmF2ZU9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnNlcnRSYXZlT3B0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLmFtb3VudCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5hbW91bnQgPSB0aGlzLmFtb3VudDsgfVxyXG4gICAgaWYgKHRoaXMuUEJGUHViS2V5KSB7IHRoaXMuX3JhdmVPcHRpb25zLlBCRlB1YktleSA9IHRoaXMuUEJGUHViS2V5OyB9XHJcbiAgICBpZiAodGhpcy5wYXltZW50X21ldGhvZCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X21ldGhvZCA9IHRoaXMucGF5bWVudF9tZXRob2Q7IH1cclxuICAgIGlmICh0aGlzLnJlZGlyZWN0X3VybCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5yZWRpcmVjdF91cmwgPSB0aGlzLnJlZGlyZWN0X3VybDsgfVxyXG4gICAgaWYgKHRoaXMuaW50ZWdyaXR5X2hhc2gpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuaW50ZWdyaXR5X2hhc2ggPSB0aGlzLmludGVncml0eV9oYXNoOyB9XHJcbiAgICBpZiAodGhpcy5wYXlfYnV0dG9uX3RleHQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMucGF5X2J1dHRvbl90ZXh0ID0gdGhpcy5wYXlfYnV0dG9uX3RleHQ7IH1cclxuICAgIGlmICh0aGlzLmNvdW50cnkpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY291bnRyeSA9IHRoaXMuY291bnRyeTsgfVxyXG4gICAgaWYgKHRoaXMucGF5bWVudF9wbGFuKSB7IHRoaXMuX3JhdmVPcHRpb25zLnBheW1lbnRfcGxhbiA9IHRoaXMucGF5bWVudF9wbGFuOyB9XHJcbiAgICBpZiAodGhpcy5jdXJyZW5jeSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXJyZW5jeSA9IHRoaXMuY3VycmVuY3k7IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbikgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fZGVzY3JpcHRpb24gPSB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbjsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJfZW1haWwpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgPSB0aGlzLmN1c3RvbWVyX2VtYWlsOyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21fbG9nbykgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fbG9nbyA9IHRoaXMuY3VzdG9tX2xvZ287IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbV90aXRsZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fdGl0bGUgPSB0aGlzLmN1c3RvbV90aXRsZTsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lKSB7IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2ZpcnN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lOyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21lcl9sYXN0bmFtZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9sYXN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWU7IH1cclxuICAgIGlmICh0aGlzLnN1YmFjY291bnQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuc3ViYWNjb3VudCA9IHRoaXMuc3ViYWNjb3VudDsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJfcGhvbmUpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUgPSB0aGlzLmN1c3RvbWVyX3Bob25lOyB9XHJcbiAgICBpZiAodGhpcy50eHJlZikgeyB0aGlzLl9yYXZlT3B0aW9ucy50eHJlZiA9IHRoaXMudHhyZWY7IH1cclxuICAgIGlmICh0aGlzLmluaXQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuaW5pdCA9ICgpID0+IHRoaXMuaW5pdC5lbWl0KCk7IH1cclxuICAgIGlmICh0aGlzLm9uY2xvc2UpIHsgdGhpcy5fcmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KCk7IH1cclxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMuX3JhdmVPcHRpb25zLmNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMub25jbG9zZS5lbWl0KHJlcyk7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlT3B0aW9ucygpIHtcclxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy5QQkZQdWJLZXkpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoISh0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUpKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLnR4cmVmKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuYW1vdW50KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrLm9ic2VydmVycy5sZW5ndGgpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogWW91IHNob3VsZCBhdHRhY2ggdG8gY2FsbGJhY2sgdG8gdmVyaWZ5IHlvdXIgdHJhbnNhY3Rpb24nKTsgfVxyXG4gICAgaWYgKHRoaXMub25jbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7IHRoaXMucmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KCk7IH1cclxuICAgIHRoaXMucmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSByZXMgPT4ge1xyXG4gICAgICB0aGlzLmNhbGxiYWNrLmVtaXQocmVzKTtcclxuICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGxvYWRTY3JpcHQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICBjb25zdCBvbkxvYWRGdW5jID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9O1xyXG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xyXG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9yYXZlc2FuZGJveGFwaS5mbHV0dGVyd2F2ZS5jb20vZmx3djMtcHVnL2dldHBhaWR4L2FwaS9mbHdwYmYtaW5saW5lLmpzJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlSW5wdXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCEodGhpcy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLmN1c3RvbWVyX3Bob25lKSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLnR4cmVmKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMuYW1vdW50KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJhdmVPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBZb3VyIG1lcmNoYW50IHB1YmxpYyBrZXkgcHJvdmlkZWQgd2hlbiB5b3UgY3JlYXRlIGEgYnV0dG9uXHJcbiAgICovXHJcbiAgUEJGUHViS2V5OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRW1haWwgb2YgdGhlIGN1c3RvbWVyXHJcbiAgICovXHJcbiAgY3VzdG9tZXJfZW1haWw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxyXG4gICAqL1xyXG4gIGN1c3RvbWVyX2ZpcnN0bmFtZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBmaXJzdG5hbWUgb2YgdGhlIGN1c3RvbWVyXHJcbiAgICovXHJcbiAgY3VzdG9tZXJfbGFzdG5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgYXMgYSBzaG9ydCBtb2RhbCBkZXNjcmlwdGlvblxyXG4gICAqL1xyXG4gIGN1c3RvbV9kZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAvKipcclxuICAgKiBMaW5rIHRvIHlvdXIgY3VzdG9tIGltYWdlXHJcbiAgICovXHJcbiAgY3VzdG9tX2xvZ28/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgYXMgdGhlIHRpdGxlIG9mIHRoZSBwYXltZW50IG1vZGFsXHJcbiAgICovXHJcbiAgY3VzdG9tX3RpdGxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEFtb3VudCB0byBjaGFyZ2VcclxuICAgKi9cclxuICBhbW91bnQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBwaG9uZSBudW1iZXIgb2YgdGhlIGN1c3RvbWVyXHJcbiAgICovXHJcbiAgY3VzdG9tZXJfcGhvbmU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVVJMIHRvIHJlZGlyZWN0IHRvIHdoZW4gdHJhbnNhY3Rpb24gaXMgY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIHJlZGlyZWN0X3VybD86IHN0cmluZztcclxuICAvKipcclxuICAgKiByb3V0ZSBjb3VudHJ5LiBEZWZhdWx0IE5HXHJcbiAgICovXHJcbiAgY291bnRyeT86IHN0cmluZztcclxuXHJcbiAgcGF5bWVudF9wbGFuPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGN1cnJlbmN5IHRvIGNoYXJnZSB0aGUgY2FyZCBpbi4gRGVmYXVsdCBcIk5HTlwiXHJcbiAgICovXHJcbiAgY3VycmVuY3k/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBhbGxvd3MgeW91IHNlbGVjdCB0aGUgcGF5bWVudCBvcHRpb24geW91IHdhbnQgZm9yIHlvdXIgdXNlcnMsIHBvc3NpYmxlIHZhbHVlcyBhcmUgY2FyZCwgYWNjb3VudCBvciBib3RoXHJcbiAgICovXHJcbiAgcGF5bWVudF9tZXRob2Q/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIFJhdmUgQ2hlY2tvdXQgQnV0dG9uXHJcbiAgICovXHJcbiAgcGF5X2J1dHRvbl90ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgcHJvdmlkZWQgYnkgdGhlIG1lcmNoYW50XHJcbiAgICovXHJcbiAgdHhyZWY6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGEgc2hhMjU2IGhhc2ggb2YgeW91ciBnZXRwYWlkU2V0dXAgdmFsdWVzLCBpdCBpcyB1c2VkIGZvciBwYXNzaW5nIHNlY3VyZWQgdmFsdWVzIHRvIHRoZSBwYXltZW50IGdhdGV3YXlcclxuICAgKi9cclxuICBpbnRlZ3JpdHlfaGFzaD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGUgdmFsdWUgdG8gYmUgcGFzc2VkIGZvciB0aGlzIGlzIDEuIFRoaXMgaXMgdXNlZnVsIHdoZW4gY3VzdG9tZXIgaXMgdXNpbmcgYW4gb3BlcmEgYnJvd3NlciwgaXRcclxuICAgKiB3b3VsZCBsb2FkIHRoZSBwYXltZW50IG1vZGFsIG9uIGEgbmV3IHBhZ2UuXHJcbiAgICovXHJcbiAgaG9zdGVkX3BheW1lbnQ/OiAxO1xyXG4gIC8qKlxyXG4gICAqIEFueSBvdGhlciBjdXN0b20gZGF0YSB5b3Ugd2lzaCB0byBwYXNzLlxyXG4gICAqL1xyXG4gIG1ldGE/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogU3ViYWNjb3VudHMgdG8gc3BsaXQgcGF5bWVudCB3aXRoXHJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIuZmx1dHRlcndhdmUuY29tL3YyLjAvZG9jcy9zcGxpdC1wYXltZW50XHJcbiAgICovXHJcbiAgc3ViYWNjb3VudD86IHsgaWQ6IHN0cmluZywgdHJhbnNhY3Rpb25fc3BsaXRfcmF0aW86IHN0cmluZyB9W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YXRlUmF2ZU9wdGlvbnMgZXh0ZW5kcyBSYXZlT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gc3VjY2Vzc2Z1bCBjYXJkIGNoYXJnZS4gVXNlcsOiwoDCmXMgY2FuIGFsd2F5cyBiZSByZWRpcmVjdGVkIHRvIGEgc3VjY2Vzc2Z1bCBvclxyXG4gICAqIGZhaWxlZCBwYWdlIHN1cHBsaWVkIGJ5IHRoZSBtZXJjaGFudCBoZXJlIGJhc2VkIG9uIHJlc3BvbnNlXHJcbiAgICogQHBhcmFtIHJlc3BvbnNlPzogVGhlIHNlcnZlciByZXNwb25zZVxyXG4gICAqL1xyXG4gIGNhbGxiYWNrOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgcGF5IG1vZGFsIGlzIGNsb3NlZC5cclxuICAgKi9cclxuICBvbmNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gcGF5bWVudCBpcyBhYm91dCB0byBiZWdpblxyXG4gICAqL1xyXG4gIGluaXQ6ICgpID0+IHZvaWQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFuZ3VsYXJSYXZlQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLXJhdmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQW5ndWxhclJhdmVEaXJlY3RpdmUgfSBmcm9tICcuL2FuZ3VsYXItcmF2ZS5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXSxcclxuICBleHBvcnRzOiBbQW5ndWxhclJhdmVDb21wb25lbnQsIEFuZ3VsYXJSYXZlRGlyZWN0aXZlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtBbmd1bGFyUmF2ZUNvbXBvbmVudCwgQW5ndWxhclJhdmVEaXJlY3RpdmVdLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZU1vZHVsZSB7IH1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQXlDRTt1QkFOd0MsSUFBSSxZQUFZLEVBQVE7d0JBQ3JCLElBQUksWUFBWSxFQUFVO29CQUM5QixJQUFJLFlBQVksRUFBVTs0QkFDYixFQUFFO0tBR3JDOzs7O0lBRVgsa0NBQUc7OztJQUFUOzs7Ozt3QkFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7NEJBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzt5QkFDbEI7d0JBQ0QscUJBQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBdkIsU0FBdUIsQ0FBQzt3QkFDeEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxZQUFZLEtBQUssVUFBVSxFQUFFOzRCQUM3QyxzQkFBTyxPQUFPLENBQUMsS0FBSyxDQUFDLG1GQUFtRixDQUFDLEVBQUM7eUJBQzNHOzt3QkFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDaEUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUU7Z0NBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7NkJBQzNEO3lCQUNGOzZCQUFNOzRCQUNMLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO2dDQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQ0FDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs2QkFDNUQ7eUJBQ0Y7Ozs7O0tBQ0Y7Ozs7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