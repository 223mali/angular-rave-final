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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvYW5ndWxhci1yYXZlLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1yYXZlL2xpYi9yYXZlLW9wdGlvbnMudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvYW5ndWxhci1yYXZlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByaXZhdGVSYXZlT3B0aW9ucyB9IGZyb20gJy4vcmF2ZS1vcHRpb25zJztcclxuXHJcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgZ2V0cGFpZFNldHVwOiAocmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPikgPT4gdm9pZDtcclxufVxyXG5cclxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW5ndWxhci1yYXZlJywgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgUEJGUHViS2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW50ZWdyaXR5X2hhc2g6IHN0cmluZztcclxuICBASW5wdXQoKSB0eHJlZjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBheW1lbnRfbWV0aG9kOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcclxuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF5bWVudF9wbGFuOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfZW1haWw6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21lcl9waG9uZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3ViYWNjb3VudDogeyBpZDogc3RyaW5nLCB0cmFuc2FjdGlvbl9zcGxpdF9yYXRpbzogc3RyaW5nIH1bXTtcclxuICBASW5wdXQoKSBwYXlfYnV0dG9uX3RleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fZGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSByZWRpcmVjdF91cmw6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fbG9nbzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1ldGE6IGFueTtcclxuICBASW5wdXQoKSByYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+O1xyXG4gIEBPdXRwdXQoKSBvbmNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xyXG4gIEBPdXRwdXQoKSBpbml0OiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xyXG4gIHByaXZhdGUgX3JhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz4gPSB7fTtcclxuICBwcml2YXRlIHBheW1lbnRTZXR1cDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBhc3luYyBwYXkoKSB7XHJcbiAgICBpZiAodGhpcy5pbml0KSB7XHJcbiAgICAgIHRoaXMuaW5pdC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRTY3JpcHQoKTtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBQbGVhc2UgdmVyaWZ5IHRoYXQgeW91IGltcG9ydGVkIHJhdmVcXCdzIHNjcmlwdCBpbnRvIHlvdXIgaW5kZXguaHRtbCcpO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgdGhlIHJhdmVvcHRpb25zIElucHV0IGlzIHByZXNlbnQgdGhlbiB1c2UgaXRcclxuICAgIGlmICh0aGlzLnJhdmVPcHRpb25zICYmIE9iamVjdC5rZXlzKHRoaXMucmF2ZU9wdGlvbnMpLmxlbmd0aCA+IDMpIHtcclxuICAgICAgaWYgKHRoaXMudmFsaWRhdGVPcHRpb25zKCkpIHtcclxuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5yYXZlT3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlSW5wdXQoKSkge1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0UmF2ZU9wdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5fcmF2ZU9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnNlcnRSYXZlT3B0aW9ucygpIHtcclxuICAgIHRoaXMuYW1vdW50ID8gdGhpcy5fcmF2ZU9wdGlvbnMuYW1vdW50ID0gdGhpcy5hbW91bnQgOiBudWxsXHJcbiAgICB0aGlzLnBheW1lbnRfcGxhbiA/IHRoaXMuX3JhdmVPcHRpb25zLnBheW1lbnRfcGxhbiA9IHRoaXMucGF5bWVudF9wbGFuIDogbnVsbFxyXG4gICAgdGhpcy5QQkZQdWJLZXkgPyB0aGlzLl9yYXZlT3B0aW9ucy5QQkZQdWJLZXkgPSB0aGlzLlBCRlB1YktleSA6IG51bGxcclxuICAgIHRoaXMucGF5bWVudF9tZXRob2QgPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X21ldGhvZCA9IHRoaXMucGF5bWVudF9tZXRob2QgOiBudWxsXHJcbiAgICB0aGlzLnJlZGlyZWN0X3VybCA/IHRoaXMuX3JhdmVPcHRpb25zLnJlZGlyZWN0X3VybCA9IHRoaXMucmVkaXJlY3RfdXJsIDogbnVsbFxyXG4gICAgdGhpcy5pbnRlZ3JpdHlfaGFzaCA/IHRoaXMuX3JhdmVPcHRpb25zLmludGVncml0eV9oYXNoID0gdGhpcy5pbnRlZ3JpdHlfaGFzaCA6IG51bGxcclxuICAgIHRoaXMucGF5X2J1dHRvbl90ZXh0ID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5X2J1dHRvbl90ZXh0ID0gdGhpcy5wYXlfYnV0dG9uX3RleHQgOiBudWxsXHJcbiAgICB0aGlzLmNvdW50cnkgPyB0aGlzLl9yYXZlT3B0aW9ucy5jb3VudHJ5ID0gdGhpcy5jb3VudHJ5IDogbnVsbFxyXG4gICAgdGhpcy5jdXJyZW5jeSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1cnJlbmN5ID0gdGhpcy5jdXJyZW5jeSA6IG51bGxcclxuICAgIHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2Rlc2NyaXB0aW9uID0gdGhpcy5jdXN0b21fZGVzY3JpcHRpb24gOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbWVyX2VtYWlsID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgPSB0aGlzLmN1c3RvbWVyX2VtYWlsIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21fbG9nbyA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV9sb2dvID0gdGhpcy5jdXN0b21fbG9nbyA6IG51bGxcclxuICAgIHRoaXMuY3VzdG9tX3RpdGxlID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX3RpdGxlID0gdGhpcy5jdXN0b21fdGl0bGUgOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2ZpcnN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21lcl9sYXN0bmFtZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2xhc3RuYW1lID0gdGhpcy5jdXN0b21lcl9sYXN0bmFtZSA6IG51bGxcclxuICAgIHRoaXMudHhyZWYgPyB0aGlzLl9yYXZlT3B0aW9ucy50eHJlZiA9IHRoaXMudHhyZWYgOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbWVyX3Bob25lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUgPSB0aGlzLmN1c3RvbWVyX3Bob25lIDogbnVsbFxyXG4gICAgdGhpcy5vbmNsb3NlID8gdGhpcy5fcmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHt0aGlzLm9uY2xvc2UuZW1pdCgpOyB0aGlzLnBheW1lbnRTZXR1cC5jbG9zZSgpfSA6IG51bGxcclxuICAgIHRoaXMuY2FsbGJhY2sgPyB0aGlzLl9yYXZlT3B0aW9ucy5jYWxsYmFjayA9IChyZXMpID0+IHRoaXMub25jbG9zZS5lbWl0KHJlcykgOiBudWxsXHJcbiAgfVxyXG5cclxuICBsb2FkU2NyaXB0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgY29uc3Qgb25Mb2FkRnVuYyA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfTtcclxuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcclxuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vcmF2ZXNhbmRib3hhcGkuZmx1dHRlcndhdmUuY29tL2Zsd3YzLXB1Zy9nZXRwYWlkeC9hcGkvZmx3cGJmLWlubGluZS5qcycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZU9wdGlvbnMoKSB7XHJcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCEodGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lKSkge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy50eHJlZikgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLmFtb3VudCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cclxuICAgIGlmICh0aGlzLm9uY2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkgdGhpcy5yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4gdGhpcy5vbmNsb3NlLmVtaXQoKTtcclxuICAgIHRoaXMucmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSByZXMgPT4ge1xyXG4gICAgICB0aGlzLmNhbGxiYWNrLmVtaXQocmVzKTtcclxuICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlSW5wdXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCEodGhpcy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLmN1c3RvbWVyX3Bob25lKSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLnR4cmVmKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMuYW1vdW50KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBheSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQcml2YXRlUmF2ZU9wdGlvbnMgfSBmcm9tICcuL3JhdmUtb3B0aW9ucyc7XHJcblxyXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xyXG4gIGdldHBhaWRTZXR1cDogKHJhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thbmd1bGFyLXJhdmVdJyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZURpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgUEJGUHViS2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW50ZWdyaXR5X2hhc2g6IHN0cmluZztcclxuICBASW5wdXQoKSB0eHJlZjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBheW1lbnRfbWV0aG9kOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcclxuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF5bWVudF9wbGFuOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfZW1haWw6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21lcl9waG9uZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF5X2J1dHRvbl90ZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tX3RpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3ViYWNjb3VudDogeyBpZDogc3RyaW5nLCB0cmFuc2FjdGlvbl9zcGxpdF9yYXRpbzogc3RyaW5nIH1bXTtcclxuICBASW5wdXQoKSBjdXN0b21fZGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSByZWRpcmVjdF91cmw6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fbG9nbzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1ldGE6IGFueTtcclxuICBASW5wdXQoKSByYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+ID0ge307XHJcbiAgQE91dHB1dCgpIG9uY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgY2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGluaXQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XHJcbiAgcHJpdmF0ZSBfcmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPiA9IHt9O1xyXG4gIHByaXZhdGUgcGF5bWVudFNldHVwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgYnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLnBheSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcGF5KCkge1xyXG4gICAgaWYgKHRoaXMuaW5pdCkge1xyXG4gICAgICB0aGlzLmluaXQuZW1pdCgpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgdGhpcy5sb2FkU2NyaXB0KCk7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogUGxlYXNlIHZlcmlmeSB0aGF0IHlvdSBpbXBvcnRlZCByYXZlXFwncyBzY3JpcHQgaW50byB5b3VyIGluZGV4Lmh0bWwnKTtcclxuICAgIH1cclxuICAgIC8vIElmIHRoZSByYXZlb3B0aW9ucyBJbnB1dCBpcyBwcmVzZW50IHRoZW4gdXNlXHJcbiAgICBpZiAodGhpcy5yYXZlT3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLnJhdmVPcHRpb25zKS5sZW5ndGggPiAzKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlT3B0aW9ucygpKSB7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMucmF2ZU9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUlucHV0KCkpIHtcclxuICAgICAgICB0aGlzLmluc2VydFJhdmVPcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMuX3JhdmVPcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5zZXJ0UmF2ZU9wdGlvbnMoKSB7XHJcbiAgICB0aGlzLmFtb3VudCA/IHRoaXMuX3JhdmVPcHRpb25zLmFtb3VudCA9IHRoaXMuYW1vdW50IDogbnVsbFxyXG4gICAgdGhpcy5wYXltZW50X3BsYW4gPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X3BsYW4gPSB0aGlzLnBheW1lbnRfcGxhbiA6IG51bGxcclxuICAgIHRoaXMuUEJGUHViS2V5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuUEJGUHViS2V5ID0gdGhpcy5QQkZQdWJLZXkgOiBudWxsXHJcbiAgICB0aGlzLnBheW1lbnRfbWV0aG9kID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5bWVudF9tZXRob2QgPSB0aGlzLnBheW1lbnRfbWV0aG9kIDogbnVsbFxyXG4gICAgdGhpcy5yZWRpcmVjdF91cmwgPyB0aGlzLl9yYXZlT3B0aW9ucy5yZWRpcmVjdF91cmwgPSB0aGlzLnJlZGlyZWN0X3VybCA6IG51bGxcclxuICAgIHRoaXMuaW50ZWdyaXR5X2hhc2ggPyB0aGlzLl9yYXZlT3B0aW9ucy5pbnRlZ3JpdHlfaGFzaCA9IHRoaXMuaW50ZWdyaXR5X2hhc2ggOiBudWxsXHJcbiAgICB0aGlzLnBheV9idXR0b25fdGV4dCA/IHRoaXMuX3JhdmVPcHRpb25zLnBheV9idXR0b25fdGV4dCA9IHRoaXMucGF5X2J1dHRvbl90ZXh0IDogbnVsbFxyXG4gICAgdGhpcy5jb3VudHJ5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY291bnRyeSA9IHRoaXMuY291bnRyeSA6IG51bGxcclxuICAgIHRoaXMuY3VycmVuY3kgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXJyZW5jeSA9IHRoaXMuY3VycmVuY3kgOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbiA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV9kZXNjcmlwdGlvbiA9IHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21lcl9lbWFpbCA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsID0gdGhpcy5jdXN0b21lcl9lbWFpbCA6IG51bGxcclxuICAgIHRoaXMuY3VzdG9tX2xvZ28gPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fbG9nbyA9IHRoaXMuY3VzdG9tX2xvZ28gOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbV90aXRsZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV90aXRsZSA9IHRoaXMuY3VzdG9tX3RpdGxlIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21lcl9maXJzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9maXJzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA6IG51bGxcclxuICAgIHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9sYXN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbWVyX3Bob25lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUgPSB0aGlzLmN1c3RvbWVyX3Bob25lIDogbnVsbFxyXG4gICAgdGhpcy50eHJlZiA/IHRoaXMuX3JhdmVPcHRpb25zLnR4cmVmID0gdGhpcy50eHJlZiA6IG51bGxcclxuICAgIHRoaXMub25jbG9zZSA/IHRoaXMuX3JhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMub25jbG9zZS5lbWl0KClcclxuICAgIH0gOiBudWxsXHJcbiAgICB0aGlzLmNhbGxiYWNrID8gdGhpcy5fcmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSByZXMgPT4ge1xyXG4gICAgICB0aGlzLmNhbGxiYWNrLmVtaXQocmVzKTtcclxuICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcclxuICAgIH0gOiBudWxsXHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZU9wdGlvbnMoKSB7XHJcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCEodGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lKSkge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy50eHJlZikgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLmFtb3VudCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cclxuICAgIGlmICh0aGlzLm9uY2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkgeyB0aGlzLnJhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB0aGlzLm9uY2xvc2UuZW1pdCgpOyB9XHJcbiAgICB0aGlzLnJhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHtcclxuICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KHJlcyk7XHJcbiAgICAgIHRoaXMucGF5bWVudFNldHVwLmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBsb2FkU2NyaXB0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgY29uc3Qgb25Mb2FkRnVuYyA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfTtcclxuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcclxuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vcmF2ZXNhbmRib3hhcGkuZmx1dHRlcndhdmUuY29tL2Zsd3YzLXB1Zy9nZXRwYWlkeC9hcGkvZmx3cGJmLWlubGluZS5qcycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUlucHV0KCkge1xyXG4gICAgaWYgKCF0aGlzLlBCRlB1YktleSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghKHRoaXMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5jdXN0b21lcl9waG9uZSkpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy50eHJlZikgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmFtb3VudCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5jYWxsYmFjaykgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvbicpOyB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBSYXZlT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogWW91ciBtZXJjaGFudCBwdWJsaWMga2V5IHByb3ZpZGVkIHdoZW4geW91IGNyZWF0ZSBhIGJ1dHRvblxyXG4gICAqL1xyXG4gIFBCRlB1YktleTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEVtYWlsIG9mIHRoZSBjdXN0b21lclxyXG4gICAqL1xyXG4gIGN1c3RvbWVyX2VtYWlsPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEZpcnN0bmFtZSBvZiB0aGUgY3VzdG9tZXJcclxuICAgKi9cclxuICBjdXN0b21lcl9maXJzdG5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogZmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxyXG4gICAqL1xyXG4gIGN1c3RvbWVyX2xhc3RuYW1lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIGEgc2hvcnQgbW9kYWwgZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBjdXN0b21fZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTGluayB0byB5b3VyIGN1c3RvbSBpbWFnZVxyXG4gICAqL1xyXG4gIGN1c3RvbV9sb2dvPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSB0aXRsZSBvZiB0aGUgcGF5bWVudCBtb2RhbFxyXG4gICAqL1xyXG4gIGN1c3RvbV90aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBBbW91bnQgdG8gY2hhcmdlXHJcbiAgICovXHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogcGhvbmUgbnVtYmVyIG9mIHRoZSBjdXN0b21lclxyXG4gICAqL1xyXG4gIGN1c3RvbWVyX3Bob25lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFVSTCB0byByZWRpcmVjdCB0byB3aGVuIHRyYW5zYWN0aW9uIGlzIGNvbXBsZXRlZC5cclxuICAgKi9cclxuICByZWRpcmVjdF91cmw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogcm91dGUgY291bnRyeS4gRGVmYXVsdCBOR1xyXG4gICAqL1xyXG4gIGNvdW50cnk/OiBzdHJpbmc7XHJcblxyXG4gIHBheW1lbnRfcGxhbj86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBjdXJyZW5jeSB0byBjaGFyZ2UgdGhlIGNhcmQgaW4uIERlZmF1bHQgXCJOR05cIlxyXG4gICAqL1xyXG4gIGN1cnJlbmN5Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgYWxsb3dzIHlvdSBzZWxlY3QgdGhlIHBheW1lbnQgb3B0aW9uIHlvdSB3YW50IGZvciB5b3VyIHVzZXJzLCBwb3NzaWJsZSB2YWx1ZXMgYXJlIGNhcmQsIGFjY291bnQgb3IgYm90aFxyXG4gICAqL1xyXG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBSYXZlIENoZWNrb3V0IEJ1dHRvblxyXG4gICAqL1xyXG4gIHBheV9idXR0b25fdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBVbmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIHByb3ZpZGVkIGJ5IHRoZSBtZXJjaGFudFxyXG4gICAqL1xyXG4gIHR4cmVmOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBhIHNoYTI1NiBoYXNoIG9mIHlvdXIgZ2V0cGFpZFNldHVwIHZhbHVlcywgaXQgaXMgdXNlZCBmb3IgcGFzc2luZyBzZWN1cmVkIHZhbHVlcyB0byB0aGUgcGF5bWVudCBnYXRld2F5XHJcbiAgICovXHJcbiAgaW50ZWdyaXR5X2hhc2g/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZhbHVlIHRvIGJlIHBhc3NlZCBmb3IgdGhpcyBpcyAxLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGN1c3RvbWVyIGlzIHVzaW5nIGFuIG9wZXJhIGJyb3dzZXIsIGl0XHJcbiAgICogd291bGQgbG9hZCB0aGUgcGF5bWVudCBtb2RhbCBvbiBhIG5ldyBwYWdlLlxyXG4gICAqL1xyXG4gIGhvc3RlZF9wYXltZW50PzogMTtcclxuICAvKipcclxuICAgKiBBbnkgb3RoZXIgY3VzdG9tIGRhdGEgeW91IHdpc2ggdG8gcGFzcy5cclxuICAgKi9cclxuICBtZXRhPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIFN1YmFjY291bnRzIHRvIHNwbGl0IHBheW1lbnQgd2l0aFxyXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLmZsdXR0ZXJ3YXZlLmNvbS92Mi4wL2RvY3Mvc3BsaXQtcGF5bWVudFxyXG4gICAqL1xyXG4gIHN1YmFjY291bnQ/OiB7IGlkOiBzdHJpbmcsIHRyYW5zYWN0aW9uX3NwbGl0X3JhdGlvOiBzdHJpbmcgfVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmF0ZVJhdmVPcHRpb25zIGV4dGVuZHMgUmF2ZU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3NmdWwgY2FyZCBjaGFyZ2UuIFVzZXLDosKAwplzIGNhbiBhbHdheXMgYmUgcmVkaXJlY3RlZCB0byBhIHN1Y2Nlc3NmdWwgb3JcclxuICAgKiBmYWlsZWQgcGFnZSBzdXBwbGllZCBieSB0aGUgbWVyY2hhbnQgaGVyZSBiYXNlZCBvbiByZXNwb25zZVxyXG4gICAqIEBwYXJhbSByZXNwb25zZT86IFRoZSBzZXJ2ZXIgcmVzcG9uc2VcclxuICAgKi9cclxuICBjYWxsYmFjazogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHBheSBtb2RhbCBpcyBjbG9zZWQuXHJcbiAgICovXHJcbiAgb25jbG9zZTogKCkgPT4gdm9pZDtcclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHBheW1lbnQgaXMgYWJvdXQgdG8gYmVnaW5cclxuICAgKi9cclxuICBpbml0OiAoKSA9PiB2b2lkO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBbmd1bGFyUmF2ZUNvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhci1yYXZlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFuZ3VsYXJSYXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9hbmd1bGFyLXJhdmUuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW10sXHJcbiAgZXhwb3J0czogW0FuZ3VsYXJSYXZlQ29tcG9uZW50LCBBbmd1bGFyUmF2ZURpcmVjdGl2ZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhclJhdmVDb21wb25lbnQsIEFuZ3VsYXJSYXZlRGlyZWN0aXZlXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdmVNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUF5Q0U7dUJBTndDLElBQUksWUFBWSxFQUFRO3dCQUNyQixJQUFJLFlBQVksRUFBVTtvQkFDOUIsSUFBSSxZQUFZLEVBQVU7NEJBQ2IsRUFBRTtLQUdyQzs7OztJQUVYLGtDQUFHOzs7SUFBVDs7Ozs7d0JBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFOzRCQUNi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