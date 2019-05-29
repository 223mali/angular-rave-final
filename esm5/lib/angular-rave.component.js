/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * @record
 */
function MyWindow() { }
function MyWindow_tsickle_Closure_declarations() {
    /** @type {?} */
    MyWindow.prototype.getpaidSetup;
}
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
export { AngularRaveComponent };
function AngularRaveComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AngularRaveComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AngularRaveComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AngularRaveComponent.propDecorators;
    /** @type {?} */
    AngularRaveComponent.prototype.PBFPubKey;
    /** @type {?} */
    AngularRaveComponent.prototype.integrity_hash;
    /** @type {?} */
    AngularRaveComponent.prototype.txref;
    /** @type {?} */
    AngularRaveComponent.prototype.payment_method;
    /** @type {?} */
    AngularRaveComponent.prototype.amount;
    /** @type {?} */
    AngularRaveComponent.prototype.currency;
    /** @type {?} */
    AngularRaveComponent.prototype.country;
    /** @type {?} */
    AngularRaveComponent.prototype.payment_plan;
    /** @type {?} */
    AngularRaveComponent.prototype.customer_email;
    /** @type {?} */
    AngularRaveComponent.prototype.customer_phone;
    /** @type {?} */
    AngularRaveComponent.prototype.customer_firstname;
    /** @type {?} */
    AngularRaveComponent.prototype.customer_lastname;
    /** @type {?} */
    AngularRaveComponent.prototype.subaccount;
    /** @type {?} */
    AngularRaveComponent.prototype.pay_button_text;
    /** @type {?} */
    AngularRaveComponent.prototype.custom_title;
    /** @type {?} */
    AngularRaveComponent.prototype.custom_description;
    /** @type {?} */
    AngularRaveComponent.prototype.redirect_url;
    /** @type {?} */
    AngularRaveComponent.prototype.custom_logo;
    /** @type {?} */
    AngularRaveComponent.prototype.meta;
    /** @type {?} */
    AngularRaveComponent.prototype.raveOptions;
    /** @type {?} */
    AngularRaveComponent.prototype.onclose;
    /** @type {?} */
    AngularRaveComponent.prototype.callback;
    /** @type {?} */
    AngularRaveComponent.prototype.init;
    /** @type {?} */
    AngularRaveComponent.prototype._raveOptions;
    /** @type {?} */
    AngularRaveComponent.prototype.paymentSetup;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcmF2ZS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXJhdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQXlDN0U7dUJBTndDLElBQUksWUFBWSxFQUFRO3dCQUNyQixJQUFJLFlBQVksRUFBVTtvQkFDOUIsSUFBSSxZQUFZLEVBQVU7NEJBQ2IsRUFBRTtLQUdyQzs7OztJQUVYLGtDQUFHOzs7SUFBVDs7Ozs7d0JBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzt5QkFDbEI7d0JBQ0QscUJBQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBdkIsU0FBdUIsQ0FBQzt3QkFDeEIsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsWUFBWSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQzlDLE1BQU0sZ0JBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxtRkFBbUYsQ0FBQyxFQUFDO3lCQUMzRzs7d0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDakUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs2QkFDM0Q7eUJBQ0Y7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDekIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0NBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7NkJBQzVEO3lCQUNGOzs7OztLQUNGOzs7O0lBRUQsZ0RBQWlCOzs7SUFBakI7UUFBQSxpQkEyQkM7UUExQkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQUU7UUFDNUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQUU7UUFDckUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQUU7UUFDcEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQUU7UUFDOUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQUU7UUFDcEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQUU7UUFDdkYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQUU7UUFDL0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQUU7UUFDOUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQUU7UUFDbEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQUU7UUFDaEcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQUU7UUFDcEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQUU7UUFDM0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQUU7UUFDOUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQUU7UUFD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QUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1NBQUU7UUFDdEcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FBRTtRQUN6RixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztTQUFFO1FBQ3ZILE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDYjs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNaOztnQkEvSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjOztvQkFDeEIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7Ozs7OzhCQUdFLEtBQUs7bUNBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7aUNBQ0wsS0FBSzttQ0FDTCxLQUFLO21DQUNMLEtBQUs7dUNBQ0wsS0FBSztzQ0FDTCxLQUFLOytCQUNMLEtBQUs7b0NBQ0wsS0FBSztpQ0FDTCxLQUFLO3VDQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs0QkFDTCxNQUFNOzZCQUNOLE1BQU07eUJBQ04sTUFBTTs7K0JBckNUOztTQWNhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJpdmF0ZVJhdmVPcHRpb25zIH0gZnJvbSAnLi9yYXZlLW9wdGlvbnMnO1xyXG5cclxuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcclxuICBnZXRwYWlkU2V0dXA6IChyYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+KSA9PiB2b2lkO1xyXG59XHJcblxyXG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhbmd1bGFyLXJhdmUnLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJSYXZlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBQQkZQdWJLZXk6IHN0cmluZztcclxuICBASW5wdXQoKSBpbnRlZ3JpdHlfaGFzaDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHR4cmVmOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF5bWVudF9tZXRob2Q6IHN0cmluZztcclxuICBASW5wdXQoKSBhbW91bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcclxuICBASW5wdXQoKSBwYXltZW50X3BsYW46IG51bWJlcjtcclxuICBASW5wdXQoKSBjdXN0b21lcl9lbWFpbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX3Bob25lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfZmlyc3RuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfbGFzdG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBzdWJhY2NvdW50OiB7IGlkOiBzdHJpbmcsIHRyYW5zYWN0aW9uX3NwbGl0X3JhdGlvOiBzdHJpbmcgfVtdO1xyXG4gIEBJbnB1dCgpIHBheV9idXR0b25fdGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbV90aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbV9kZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJlZGlyZWN0X3VybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbV9sb2dvOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWV0YTogYW55O1xyXG4gIEBJbnB1dCgpIHJhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz47XHJcbiAgQE91dHB1dCgpIG9uY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgY2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XHJcbiAgQE91dHB1dCgpIGluaXQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XHJcbiAgcHJpdmF0ZSBfcmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPiA9IHt9O1xyXG4gIHByaXZhdGUgcGF5bWVudFNldHVwOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGFzeW5jIHBheSgpIHtcclxuICAgIGlmICh0aGlzLmluaXQpIHtcclxuICAgICAgdGhpcy5pbml0LmVtaXQoKTtcclxuICAgIH1cclxuICAgIGF3YWl0IHRoaXMubG9hZFNjcmlwdCgpO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0cGFpZFNldHVwICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFBsZWFzZSB2ZXJpZnkgdGhhdCB5b3UgaW1wb3J0ZWQgcmF2ZVxcJ3Mgc2NyaXB0IGludG8geW91ciBpbmRleC5odG1sJyk7XHJcbiAgICB9XHJcbiAgICAvLyBJZiB0aGUgcmF2ZW9wdGlvbnMgSW5wdXQgaXMgcHJlc2VudCB0aGVuIHVzZSBpdFxyXG4gICAgaWYgKHRoaXMucmF2ZU9wdGlvbnMgJiYgT2JqZWN0LmtleXModGhpcy5yYXZlT3B0aW9ucykubGVuZ3RoID4gMykge1xyXG4gICAgICBpZiAodGhpcy52YWxpZGF0ZU9wdGlvbnMoKSkge1xyXG4gICAgICAgIHRoaXMucGF5bWVudFNldHVwID0gd2luZG93LmdldHBhaWRTZXR1cCh0aGlzLnJhdmVPcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMudmFsaWRhdGVJbnB1dCgpKSB7XHJcbiAgICAgICAgdGhpcy5pbnNlcnRSYXZlT3B0aW9ucygpO1xyXG4gICAgICAgIHRoaXMucGF5bWVudFNldHVwID0gd2luZG93LmdldHBhaWRTZXR1cCh0aGlzLl9yYXZlT3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluc2VydFJhdmVPcHRpb25zKCkge1xyXG4gICAgaWYgKHRoaXMuYW1vdW50KSB7IHRoaXMuX3JhdmVPcHRpb25zLmFtb3VudCA9IHRoaXMuYW1vdW50OyB9XHJcbiAgICBpZiAodGhpcy5QQkZQdWJLZXkpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuUEJGUHViS2V5ID0gdGhpcy5QQkZQdWJLZXk7IH1cclxuICAgIGlmICh0aGlzLnBheW1lbnRfbWV0aG9kKSB7IHRoaXMuX3JhdmVPcHRpb25zLnBheW1lbnRfbWV0aG9kID0gdGhpcy5wYXltZW50X21ldGhvZDsgfVxyXG4gICAgaWYgKHRoaXMucmVkaXJlY3RfdXJsKSB7IHRoaXMuX3JhdmVPcHRpb25zLnJlZGlyZWN0X3VybCA9IHRoaXMucmVkaXJlY3RfdXJsOyB9XHJcbiAgICBpZiAodGhpcy5pbnRlZ3JpdHlfaGFzaCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5pbnRlZ3JpdHlfaGFzaCA9IHRoaXMuaW50ZWdyaXR5X2hhc2g7IH1cclxuICAgIGlmICh0aGlzLnBheV9idXR0b25fdGV4dCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5wYXlfYnV0dG9uX3RleHQgPSB0aGlzLnBheV9idXR0b25fdGV4dDsgfVxyXG4gICAgaWYgKHRoaXMuY291bnRyeSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jb3VudHJ5ID0gdGhpcy5jb3VudHJ5OyB9XHJcbiAgICBpZiAodGhpcy5wYXltZW50X3BsYW4pIHsgdGhpcy5fcmF2ZU9wdGlvbnMucGF5bWVudF9wbGFuID0gdGhpcy5wYXltZW50X3BsYW47IH1cclxuICAgIGlmICh0aGlzLmN1cnJlbmN5KSB7IHRoaXMuX3JhdmVPcHRpb25zLmN1cnJlbmN5ID0gdGhpcy5jdXJyZW5jeTsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uKSB7IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV9kZXNjcmlwdGlvbiA9IHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uOyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21lcl9lbWFpbCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCA9IHRoaXMuY3VzdG9tZXJfZW1haWw7IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbV9sb2dvKSB7IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV9sb2dvID0gdGhpcy5jdXN0b21fbG9nbzsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tX3RpdGxlKSB7IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV90aXRsZSA9IHRoaXMuY3VzdG9tX3RpdGxlOyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21lcl9maXJzdG5hbWUpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZmlyc3RuYW1lID0gdGhpcy5jdXN0b21lcl9maXJzdG5hbWU7IH1cclxuICAgIGlmICh0aGlzLnN1YmFjY291bnQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuc3ViYWNjb3VudCA9IHRoaXMuc3ViYWNjb3VudDsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfbGFzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lOyB9XHJcbiAgICBpZiAodGhpcy50eHJlZikgeyB0aGlzLl9yYXZlT3B0aW9ucy50eHJlZiA9IHRoaXMudHhyZWY7IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbWVyX3Bob25lKSB7IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lID0gdGhpcy5jdXN0b21lcl9waG9uZTsgfVxyXG4gICAgaWYgKHRoaXMub25jbG9zZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4gdGhpcy5vbmNsb3NlLmVtaXQoKTsgfVxyXG4gICAgaWYgKHRoaXMuaW5pdCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5pbml0ID0gKCkgPT4gdGhpcy5pbml0LmVtaXQoKTsgfVxyXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5fcmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbmNsb3NlLmVtaXQocmVzKTtcclxuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cC5jbG9zZSgpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZFNjcmlwdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0cGFpZFNldHVwID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgIGNvbnN0IG9uTG9hZEZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XHJcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL3JhdmVzYW5kYm94YXBpLmZsdXR0ZXJ3YXZlLmNvbS9mbHd2My1wdWcvZ2V0cGFpZHgvYXBpL2Zsd3BiZi1pbmxpbmUuanMnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVPcHRpb25zKCkge1xyXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLlBCRlB1YktleSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghKHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSkpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMudHhyZWYpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy5hbW91bnQpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2sub2JzZXJ2ZXJzLmxlbmd0aCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvbicpOyB9XHJcbiAgICB0aGlzLnJhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHtcclxuICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KHJlcyk7XHJcbiAgICAgIHRoaXMucGF5bWVudFNldHVwLmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUlucHV0KCkge1xyXG4gICAgaWYgKCF0aGlzLlBCRlB1YktleSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghKHRoaXMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5jdXN0b21lcl9waG9uZSkpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy50eHJlZikgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmFtb3VudCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5jYWxsYmFjaykgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvbicpOyB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYXkoKTtcclxuICB9XHJcbn1cclxuIl19