(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-rave', ['exports', '@angular/core'], factory) :
    (factory((global['angular-rave'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularRaveComponent = (function () {
        function AngularRaveComponent() {
            this.onclose = new core.EventEmitter();
            this.callback = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.pay = /**
         * @return {?}
         */
            function () {
                if (typeof window.getpaidSetup !== "function") {
                    return console.error("ANGULAR-RAVE: Please verify that you imported rave's script into your index.html");
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
                        window.getpaidSetup(this._raveOptions);
                        this.paymentSetup = window.getpaidSetup(this._raveOptions);
                    }
                }
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
                this.onclose ? this._raveOptions.onclose = function () { return _this.onclose.emit(); } : null;
                this.callback ? this._raveOptions.callback = function (res) { return _this.onclose.emit(res); } : null;
            };
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.validateOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.raveOptions.PBFPubKey)
                    return console.error("ANGULAR-RAVE: Merchant public key is required");
                if (!(this.raveOptions.customer_email || this.raveOptions.customer_phone))
                    return console.error("ANGULAR-RAVE: Customer email or phone number is required");
                if (!this.raveOptions.txref)
                    return console.error("ANGULAR-RAVE: A unique transaction reference is required");
                if (!this.raveOptions.amount)
                    return console.error("ANGULAR-RAVE: Amount to charge is required");
                if (!this.callback.observers.length)
                    return console.error("ANGULAR-RAVE: You should attach to callback to verify your transaction");
                if (this.onclose.observers.length)
                    this.raveOptions.onclose = function () { return _this.onclose.emit(); };
                this.raveOptions.callback = function (res) { return _this.callback.emit(res); };
                return true;
            };
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.validateInput = /**
         * @return {?}
         */
            function () {
                if (!this.PBFPubKey)
                    return console.error("ANGULAR-RAVE: Merchant public key is required");
                if (!(this.customer_email || this.customer_phone))
                    return console.error("ANGULAR-RAVE: Customer email or phone number is required");
                if (!this.txref)
                    return console.error("ANGULAR-RAVE: A unique transaction reference is required");
                if (!this.amount)
                    return console.error("ANGULAR-RAVE: Amount to charge is required");
                if (!this.callback)
                    return console.error("ANGULAR-RAVE: You should attach to callback to verify your transaction");
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
            "payment_plan": [{ type: core.Input },],
            "currency": [{ type: core.Input },],
            "country": [{ type: core.Input },],
            "customer_email": [{ type: core.Input },],
            "customer_phone": [{ type: core.Input },],
            "customer_firstname": [{ type: core.Input },],
            "customer_lastname": [{ type: core.Input },],
            "pay_button_text": [{ type: core.Input },],
            "custom_title": [{ type: core.Input },],
            "custom_description": [{ type: core.Input },],
            "redirect_url": [{ type: core.Input },],
            "custom_logo": [{ type: core.Input },],
            "meta": [{ type: core.Input },],
            "raveOptions": [{ type: core.Input },],
            "onclose": [{ type: core.Output },],
            "callback": [{ type: core.Output },],
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
                if (typeof window.getpaidSetup !== "function") {
                    return console.error("ANGULAR-RAVE: Please verify that you imported rave's script into your index.html");
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
                if (!this.raveOptions.PBFPubKey)
                    return console.error("ANGULAR-RAVE: Merchant public key is required");
                if (!(this.raveOptions.customer_email || this.raveOptions.customer_phone))
                    return console.error("ANGULAR-RAVE: Customer email or phone number is required");
                if (!this.raveOptions.txref)
                    return console.error("ANGULAR-RAVE: A unique transaction reference is required");
                if (!this.raveOptions.amount)
                    return console.error("ANGULAR-RAVE: Amount to charge is required");
                if (!this.callback.observers.length)
                    return console.error("ANGULAR-RAVE: You should attach to callback to verify your transaction");
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
        AngularRaveDirective.prototype.validateInput = /**
         * @return {?}
         */
            function () {
                if (!this.PBFPubKey)
                    return console.error("ANGULAR-RAVE: Merchant public key is required");
                if (!(this.customer_email || this.customer_phone))
                    return console.error("ANGULAR-RAVE: Customer email or phone number is required");
                if (!this.txref)
                    return console.error("ANGULAR-RAVE: A unique transaction reference is required");
                if (!this.amount)
                    return console.error("ANGULAR-RAVE: Amount to charge is required");
                if (!this.callback)
                    return console.error("ANGULAR-RAVE: You should attach to callback to verify your transaction");
                return true;
            };
        AngularRaveDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[angular-rave]'
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
            "payment_plan": [{ type: core.Input },],
            "currency": [{ type: core.Input },],
            "country": [{ type: core.Input },],
            "customer_email": [{ type: core.Input },],
            "customer_phone": [{ type: core.Input },],
            "customer_firstname": [{ type: core.Input },],
            "customer_lastname": [{ type: core.Input },],
            "pay_button_text": [{ type: core.Input },],
            "custom_title": [{ type: core.Input },],
            "custom_description": [{ type: core.Input },],
            "redirect_url": [{ type: core.Input },],
            "custom_logo": [{ type: core.Input },],
            "meta": [{ type: core.Input },],
            "raveOptions": [{ type: core.Input },],
            "onclose": [{ type: core.Output },],
            "callback": [{ type: core.Output },],
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
    var _RaveOptions = (function () {
        function _RaveOptions() {
        }
        return _RaveOptions;
    }());

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

    exports.AngularRaveComponent = AngularRaveComponent;
    exports.AngularRaveDirective = AngularRaveDirective;
    exports.RaveOptions = RaveOptions;
    exports._RaveOptions = _RaveOptions;
    exports.AngularRaveModule = AngularRaveModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1yYXZlL2xpYi9hbmd1bGFyLXJhdmUuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvcmF2ZS1vcHRpb25zLnRzIiwibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgX1JhdmVPcHRpb25zIH0gZnJvbSBcIi4vcmF2ZS1vcHRpb25zXCI7XG5cbmludGVyZmFjZSBteVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIGdldHBhaWRTZXR1cDogKHJhdmVPcHRpb25zOiBQYXJ0aWFsPF9SYXZlT3B0aW9ucz4pID0+IHZvaWRcbn1cblxuZGVjbGFyZSB2YXIgd2luZG93OiBteVdpbmRvd1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbmd1bGFyLXJhdmUnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBQQkZQdWJLZXk6IHN0cmluZztcbiAgQElucHV0KCkgaW50ZWdyaXR5X2hhc2g6IHN0cmluZztcbiAgQElucHV0KCkgdHhyZWY6IHN0cmluZztcbiAgQElucHV0KCkgcGF5bWVudF9tZXRob2Q6IHN0cmluZztcbiAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBheW1lbnRfcGxhbjogbnVtYmVyO1xuICBASW5wdXQoKSBjdXJyZW5jeTogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2VtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX3Bob25lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9sYXN0bmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYXlfYnV0dG9uX3RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX3RpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbV9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSByZWRpcmVjdF91cmw6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX2xvZ286IHN0cmluZztcbiAgQElucHV0KCkgbWV0YTogYW55O1xuICBASW5wdXQoKSByYXZlT3B0aW9uczogUGFydGlhbDxfUmF2ZU9wdGlvbnM+XG4gIEBPdXRwdXQoKSBvbmNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcbiAgcHJpdmF0ZSBfcmF2ZU9wdGlvbnM6IFBhcnRpYWw8X1JhdmVPcHRpb25zPlxuICBwcml2YXRlIHBheW1lbnRTZXR1cDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcGF5KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogUGxlYXNlIHZlcmlmeSB0aGF0IHlvdSBpbXBvcnRlZCByYXZlJ3Mgc2NyaXB0IGludG8geW91ciBpbmRleC5odG1sXCIpXG4gICAgfVxuICAgIC8vIElmIHRoZSByYXZlb3B0aW9ucyBJbnB1dCBpcyBwcmVzZW50IHRoZW4gdXNlIGl0XG4gICAgaWYgKHRoaXMucmF2ZU9wdGlvbnMgJiYgT2JqZWN0LmtleXModGhpcy5yYXZlT3B0aW9ucykubGVuZ3RoID4gMykge1xuICAgICAgaWYgKHRoaXMudmFsaWRhdGVPcHRpb25zKCkpIHtcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMucmF2ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUlucHV0KCkpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRSYXZlT3B0aW9ucygpO1xuICAgICAgICB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMuX3JhdmVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMuX3JhdmVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnNlcnRSYXZlT3B0aW9ucygpIHtcbiAgICB0aGlzLmFtb3VudCA/IHRoaXMuX3JhdmVPcHRpb25zLmFtb3VudCA9IHRoaXMuYW1vdW50IDogbnVsbFxuICAgIHRoaXMucGF5bWVudF9wbGFuID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5bWVudF9wbGFuID0gdGhpcy5wYXltZW50X3BsYW4gOiBudWxsXG4gICAgdGhpcy5QQkZQdWJLZXkgPyB0aGlzLl9yYXZlT3B0aW9ucy5QQkZQdWJLZXkgPSB0aGlzLlBCRlB1YktleSA6IG51bGxcbiAgICB0aGlzLnBheW1lbnRfbWV0aG9kID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5bWVudF9tZXRob2QgPSB0aGlzLnBheW1lbnRfbWV0aG9kIDogbnVsbFxuICAgIHRoaXMucmVkaXJlY3RfdXJsID8gdGhpcy5fcmF2ZU9wdGlvbnMucmVkaXJlY3RfdXJsID0gdGhpcy5yZWRpcmVjdF91cmwgOiBudWxsXG4gICAgdGhpcy5pbnRlZ3JpdHlfaGFzaCA/IHRoaXMuX3JhdmVPcHRpb25zLmludGVncml0eV9oYXNoID0gdGhpcy5pbnRlZ3JpdHlfaGFzaCA6IG51bGxcbiAgICB0aGlzLnBheV9idXR0b25fdGV4dCA/IHRoaXMuX3JhdmVPcHRpb25zLnBheV9idXR0b25fdGV4dCA9IHRoaXMucGF5X2J1dHRvbl90ZXh0IDogbnVsbFxuICAgIHRoaXMuY291bnRyeSA/IHRoaXMuX3JhdmVPcHRpb25zLmNvdW50cnkgPSB0aGlzLmNvdW50cnkgOiBudWxsXG4gICAgdGhpcy5jdXJyZW5jeSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1cnJlbmN5ID0gdGhpcy5jdXJyZW5jeSA6IG51bGxcbiAgICB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbiA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV9kZXNjcmlwdGlvbiA9IHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tZXJfZW1haWwgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCA9IHRoaXMuY3VzdG9tZXJfZW1haWwgOiBudWxsXG4gICAgdGhpcy5jdXN0b21fbG9nbyA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV9sb2dvID0gdGhpcy5jdXN0b21fbG9nbyA6IG51bGxcbiAgICB0aGlzLmN1c3RvbV90aXRsZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV90aXRsZSA9IHRoaXMuY3VzdG9tX3RpdGxlIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZmlyc3RuYW1lID0gdGhpcy5jdXN0b21lcl9maXJzdG5hbWUgOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9sYXN0bmFtZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2xhc3RuYW1lID0gdGhpcy5jdXN0b21lcl9sYXN0bmFtZSA6IG51bGxcbiAgICB0aGlzLnR4cmVmID8gdGhpcy5fcmF2ZU9wdGlvbnMudHhyZWYgPSB0aGlzLnR4cmVmIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tZXJfcGhvbmUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSA9IHRoaXMuY3VzdG9tZXJfcGhvbmUgOiBudWxsXG4gICAgdGhpcy5vbmNsb3NlID8gdGhpcy5fcmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KCkgOiBudWxsXG4gICAgdGhpcy5jYWxsYmFjayA/IHRoaXMuX3JhdmVPcHRpb25zLmNhbGxiYWNrID0gKHJlcykgPT4gdGhpcy5vbmNsb3NlLmVtaXQocmVzKSA6IG51bGxcbiAgfVxuXG4gIHZhbGlkYXRlT3B0aW9ucygpIHtcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuUEJGUHViS2V5KSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoISh0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkXCIpO1xuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy50eHJlZikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZFwiKVxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy5hbW91bnQpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrLm9ic2VydmVycy5sZW5ndGgpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvblwiKVxuICAgIGlmICh0aGlzLm9uY2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkgdGhpcy5yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4gdGhpcy5vbmNsb3NlLmVtaXQoKVxuICAgIHRoaXMucmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSByZXMgPT4gdGhpcy5jYWxsYmFjay5lbWl0KHJlcylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgdmFsaWRhdGVJbnB1dCgpIHtcbiAgICBpZiAoIXRoaXMuUEJGUHViS2V5KSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoISh0aGlzLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMuY3VzdG9tZXJfcGhvbmUpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkXCIpO1xuICAgIGlmICghdGhpcy50eHJlZikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZFwiKVxuICAgIGlmICghdGhpcy5hbW91bnQpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogWW91IHNob3VsZCBhdHRhY2ggdG8gY2FsbGJhY2sgdG8gdmVyaWZ5IHlvdXIgdHJhbnNhY3Rpb25cIilcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYXkoKVxuICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IF9SYXZlT3B0aW9ucyB9IGZyb20gXCIuL3JhdmUtb3B0aW9uc1wiO1xuXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBnZXRwYWlkU2V0dXA6IChyYXZlT3B0aW9uczogUGFydGlhbDxfUmF2ZU9wdGlvbnM+KSA9PiB2b2lkXG59XG5cbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3dcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FuZ3VsYXItcmF2ZV0nXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJSYXZlRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgUEJGUHViS2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGludGVncml0eV9oYXNoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR4cmVmOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBheW1lbnRfbWV0aG9kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFtb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBwYXltZW50X3BsYW46IG51bWJlcjtcbiAgQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9lbWFpbDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9waG9uZTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9maXJzdG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfbGFzdG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcGF5X2J1dHRvbl90ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbV90aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fZGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgcmVkaXJlY3RfdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbV9sb2dvOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1ldGE6IGFueTtcbiAgQElucHV0KCkgcmF2ZU9wdGlvbnM6IFBhcnRpYWw8X1JhdmVPcHRpb25zPiA9IHt9XG4gIEBPdXRwdXQoKSBvbmNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHJpdmF0ZSBfcmF2ZU9wdGlvbnM6IFBhcnRpYWw8X1JhdmVPcHRpb25zPiA9IHt9O1xuICBwcml2YXRlIHBheW1lbnRTZXR1cDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgYnV0dG9uQ2xpY2soKSB7XG4gICAgdGhpcy5wYXkoKVxuICB9XG5cbiAgcGF5KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogUGxlYXNlIHZlcmlmeSB0aGF0IHlvdSBpbXBvcnRlZCByYXZlJ3Mgc2NyaXB0IGludG8geW91ciBpbmRleC5odG1sXCIpXG4gICAgfVxuICAgIC8vIElmIHRoZSByYXZlb3B0aW9ucyBJbnB1dCBpcyBwcmVzZW50IHRoZW4gdXNlXG4gICAgaWYgKHRoaXMucmF2ZU9wdGlvbnMgJiYgT2JqZWN0LmtleXModGhpcy5yYXZlT3B0aW9ucykubGVuZ3RoID4gMykge1xuICAgICAgaWYgKHRoaXMudmFsaWRhdGVPcHRpb25zKCkpIHtcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMucmF2ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUlucHV0KCkpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRSYXZlT3B0aW9ucygpO1xuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5fcmF2ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluc2VydFJhdmVPcHRpb25zKCkge1xuICAgIHRoaXMuYW1vdW50ID8gdGhpcy5fcmF2ZU9wdGlvbnMuYW1vdW50ID0gdGhpcy5hbW91bnQgOiBudWxsXG4gICAgdGhpcy5wYXltZW50X3BsYW4gPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X3BsYW4gPSB0aGlzLnBheW1lbnRfcGxhbiA6IG51bGxcbiAgICB0aGlzLlBCRlB1YktleSA/IHRoaXMuX3JhdmVPcHRpb25zLlBCRlB1YktleSA9IHRoaXMuUEJGUHViS2V5IDogbnVsbFxuICAgIHRoaXMucGF5bWVudF9tZXRob2QgPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X21ldGhvZCA9IHRoaXMucGF5bWVudF9tZXRob2QgOiBudWxsXG4gICAgdGhpcy5yZWRpcmVjdF91cmwgPyB0aGlzLl9yYXZlT3B0aW9ucy5yZWRpcmVjdF91cmwgPSB0aGlzLnJlZGlyZWN0X3VybCA6IG51bGxcbiAgICB0aGlzLmludGVncml0eV9oYXNoID8gdGhpcy5fcmF2ZU9wdGlvbnMuaW50ZWdyaXR5X2hhc2ggPSB0aGlzLmludGVncml0eV9oYXNoIDogbnVsbFxuICAgIHRoaXMucGF5X2J1dHRvbl90ZXh0ID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5X2J1dHRvbl90ZXh0ID0gdGhpcy5wYXlfYnV0dG9uX3RleHQgOiBudWxsXG4gICAgdGhpcy5jb3VudHJ5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY291bnRyeSA9IHRoaXMuY291bnRyeSA6IG51bGxcbiAgICB0aGlzLmN1cnJlbmN5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VycmVuY3kgPSB0aGlzLmN1cnJlbmN5IDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2Rlc2NyaXB0aW9uID0gdGhpcy5jdXN0b21fZGVzY3JpcHRpb24gOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9lbWFpbCA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsID0gdGhpcy5jdXN0b21lcl9lbWFpbCA6IG51bGxcbiAgICB0aGlzLmN1c3RvbV9sb2dvID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2xvZ28gPSB0aGlzLmN1c3RvbV9sb2dvIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX3RpdGxlID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX3RpdGxlID0gdGhpcy5jdXN0b21fdGl0bGUgOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9maXJzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9maXJzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA6IG51bGxcbiAgICB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfbGFzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tZXJfcGhvbmUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSA9IHRoaXMuY3VzdG9tZXJfcGhvbmUgOiBudWxsXG4gICAgdGhpcy50eHJlZiA/IHRoaXMuX3JhdmVPcHRpb25zLnR4cmVmID0gdGhpcy50eHJlZiA6IG51bGxcbiAgICB0aGlzLm9uY2xvc2UgPyB0aGlzLl9yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5vbmNsb3NlLmVtaXQoKVxuICAgIH0gOiBudWxsXG4gICAgdGhpcy5jYWxsYmFjayA/IHRoaXMuX3JhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHtcbiAgICAgIHRoaXMuY2FsbGJhY2suZW1pdChyZXMpO1xuICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcbiAgICB9IDogbnVsbFxuICB9XG5cbiAgdmFsaWRhdGVPcHRpb25zKCkge1xuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy5QQkZQdWJLZXkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkXCIpO1xuICAgIGlmICghKHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLnR4cmVmKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLmFtb3VudCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2sub2JzZXJ2ZXJzLmxlbmd0aCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uXCIpXG4gICAgaWYgKHRoaXMub25jbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB0aGlzLnJhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB0aGlzLm9uY2xvc2UuZW1pdCgpXG4gICAgdGhpcy5yYXZlT3B0aW9ucy5jYWxsYmFjayA9IHJlcyA9PiB7XG4gICAgICB0aGlzLmNhbGxiYWNrLmVtaXQocmVzKTtcbiAgICAgIHRoaXMucGF5bWVudFNldHVwLmNsb3NlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhbGlkYXRlSW5wdXQoKSB7XG4gICAgaWYgKCF0aGlzLlBCRlB1YktleSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCEodGhpcy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLmN1c3RvbWVyX3Bob25lKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoIXRoaXMudHhyZWYpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMuYW1vdW50KSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZFwiKVxuICAgIGlmICghdGhpcy5jYWxsYmFjaykgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uXCIpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIFJhdmVPcHRpb25zIHtcbiAgLyoqXG4gICAqIFlvdXIgbWVyY2hhbnQgcHVibGljIGtleSBwcm92aWRlZCB3aGVuIHlvdSBjcmVhdGUgYSBidXR0b25cbiAgICovXG4gIFBCRlB1YktleTogc3RyaW5nXG4gIC8qKlxuICAgKiBFbWFpbCBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX2VtYWlsPzogc3RyaW5nXG4gIC8qKlxuICAgKiBGaXJzdG5hbWUgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9maXJzdG5hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGZpcnN0bmFtZSBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX2xhc3RuYW1lPzogc3RyaW5nXG5cbiAgcGF5bWVudF9wbGFuPzogbnVtYmVyXG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBhcyBhIHNob3J0IG1vZGFsIGRlc2NyaXB0aW9uXG4gICAqL1xuICBjdXN0b21fZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgLyoqXG4gICAqIExpbmsgdG8geW91ciBjdXN0b20gaW1hZ2VcbiAgICovXG4gIGN1c3RvbV9sb2dvPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBhcyB0aGUgdGl0bGUgb2YgdGhlIHBheW1lbnQgbW9kYWxcbiAgICovXG4gIGN1c3RvbV90aXRsZT86IHN0cmluZ1xuICAvKipcbiAgICogQW1vdW50IHRvIGNoYXJnZVxuICAgKi9cbiAgYW1vdW50OiBudW1iZXJcbiAgLyoqXG4gICAqIHBob25lIG51bWJlciBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX3Bob25lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBVUkwgdG8gcmVkaXJlY3QgdG8gd2hlbiB0cmFuc2FjdGlvbiBpcyBjb21wbGV0ZWQuXG4gICAqL1xuICByZWRpcmVjdF91cmw/OiBzdHJpbmdcbiAgLyoqXG4gICAqIHJvdXRlIGNvdW50cnkuIERlZmF1bHQgTkdcbiAgICovXG4gIGNvdW50cnk/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGN1cnJlbmN5IHRvIGNoYXJnZSB0aGUgY2FyZCBpbi4gRGVmYXVsdCBcIk5HTlwiXG4gICAqL1xuICBjdXJyZW5jeT86IHN0cmluZ1xuICAvKipcbiAgICogVGhpcyBhbGxvd3MgeW91IHNlbGVjdCB0aGUgcGF5bWVudCBvcHRpb24geW91IHdhbnQgZm9yIHlvdXIgdXNlcnMsIHBvc3NpYmxlIHZhbHVlcyBhcmUgY2FyZCwgYWNjb3VudCBvciBib3RoXG4gICAqL1xuICBwYXltZW50X21ldGhvZD86IHN0cmluZ1xuICAvKipcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIFJhdmUgQ2hlY2tvdXQgQnV0dG9uXG4gICAqL1xuICBwYXlfYnV0dG9uX3RleHQ/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgcHJvdmlkZWQgYnkgdGhlIG1lcmNoYW50XG4gICAqL1xuICB0eHJlZjogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgc2hhMjU2IGhhc2ggb2YgeW91ciBnZXRwYWlkU2V0dXAgdmFsdWVzLCBpdCBpcyB1c2VkIGZvciBwYXNzaW5nIHNlY3VyZWQgdmFsdWVzIHRvIHRoZSBwYXltZW50IGdhdGV3YXlcbiAgICovXG4gIGludGVncml0eV9oYXNoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgdG8gYmUgcGFzc2VkIGZvciB0aGlzIGlzIDEuIFRoaXMgaXMgdXNlZnVsIHdoZW4gY3VzdG9tZXIgaXMgdXNpbmcgYW4gb3BlcmEgYnJvd3NlciwgaXQgd291bGQgbG9hZCB0aGUgcGF5bWVudCBtb2RhbCBvbiBhIG5ldyBwYWdlLlxuICAgKi9cbiAgaG9zdGVkX3BheW1lbnQ/OiAxXG4gIC8qKlxuICAgKiBBbnkgb3RoZXIgY3VzdG9tIGRhdGEgeW91IHdpc2ggdG8gcGFzcy5cbiAgICovXG4gIG1ldGE/OiBhbnlcbn1cblxuZXhwb3J0IGNsYXNzIF9SYXZlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBZb3VyIG1lcmNoYW50IHB1YmxpYyBrZXkgcHJvdmlkZWQgd2hlbiB5b3UgY3JlYXRlIGEgYnV0dG9uXG4gICAqL1xuICBQQkZQdWJLZXk6IHN0cmluZ1xuICAvKipcbiAgICogRW1haWwgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9lbWFpbD86IHN0cmluZ1xuICAvKipcbiAgICogRmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfZmlyc3RuYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBmaXJzdG5hbWUgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9sYXN0bmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgYXMgYSBzaG9ydCBtb2RhbCBkZXNjcmlwdGlvblxuICAgKi9cbiAgY3VzdG9tX2Rlc2NyaXB0aW9uPzogc3RyaW5nXG4gIC8qKlxuICAgKiBMaW5rIHRvIHlvdXIgY3VzdG9tIGltYWdlXG4gICAqL1xuICBjdXN0b21fbG9nbz86IHN0cmluZ1xuICAvKipcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgYXMgdGhlIHRpdGxlIG9mIHRoZSBwYXltZW50IG1vZGFsXG4gICAqL1xuICBjdXN0b21fdGl0bGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFtb3VudCB0byBjaGFyZ2VcbiAgICovXG4gIGFtb3VudDogbnVtYmVyXG5cbiAgcGF5bWVudF9wbGFuOiBudW1iZXJcbiAgLyoqXG4gICAqIHBob25lIG51bWJlciBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX3Bob25lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBVUkwgdG8gcmVkaXJlY3QgdG8gd2hlbiB0cmFuc2FjdGlvbiBpcyBjb21wbGV0ZWQuXG4gICAqL1xuICByZWRpcmVjdF91cmw/OiBzdHJpbmdcbiAgLyoqXG4gICAqIHJvdXRlIGNvdW50cnkuIERlZmF1bHQgTkdcbiAgICovXG4gIGNvdW50cnk/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGN1cnJlbmN5IHRvIGNoYXJnZSB0aGUgY2FyZCBpbi4gRGVmYXVsdCBcIk5HTlwiXG4gICAqL1xuICBjdXJyZW5jeT86IHN0cmluZ1xuICAvKipcbiAgICogVGhpcyBhbGxvd3MgeW91IHNlbGVjdCB0aGUgcGF5bWVudCBvcHRpb24geW91IHdhbnQgZm9yIHlvdXIgdXNlcnMsIHBvc3NpYmxlIHZhbHVlcyBhcmUgY2FyZCwgYWNjb3VudCBvciBib3RoXG4gICAqL1xuICBwYXltZW50X21ldGhvZD86IHN0cmluZ1xuICAvKipcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIFJhdmUgQ2hlY2tvdXQgQnV0dG9uXG4gICAqL1xuICBwYXlfYnV0dG9uX3RleHQ/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgcHJvdmlkZWQgYnkgdGhlIG1lcmNoYW50XG4gICAqL1xuICB0eHJlZjogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgc2hhMjU2IGhhc2ggb2YgeW91ciBnZXRwYWlkU2V0dXAgdmFsdWVzLCBpdCBpcyB1c2VkIGZvciBwYXNzaW5nIHNlY3VyZWQgdmFsdWVzIHRvIHRoZSBwYXltZW50IGdhdGV3YXlcbiAgICovXG4gIGludGVncml0eV9oYXNoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgdG8gYmUgcGFzc2VkIGZvciB0aGlzIGlzIDEuIFRoaXMgaXMgdXNlZnVsIHdoZW4gY3VzdG9tZXIgaXMgdXNpbmcgYW4gb3BlcmEgYnJvd3NlciwgaXQgd291bGQgbG9hZCB0aGUgcGF5bWVudCBtb2RhbCBvbiBhIG5ldyBwYWdlLlxuICAgKi9cbiAgaG9zdGVkX3BheW1lbnQ/OiAxXG4gIC8qKlxuICAgKiBBbnkgb3RoZXIgY3VzdG9tIGRhdGEgeW91IHdpc2ggdG8gcGFzcy5cbiAgICovXG4gIG1ldGE/OiBhbnlcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3NmdWwgY2FyZCBjaGFyZ2UuIFVzZXLDosKAwplzIGNhbiBhbHdheXMgYmUgcmVkaXJlY3RlZCB0byBhIHN1Y2Nlc3NmdWwgb3IgZmFpbGVkIHBhZ2Ugc3VwcGxpZWQgYnkgdGhlIG1lcmNoYW50IGhlcmUgYmFzZWQgb24gcmVzcG9uc2VcbiAgICogQHBhcmFtIHJlc3BvbnNlPzogVGhlIHNlcnZlciByZXNwb25zZVxuICAgKi9cbiAgY2FsbGJhY2s6IChyZXNwb25zZT86IGFueSkgPT4gdm9pZFxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgcGF5IG1vZGFsIGlzIGNsb3NlZC5cbiAgICovXG4gIG9uY2xvc2U6ICgpID0+IHZvaWRcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFyUmF2ZUNvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhci1yYXZlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbmd1bGFyUmF2ZURpcmVjdGl2ZSB9IGZyb20gXCIuL2FuZ3VsYXItcmF2ZS5kaXJlY3RpdmVcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtBbmd1bGFyUmF2ZUNvbXBvbmVudCwgQW5ndWxhclJhdmVEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtBbmd1bGFyUmF2ZUNvbXBvbmVudCwgQW5ndWxhclJhdmVEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbnB1dCIsIk91dHB1dCIsIkRpcmVjdGl2ZSIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUF1Q0U7MkJBTHdDLElBQUlBLGlCQUFZLEVBQVE7NEJBQ3JCLElBQUlBLGlCQUFZLEVBQVU7U0FJcEQ7Ozs7UUFFakIsa0NBQUc7OztZQUFIO2dCQUNFLElBQUksT0FBTyxNQUFNLENBQUMsWUFBWSxLQUFLLFVBQVUsRUFBRTtvQkFDN0MsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGtGQUFrRixDQUFDLENBQUE7aUJBQ3pHOztnQkFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDaEUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUU7d0JBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7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QUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtnQkFDN0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtnQkFDcEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQTtnQkFDbkYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtnQkFDN0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQTtnQkFDbkYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQTtnQkFDdEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtnQkFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtnQkFDakUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQTtnQkFDL0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQTtnQkFDbkYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMs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