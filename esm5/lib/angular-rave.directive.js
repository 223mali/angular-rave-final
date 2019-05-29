/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Output, HostListener, EventEmitter } from '@angular/core';
/**
 * @record
 */
function MyWindow() { }
function MyWindow_tsickle_Closure_declarations() {
    /** @type {?} */
    MyWindow.prototype.getpaidSetup;
}
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
export { AngularRaveDirective };
function AngularRaveDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AngularRaveDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AngularRaveDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AngularRaveDirective.propDecorators;
    /** @type {?} */
    AngularRaveDirective.prototype.PBFPubKey;
    /** @type {?} */
    AngularRaveDirective.prototype.integrity_hash;
    /** @type {?} */
    AngularRaveDirective.prototype.txref;
    /** @type {?} */
    AngularRaveDirective.prototype.payment_method;
    /** @type {?} */
    AngularRaveDirective.prototype.amount;
    /** @type {?} */
    AngularRaveDirective.prototype.currency;
    /** @type {?} */
    AngularRaveDirective.prototype.country;
    /** @type {?} */
    AngularRaveDirective.prototype.payment_plan;
    /** @type {?} */
    AngularRaveDirective.prototype.customer_email;
    /** @type {?} */
    AngularRaveDirective.prototype.customer_phone;
    /** @type {?} */
    AngularRaveDirective.prototype.customer_firstname;
    /** @type {?} */
    AngularRaveDirective.prototype.customer_lastname;
    /** @type {?} */
    AngularRaveDirective.prototype.pay_button_text;
    /** @type {?} */
    AngularRaveDirective.prototype.custom_title;
    /** @type {?} */
    AngularRaveDirective.prototype.subaccount;
    /** @type {?} */
    AngularRaveDirective.prototype.custom_description;
    /** @type {?} */
    AngularRaveDirective.prototype.redirect_url;
    /** @type {?} */
    AngularRaveDirective.prototype.custom_logo;
    /** @type {?} */
    AngularRaveDirective.prototype.meta;
    /** @type {?} */
    AngularRaveDirective.prototype.raveOptions;
    /** @type {?} */
    AngularRaveDirective.prototype.onclose;
    /** @type {?} */
    AngularRaveDirective.prototype.callback;
    /** @type {?} */
    AngularRaveDirective.prototype.init;
    /** @type {?} */
    AngularRaveDirective.prototype._raveOptions;
    /** @type {?} */
    AngularRaveDirective.prototype.paymentSetup;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcmF2ZS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXJhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUF3Q25GOzJCQVBvRCxFQUFFO3VCQUNkLElBQUksWUFBWSxFQUFRO3dCQUN4QixJQUFJLFlBQVksRUFBTztvQkFDeEIsSUFBSSxZQUFZLEVBQVU7NEJBQ2IsRUFBRTtLQUdyQzs7OztJQUdqQiwwQ0FBVzs7OztRQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7Ozs7SUFHUCxrQ0FBRzs7O0lBQVQ7Ozs7O3dCQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7eUJBQ2xCO3dCQUNELHFCQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQXZCLFNBQXVCLENBQUM7d0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFlBQVksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUM5QyxNQUFNLGdCQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUZBQW1GLENBQUMsRUFBQzt5QkFDM0c7O3dCQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2pFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQzNCLElBQUksQ0FBQyxZQUFZLEdB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TyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQUU7UUFDekYsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7U0FBRTtRQUN2SCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7O2dCQTdIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7OzhCQUVFLEtBQUs7bUNBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7aUNBQ0wsS0FBSzttQ0FDTCxLQUFLO21DQUNMLEtBQUs7dUNBQ0wsS0FBSztzQ0FDTCxLQUFLO29DQUNMLEtBQUs7aUNBQ0wsS0FBSzsrQkFDTCxLQUFLO3VDQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs0QkFDTCxNQUFNOzZCQUNOLE1BQU07eUJBQ04sTUFBTTtnQ0FNTixZQUFZLFNBQUMsT0FBTzs7K0JBMUN2Qjs7U0FhYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQcml2YXRlUmF2ZU9wdGlvbnMgfSBmcm9tICcuL3JhdmUtb3B0aW9ucyc7XHJcblxyXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xyXG4gIGdldHBhaWRTZXR1cDogKHJhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thbmd1bGFyLXJhdmVdJyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZURpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgUEJGUHViS2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW50ZWdyaXR5X2hhc2g6IHN0cmluZztcclxuICBASW5wdXQoKSB0eHJlZjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBheW1lbnRfbWV0aG9kOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcclxuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF5bWVudF9wbGFuOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfZW1haWw6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21lcl9waG9uZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF5X2J1dHRvbl90ZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tX3RpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3ViYWNjb3VudDogeyBpZDogc3RyaW5nLCB0cmFuc2FjdGlvbl9zcGxpdF9yYXRpbzogc3RyaW5nIH1bXTtcclxuICBASW5wdXQoKSBjdXN0b21fZGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSByZWRpcmVjdF91cmw6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fbG9nbzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1ldGE6IGFueTtcclxuICBASW5wdXQoKSByYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+ID0ge307XHJcbiAgQE91dHB1dCgpIG9uY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgY2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGluaXQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XHJcbiAgcHJpdmF0ZSBfcmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPiA9IHt9O1xyXG4gIHByaXZhdGUgcGF5bWVudFNldHVwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgYnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLnBheSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcGF5KCkge1xyXG4gICAgaWYgKHRoaXMuaW5pdCkge1xyXG4gICAgICB0aGlzLmluaXQuZW1pdCgpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgdGhpcy5sb2FkU2NyaXB0KCk7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogUGxlYXNlIHZlcmlmeSB0aGF0IHlvdSBpbXBvcnRlZCByYXZlXFwncyBzY3JpcHQgaW50byB5b3VyIGluZGV4Lmh0bWwnKTtcclxuICAgIH1cclxuICAgIC8vIElmIHRoZSByYXZlb3B0aW9ucyBJbnB1dCBpcyBwcmVzZW50IHRoZW4gdXNlXHJcbiAgICBpZiAodGhpcy5yYXZlT3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLnJhdmVPcHRpb25zKS5sZW5ndGggPiAzKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlT3B0aW9ucygpKSB7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMucmF2ZU9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUlucHV0KCkpIHtcclxuICAgICAgICB0aGlzLmluc2VydFJhdmVPcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMuX3JhdmVPcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5zZXJ0UmF2ZU9wdGlvbnMoKSB7XHJcbiAgICB0aGlzLmFtb3VudCA/IHRoaXMuX3JhdmVPcHRpb25zLmFtb3VudCA9IHRoaXMuYW1vdW50IDogbnVsbFxyXG4gICAgdGhpcy5wYXltZW50X3BsYW4gPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X3BsYW4gPSB0aGlzLnBheW1lbnRfcGxhbiA6IG51bGxcclxuICAgIHRoaXMuUEJGUHViS2V5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuUEJGUHViS2V5ID0gdGhpcy5QQkZQdWJLZXkgOiBudWxsXHJcbiAgICB0aGlzLnBheW1lbnRfbWV0aG9kID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5bWVudF9tZXRob2QgPSB0aGlzLnBheW1lbnRfbWV0aG9kIDogbnVsbFxyXG4gICAgdGhpcy5yZWRpcmVjdF91cmwgPyB0aGlzLl9yYXZlT3B0aW9ucy5yZWRpcmVjdF91cmwgPSB0aGlzLnJlZGlyZWN0X3VybCA6IG51bGxcclxuICAgIHRoaXMuaW50ZWdyaXR5X2hhc2ggPyB0aGlzLl9yYXZlT3B0aW9ucy5pbnRlZ3JpdHlfaGFzaCA9IHRoaXMuaW50ZWdyaXR5X2hhc2ggOiBudWxsXHJcbiAgICB0aGlzLnBheV9idXR0b25fdGV4dCA/IHRoaXMuX3JhdmVPcHRpb25zLnBheV9idXR0b25fdGV4dCA9IHRoaXMucGF5X2J1dHRvbl90ZXh0IDogbnVsbFxyXG4gICAgdGhpcy5jb3VudHJ5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY291bnRyeSA9IHRoaXMuY291bnRyeSA6IG51bGxcclxuICAgIHRoaXMuY3VycmVuY3kgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXJyZW5jeSA9IHRoaXMuY3VycmVuY3kgOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbiA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV9kZXNjcmlwdGlvbiA9IHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21lcl9lbWFpbCA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsID0gdGhpcy5jdXN0b21lcl9lbWFpbCA6IG51bGxcclxuICAgIHRoaXMuY3VzdG9tX2xvZ28gPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fbG9nbyA9IHRoaXMuY3VzdG9tX2xvZ28gOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbV90aXRsZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV90aXRsZSA9IHRoaXMuY3VzdG9tX3RpdGxlIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21lcl9maXJzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9maXJzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA6IG51bGxcclxuICAgIHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9sYXN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbWVyX3Bob25lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUgPSB0aGlzLmN1c3RvbWVyX3Bob25lIDogbnVsbFxyXG4gICAgdGhpcy50eHJlZiA/IHRoaXMuX3JhdmVPcHRpb25zLnR4cmVmID0gdGhpcy50eHJlZiA6IG51bGxcclxuICAgIHRoaXMub25jbG9zZSA/IHRoaXMuX3JhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMub25jbG9zZS5lbWl0KClcclxuICAgIH0gOiBudWxsXHJcbiAgICB0aGlzLmNhbGxiYWNrID8gdGhpcy5fcmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSByZXMgPT4ge1xyXG4gICAgICB0aGlzLmNhbGxiYWNrLmVtaXQocmVzKTtcclxuICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcclxuICAgIH0gOiBudWxsXHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZU9wdGlvbnMoKSB7XHJcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCEodGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lKSkge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy50eHJlZikgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLmFtb3VudCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cclxuICAgIGlmICh0aGlzLm9uY2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkgeyB0aGlzLnJhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB0aGlzLm9uY2xvc2UuZW1pdCgpOyB9XHJcbiAgICB0aGlzLnJhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHtcclxuICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KHJlcyk7XHJcbiAgICAgIHRoaXMucGF5bWVudFNldHVwLmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBsb2FkU2NyaXB0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgY29uc3Qgb25Mb2FkRnVuYyA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfTtcclxuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcclxuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vcmF2ZXNhbmRib3hhcGkuZmx1dHRlcndhdmUuY29tL2Zsd3YzLXB1Zy9nZXRwYWlkeC9hcGkvZmx3cGJmLWlubGluZS5qcycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUlucHV0KCkge1xyXG4gICAgaWYgKCF0aGlzLlBCRlB1YktleSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghKHRoaXMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5jdXN0b21lcl9waG9uZSkpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy50eHJlZikgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmFtb3VudCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5jYWxsYmFjaykgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvbicpOyB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==