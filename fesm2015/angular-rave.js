import { Component, EventEmitter, Input, Output, Directive, HostListener, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AngularRaveComponent {
    constructor() {
        this.onclose = new EventEmitter();
        this.callback = new EventEmitter();
    }
    /**
     * @return {?}
     */
    pay() {
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
                this.paymentSetup = window.getpaidSetup(this._raveOptions);
            }
        }
    }
    /**
     * @return {?}
     */
    insertRaveOptions() {
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
        this.onclose ? this._raveOptions.onclose = () => this.onclose.emit() : null;
        if (this.callback) {
            this._raveOptions.callback = (res) => {
                this.onclose.emit(res);
                this.paymentSetup.close();
            };
        }
    }
    /**
     * @return {?}
     */
    validateOptions() {
        console.log(this.paymentSetup);
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
            this.raveOptions.onclose = () => this.onclose.emit();
        this.raveOptions.callback = res => {
            this.callback.emit(res);
            this.paymentSetup.close();
        };
        return true;
    }
    /**
     * @return {?}
     */
    validateInput() {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.pay();
    }
}
AngularRaveComponent.decorators = [
    { type: Component, args: [{
                selector: 'angular-rave',
                template: `<ng-content></ng-content>`
            },] },
];
/** @nocollapse */
AngularRaveComponent.ctorParameters = () => [];
AngularRaveComponent.propDecorators = {
    "PBFPubKey": [{ type: Input },],
    "integrity_hash": [{ type: Input },],
    "txref": [{ type: Input },],
    "payment_method": [{ type: Input },],
    "amount": [{ type: Input },],
    "payment_plan": [{ type: Input },],
    "currency": [{ type: Input },],
    "country": [{ type: Input },],
    "customer_email": [{ type: Input },],
    "customer_phone": [{ type: Input },],
    "customer_firstname": [{ type: Input },],
    "customer_lastname": [{ type: Input },],
    "pay_button_text": [{ type: Input },],
    "custom_title": [{ type: Input },],
    "custom_description": [{ type: Input },],
    "redirect_url": [{ type: Input },],
    "custom_logo": [{ type: Input },],
    "meta": [{ type: Input },],
    "raveOptions": [{ type: Input },],
    "onclose": [{ type: Output },],
    "callback": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AngularRaveDirective {
    constructor() {
        this.raveOptions = {};
        this.onclose = new EventEmitter();
        this.callback = new EventEmitter();
        this._raveOptions = {};
    }
    /**
     * @return {?}
     */
    buttonClick() {
        this.pay();
    }
    /**
     * @return {?}
     */
    pay() {
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
    }
    /**
     * @return {?}
     */
    insertRaveOptions() {
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
        this.onclose ? this._raveOptions.onclose = () => {
            this.onclose.emit();
        } : null;
        if (this.callback) {
            this._raveOptions.callback = (res) => {
                this.onclose.emit(res);
                this.paymentSetup.close();
            };
        }
    }
    /**
     * @return {?}
     */
    validateOptions() {
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
            this.raveOptions.onclose = () => this.onclose.emit();
        this.raveOptions.callback = res => {
            this.callback.emit(res);
            this.paymentSetup.close();
        };
        return true;
    }
    /**
     * @return {?}
     */
    validateInput() {
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
    }
}
AngularRaveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[angular-rave]'
            },] },
];
/** @nocollapse */
AngularRaveDirective.ctorParameters = () => [];
AngularRaveDirective.propDecorators = {
    "PBFPubKey": [{ type: Input },],
    "integrity_hash": [{ type: Input },],
    "txref": [{ type: Input },],
    "payment_method": [{ type: Input },],
    "amount": [{ type: Input },],
    "payment_plan": [{ type: Input },],
    "currency": [{ type: Input },],
    "country": [{ type: Input },],
    "customer_email": [{ type: Input },],
    "customer_phone": [{ type: Input },],
    "customer_firstname": [{ type: Input },],
    "customer_lastname": [{ type: Input },],
    "pay_button_text": [{ type: Input },],
    "custom_title": [{ type: Input },],
    "custom_description": [{ type: Input },],
    "redirect_url": [{ type: Input },],
    "custom_logo": [{ type: Input },],
    "meta": [{ type: Input },],
    "raveOptions": [{ type: Input },],
    "onclose": [{ type: Output },],
    "callback": [{ type: Output },],
    "buttonClick": [{ type: HostListener, args: ['click',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RaveOptions {
}
class _RaveOptions {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AngularRaveModule {
}
AngularRaveModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: [AngularRaveComponent, AngularRaveDirective],
                declarations: [AngularRaveComponent, AngularRaveDirective],
                providers: [],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AngularRaveComponent, AngularRaveDirective, RaveOptions, _RaveOptions, AngularRaveModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvYW5ndWxhci1yYXZlLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1yYXZlL2xpYi9yYXZlLW9wdGlvbnMudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvYW5ndWxhci1yYXZlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfUmF2ZU9wdGlvbnMgfSBmcm9tIFwiLi9yYXZlLW9wdGlvbnNcIjtcblxuaW50ZXJmYWNlIG15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgZ2V0cGFpZFNldHVwOiAocmF2ZU9wdGlvbnM6IFBhcnRpYWw8X1JhdmVPcHRpb25zPikgPT4gdm9pZFxufVxuXG5kZWNsYXJlIHZhciB3aW5kb3c6IG15V2luZG93XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuZ3VsYXItcmF2ZScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIFBCRlB1YktleTogc3RyaW5nO1xuICBASW5wdXQoKSBpbnRlZ3JpdHlfaGFzaDogc3RyaW5nO1xuICBASW5wdXQoKSB0eHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBwYXltZW50X21ldGhvZDogc3RyaW5nO1xuICBASW5wdXQoKSBhbW91bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgcGF5bWVudF9wbGFuOiBudW1iZXI7XG4gIEBJbnB1dCgpIGN1cnJlbmN5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfZW1haWw6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfcGhvbmU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfZmlyc3RuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBheV9idXR0b25fdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlZGlyZWN0X3VybDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fbG9nbzogc3RyaW5nO1xuICBASW5wdXQoKSBtZXRhOiBhbnk7XG4gIEBJbnB1dCgpIHJhdmVPcHRpb25zOiBQYXJ0aWFsPF9SYXZlT3B0aW9ucz5cbiAgQE91dHB1dCgpIG9uY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xuICBwcml2YXRlIF9yYXZlT3B0aW9uczogUGFydGlhbDxfUmF2ZU9wdGlvbnM+XG4gIHByaXZhdGUgcGF5bWVudFNldHVwOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwYXkoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0cGFpZFNldHVwICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBQbGVhc2UgdmVyaWZ5IHRoYXQgeW91IGltcG9ydGVkIHJhdmUncyBzY3JpcHQgaW50byB5b3VyIGluZGV4Lmh0bWxcIilcbiAgICB9XG4gICAgLy8gSWYgdGhlIHJhdmVvcHRpb25zIElucHV0IGlzIHByZXNlbnQgdGhlbiB1c2UgaXRcbiAgICBpZiAodGhpcy5yYXZlT3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLnJhdmVPcHRpb25zKS5sZW5ndGggPiAzKSB7XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZU9wdGlvbnMoKSkge1xuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5yYXZlT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlSW5wdXQoKSkge1xuICAgICAgICB0aGlzLmluc2VydFJhdmVPcHRpb25zKClcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAgPSB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMuX3JhdmVPcHRpb25zKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluc2VydFJhdmVPcHRpb25zKCkge1xuICAgIHRoaXMuYW1vdW50ID8gdGhpcy5fcmF2ZU9wdGlvbnMuYW1vdW50ID0gdGhpcy5hbW91bnQgOiBudWxsXG4gICAgdGhpcy5wYXltZW50X3BsYW4gPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X3BsYW4gPSB0aGlzLnBheW1lbnRfcGxhbiA6IG51bGxcbiAgICB0aGlzLlBCRlB1YktleSA/IHRoaXMuX3JhdmVPcHRpb25zLlBCRlB1YktleSA9IHRoaXMuUEJGUHViS2V5IDogbnVsbFxuICAgIHRoaXMucGF5bWVudF9tZXRob2QgPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X21ldGhvZCA9IHRoaXMucGF5bWVudF9tZXRob2QgOiBudWxsXG4gICAgdGhpcy5yZWRpcmVjdF91cmwgPyB0aGlzLl9yYXZlT3B0aW9ucy5yZWRpcmVjdF91cmwgPSB0aGlzLnJlZGlyZWN0X3VybCA6IG51bGxcbiAgICB0aGlzLmludGVncml0eV9oYXNoID8gdGhpcy5fcmF2ZU9wdGlvbnMuaW50ZWdyaXR5X2hhc2ggPSB0aGlzLmludGVncml0eV9oYXNoIDogbnVsbFxuICAgIHRoaXMucGF5X2J1dHRvbl90ZXh0ID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5X2J1dHRvbl90ZXh0ID0gdGhpcy5wYXlfYnV0dG9uX3RleHQgOiBudWxsXG4gICAgdGhpcy5jb3VudHJ5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY291bnRyeSA9IHRoaXMuY291bnRyeSA6IG51bGxcbiAgICB0aGlzLmN1cnJlbmN5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VycmVuY3kgPSB0aGlzLmN1cnJlbmN5IDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2Rlc2NyaXB0aW9uID0gdGhpcy5jdXN0b21fZGVzY3JpcHRpb24gOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9lbWFpbCA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsID0gdGhpcy5jdXN0b21lcl9lbWFpbCA6IG51bGxcbiAgICB0aGlzLmN1c3RvbV9sb2dvID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2xvZ28gPSB0aGlzLmN1c3RvbV9sb2dvIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX3RpdGxlID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX3RpdGxlID0gdGhpcy5jdXN0b21fdGl0bGUgOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9maXJzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9maXJzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA6IG51bGxcbiAgICB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfbGFzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lIDogbnVsbFxuICAgIHRoaXMudHhyZWYgPyB0aGlzLl9yYXZlT3B0aW9ucy50eHJlZiA9IHRoaXMudHhyZWYgOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9waG9uZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lID0gdGhpcy5jdXN0b21lcl9waG9uZSA6IG51bGxcbiAgICB0aGlzLm9uY2xvc2UgPyB0aGlzLl9yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4gdGhpcy5vbmNsb3NlLmVtaXQoKSA6IG51bGxcbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5fcmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSAocmVzKSA9PiB7XG4gICAgICAgIHRoaXMub25jbG9zZS5lbWl0KHJlcyk7XG4gICAgICAgIHRoaXMucGF5bWVudFNldHVwLmNsb3NlKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlT3B0aW9ucygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBheW1lbnRTZXR1cCk7XG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLlBCRlB1YktleSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCEodGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMudHhyZWYpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuYW1vdW50KSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZFwiKVxuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogWW91IHNob3VsZCBhdHRhY2ggdG8gY2FsbGJhY2sgdG8gdmVyaWZ5IHlvdXIgdHJhbnNhY3Rpb25cIilcbiAgICBpZiAodGhpcy5vbmNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHRoaXMucmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KClcbiAgICB0aGlzLnJhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHtcbiAgICAgIHRoaXMuY2FsbGJhY2suZW1pdChyZXMpO1xuICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcbiAgICB9O1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB2YWxpZGF0ZUlucHV0KCkge1xuICAgIGlmICghdGhpcy5QQkZQdWJLZXkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkXCIpO1xuICAgIGlmICghKHRoaXMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5jdXN0b21lcl9waG9uZSkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCF0aGlzLnR4cmVmKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLmFtb3VudCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2spIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvblwiKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBheSgpXG4gIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgX1JhdmVPcHRpb25zIH0gZnJvbSBcIi4vcmF2ZS1vcHRpb25zXCI7XG5cbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIGdldHBhaWRTZXR1cDogKHJhdmVPcHRpb25zOiBQYXJ0aWFsPF9SYXZlT3B0aW9ucz4pID0+IHZvaWRcbn1cblxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvd1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW5ndWxhci1yYXZlXSdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdmVEaXJlY3RpdmUge1xuICBASW5wdXQoKSBQQkZQdWJLZXk6IHN0cmluZztcbiAgQElucHV0KCkgaW50ZWdyaXR5X2hhc2g6IHN0cmluZztcbiAgQElucHV0KCkgdHhyZWY6IHN0cmluZztcbiAgQElucHV0KCkgcGF5bWVudF9tZXRob2Q6IHN0cmluZztcbiAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBheW1lbnRfcGxhbjogbnVtYmVyO1xuICBASW5wdXQoKSBjdXJyZW5jeTogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2VtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX3Bob25lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9sYXN0bmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYXlfYnV0dG9uX3RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX3RpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbV9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSByZWRpcmVjdF91cmw6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX2xvZ286IHN0cmluZztcbiAgQElucHV0KCkgbWV0YTogYW55O1xuICBASW5wdXQoKSByYXZlT3B0aW9uczogUGFydGlhbDxfUmF2ZU9wdGlvbnM+ID0ge31cbiAgQE91dHB1dCgpIG9uY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwcml2YXRlIF9yYXZlT3B0aW9uczogUGFydGlhbDxfUmF2ZU9wdGlvbnM+ID0ge31cbiAgcHJpdmF0ZSBwYXltZW50U2V0dXA6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMucGF5KClcbiAgfVxuXG4gIHBheSgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IFBsZWFzZSB2ZXJpZnkgdGhhdCB5b3UgaW1wb3J0ZWQgcmF2ZSdzIHNjcmlwdCBpbnRvIHlvdXIgaW5kZXguaHRtbFwiKVxuICAgIH1cbiAgICAvLyBJZiB0aGUgcmF2ZW9wdGlvbnMgSW5wdXQgaXMgcHJlc2VudCB0aGVuIHVzZVxuICAgIGlmICh0aGlzLnJhdmVPcHRpb25zICYmIE9iamVjdC5rZXlzKHRoaXMucmF2ZU9wdGlvbnMpLmxlbmd0aCA+IDMpIHtcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlT3B0aW9ucygpKSB7XG4gICAgICAgIHRoaXMucGF5bWVudFNldHVwID0gd2luZG93LmdldHBhaWRTZXR1cCh0aGlzLnJhdmVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudmFsaWRhdGVJbnB1dCgpKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0UmF2ZU9wdGlvbnMoKVxuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5fcmF2ZU9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0UmF2ZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5hbW91bnQgPyB0aGlzLl9yYXZlT3B0aW9ucy5hbW91bnQgPSB0aGlzLmFtb3VudCA6IG51bGxcbiAgICB0aGlzLnBheW1lbnRfcGxhbiA/IHRoaXMuX3JhdmVPcHRpb25zLnBheW1lbnRfcGxhbiA9IHRoaXMucGF5bWVudF9wbGFuIDogbnVsbFxuICAgIHRoaXMuUEJGUHViS2V5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuUEJGUHViS2V5ID0gdGhpcy5QQkZQdWJLZXkgOiBudWxsXG4gICAgdGhpcy5wYXltZW50X21ldGhvZCA/IHRoaXMuX3JhdmVPcHRpb25zLnBheW1lbnRfbWV0aG9kID0gdGhpcy5wYXltZW50X21ldGhvZCA6IG51bGxcbiAgICB0aGlzLnJlZGlyZWN0X3VybCA/IHRoaXMuX3JhdmVPcHRpb25zLnJlZGlyZWN0X3VybCA9IHRoaXMucmVkaXJlY3RfdXJsIDogbnVsbFxuICAgIHRoaXMuaW50ZWdyaXR5X2hhc2ggPyB0aGlzLl9yYXZlT3B0aW9ucy5pbnRlZ3JpdHlfaGFzaCA9IHRoaXMuaW50ZWdyaXR5X2hhc2ggOiBudWxsXG4gICAgdGhpcy5wYXlfYnV0dG9uX3RleHQgPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXlfYnV0dG9uX3RleHQgPSB0aGlzLnBheV9idXR0b25fdGV4dCA6IG51bGxcbiAgICB0aGlzLmNvdW50cnkgPyB0aGlzLl9yYXZlT3B0aW9ucy5jb3VudHJ5ID0gdGhpcy5jb3VudHJ5IDogbnVsbFxuICAgIHRoaXMuY3VycmVuY3kgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXJyZW5jeSA9IHRoaXMuY3VycmVuY3kgOiBudWxsXG4gICAgdGhpcy5jdXN0b21fZGVzY3JpcHRpb24gPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fZGVzY3JpcHRpb24gPSB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbiA6IG51bGxcbiAgICB0aGlzLmN1c3RvbWVyX2VtYWlsID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgPSB0aGlzLmN1c3RvbWVyX2VtYWlsIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX2xvZ28gPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fbG9nbyA9IHRoaXMuY3VzdG9tX2xvZ28gOiBudWxsXG4gICAgdGhpcy5jdXN0b21fdGl0bGUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fdGl0bGUgPSB0aGlzLmN1c3RvbV90aXRsZSA6IG51bGxcbiAgICB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2ZpcnN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9sYXN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9waG9uZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lID0gdGhpcy5jdXN0b21lcl9waG9uZSA6IG51bGxcbiAgICB0aGlzLnR4cmVmID8gdGhpcy5fcmF2ZU9wdGlvbnMudHhyZWYgPSB0aGlzLnR4cmVmIDogbnVsbFxuICAgIHRoaXMub25jbG9zZSA/IHRoaXMuX3JhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9uY2xvc2UuZW1pdCgpXG4gICAgfSA6IG51bGxcbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5fcmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSAocmVzKSA9PiB7XG4gICAgICAgIHRoaXMub25jbG9zZS5lbWl0KHJlcyk7XG4gICAgICAgIHRoaXMucGF5bWVudFNldHVwLmNsb3NlKCk7XG4gICAgICB9IFxuICAgIH0gXG4gIH1cblxuICB2YWxpZGF0ZU9wdGlvbnMoKSB7XG5cbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuUEJGUHViS2V5KSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoISh0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkXCIpO1xuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy50eHJlZikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZFwiKVxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy5hbW91bnQpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrLm9ic2VydmVycy5sZW5ndGgpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvblwiKVxuICAgIGlmICh0aGlzLm9uY2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkgdGhpcy5yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4gdGhpcy5vbmNsb3NlLmVtaXQoKVxuICAgIHRoaXMucmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSByZXMgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KHJlcyk7XG4gICAgICB0aGlzLnBheW1lbnRTZXR1cC5jbG9zZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHZhbGlkYXRlSW5wdXQoKSB7XG4gICAgaWYgKCF0aGlzLlBCRlB1YktleSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCEodGhpcy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLmN1c3RvbWVyX3Bob25lKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoIXRoaXMudHhyZWYpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMuYW1vdW50KSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZFwiKVxuICAgIGlmICghdGhpcy5jYWxsYmFjaykgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uXCIpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIFJhdmVPcHRpb25zIHtcbiAgLyoqXG4gICAqIFlvdXIgbWVyY2hhbnQgcHVibGljIGtleSBwcm92aWRlZCB3aGVuIHlvdSBjcmVhdGUgYSBidXR0b25cbiAgICovXG4gIFBCRlB1YktleTogc3RyaW5nXG4gIC8qKlxuICAgKiBFbWFpbCBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX2VtYWlsPzogc3RyaW5nXG4gIC8qKlxuICAgKiBGaXJzdG5hbWUgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9maXJzdG5hbWU/OiBzdHJpbmdcblxuICBwYXltZW50X3BsYW4/OiBudW1iZXJcbiAgLyoqXG4gICAqIGZpcnN0bmFtZSBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX2xhc3RuYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBhcyBhIHNob3J0IG1vZGFsIGRlc2NyaXB0aW9uXG4gICAqL1xuICBjdXN0b21fZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgLyoqXG4gICAqIExpbmsgdG8geW91ciBjdXN0b20gaW1hZ2VcbiAgICovXG4gIGN1c3RvbV9sb2dvPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBhcyB0aGUgdGl0bGUgb2YgdGhlIHBheW1lbnQgbW9kYWxcbiAgICovXG4gIGN1c3RvbV90aXRsZT86IHN0cmluZ1xuICAvKipcbiAgICogQW1vdW50IHRvIGNoYXJnZVxuICAgKi9cbiAgYW1vdW50OiBudW1iZXJcbiAgLyoqXG4gICAqIHBob25lIG51bWJlciBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX3Bob25lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBVUkwgdG8gcmVkaXJlY3QgdG8gd2hlbiB0cmFuc2FjdGlvbiBpcyBjb21wbGV0ZWQuXG4gICAqL1xuICByZWRpcmVjdF91cmw/OiBzdHJpbmdcbiAgLyoqXG4gICAqIHJvdXRlIGNvdW50cnkuIERlZmF1bHQgTkdcbiAgICovXG4gIGNvdW50cnk/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGN1cnJlbmN5IHRvIGNoYXJnZSB0aGUgY2FyZCBpbi4gRGVmYXVsdCBcIk5HTlwiXG4gICAqL1xuICBjdXJyZW5jeT86IHN0cmluZ1xuICAvKipcbiAgICogVGhpcyBhbGxvd3MgeW91IHNlbGVjdCB0aGUgcGF5bWVudCBvcHRpb24geW91IHdhbnQgZm9yIHlvdXIgdXNlcnMsIHBvc3NpYmxlIHZhbHVlcyBhcmUgY2FyZCwgYWNjb3VudCBvciBib3RoXG4gICAqL1xuICBwYXltZW50X21ldGhvZD86IHN0cmluZ1xuICAvKipcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIFJhdmUgQ2hlY2tvdXQgQnV0dG9uXG4gICAqL1xuICBwYXlfYnV0dG9uX3RleHQ/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgcHJvdmlkZWQgYnkgdGhlIG1lcmNoYW50XG4gICAqL1xuICB0eHJlZjogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgc2hhMjU2IGhhc2ggb2YgeW91ciBnZXRwYWlkU2V0dXAgdmFsdWVzLCBpdCBpcyB1c2VkIGZvciBwYXNzaW5nIHNlY3VyZWQgdmFsdWVzIHRvIHRoZSBwYXltZW50IGdhdGV3YXlcbiAgICovXG4gIGludGVncml0eV9oYXNoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgdG8gYmUgcGFzc2VkIGZvciB0aGlzIGlzIDEuIFRoaXMgaXMgdXNlZnVsIHdoZW4gY3VzdG9tZXIgaXMgdXNpbmcgYW4gb3BlcmEgYnJvd3NlciwgaXQgd291bGQgbG9hZCB0aGUgcGF5bWVudCBtb2RhbCBvbiBhIG5ldyBwYWdlLlxuICAgKi9cbiAgaG9zdGVkX3BheW1lbnQ/OiAxXG4gIC8qKlxuICAgKiBBbnkgb3RoZXIgY3VzdG9tIGRhdGEgeW91IHdpc2ggdG8gcGFzcy5cbiAgICovXG4gIG1ldGE/OiBhbnlcbn1cblxuZXhwb3J0IGNsYXNzIF9SYXZlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBZb3VyIG1lcmNoYW50IHB1YmxpYyBrZXkgcHJvdmlkZWQgd2hlbiB5b3UgY3JlYXRlIGEgYnV0dG9uXG4gICAqL1xuICBQQkZQdWJLZXk6IHN0cmluZ1xuICAvKipcbiAgICogRW1haWwgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9lbWFpbD86IHN0cmluZ1xuXG4gIHBheW1lbnRfcGxhbj86IG51bWJlclxuICAvKipcbiAgICogRmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfZmlyc3RuYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBmaXJzdG5hbWUgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9sYXN0bmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgYXMgYSBzaG9ydCBtb2RhbCBkZXNjcmlwdGlvblxuICAgKi9cbiAgY3VzdG9tX2Rlc2NyaXB0aW9uPzogc3RyaW5nXG4gIC8qKlxuICAgKiBMaW5rIHRvIHlvdXIgY3VzdG9tIGltYWdlXG4gICAqL1xuICBjdXN0b21fbG9nbz86IHN0cmluZ1xuICAvKipcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgYXMgdGhlIHRpdGxlIG9mIHRoZSBwYXltZW50IG1vZGFsXG4gICAqL1xuICBjdXN0b21fdGl0bGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFtb3VudCB0byBjaGFyZ2VcbiAgICovXG4gIGFtb3VudDogbnVtYmVyXG4gIC8qKlxuICAgKiBwaG9uZSBudW1iZXIgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9waG9uZT86IHN0cmluZ1xuICAvKipcbiAgICogVVJMIHRvIHJlZGlyZWN0IHRvIHdoZW4gdHJhbnNhY3Rpb24gaXMgY29tcGxldGVkLlxuICAgKi9cbiAgcmVkaXJlY3RfdXJsPzogc3RyaW5nXG4gIC8qKlxuICAgKiByb3V0ZSBjb3VudHJ5LiBEZWZhdWx0IE5HXG4gICAqL1xuICBjb3VudHJ5Pzogc3RyaW5nXG4gIC8qKlxuICAgKiBjdXJyZW5jeSB0byBjaGFyZ2UgdGhlIGNhcmQgaW4uIERlZmF1bHQgXCJOR05cIlxuICAgKi9cbiAgY3VycmVuY3k/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoaXMgYWxsb3dzIHlvdSBzZWxlY3QgdGhlIHBheW1lbnQgb3B0aW9uIHlvdSB3YW50IGZvciB5b3VyIHVzZXJzLCBwb3NzaWJsZSB2YWx1ZXMgYXJlIGNhcmQsIGFjY291bnQgb3IgYm90aFxuICAgKi9cbiAgcGF5bWVudF9tZXRob2Q/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBSYXZlIENoZWNrb3V0IEJ1dHRvblxuICAgKi9cbiAgcGF5X2J1dHRvbl90ZXh0Pzogc3RyaW5nXG4gIC8qKlxuICAgKiBVbmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIHByb3ZpZGVkIGJ5IHRoZSBtZXJjaGFudFxuICAgKi9cbiAgdHhyZWY6IHN0cmluZ1xuICAvKipcbiAgICogVGhpcyBpcyBhIHNoYTI1NiBoYXNoIG9mIHlvdXIgZ2V0cGFpZFNldHVwIHZhbHVlcywgaXQgaXMgdXNlZCBmb3IgcGFzc2luZyBzZWN1cmVkIHZhbHVlcyB0byB0aGUgcGF5bWVudCBnYXRld2F5XG4gICAqL1xuICBpbnRlZ3JpdHlfaGFzaD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIHZhbHVlIHRvIGJlIHBhc3NlZCBmb3IgdGhpcyBpcyAxLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGN1c3RvbWVyIGlzIHVzaW5nIGFuIG9wZXJhIGJyb3dzZXIsIGl0IHdvdWxkIGxvYWQgdGhlIHBheW1lbnQgbW9kYWwgb24gYSBuZXcgcGFnZS5cbiAgICovXG4gIGhvc3RlZF9wYXltZW50PzogMVxuICAvKipcbiAgICogQW55IG90aGVyIGN1c3RvbSBkYXRhIHlvdSB3aXNoIHRvIHBhc3MuXG4gICAqL1xuICBtZXRhPzogYW55XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBzdWNjZXNzZnVsIGNhcmQgY2hhcmdlLiBVc2Vyw6LCgMKZcyBjYW4gYWx3YXlzIGJlIHJlZGlyZWN0ZWQgdG8gYSBzdWNjZXNzZnVsIG9yIGZhaWxlZCBwYWdlIHN1cHBsaWVkIGJ5IHRoZSBtZXJjaGFudCBoZXJlIGJhc2VkIG9uIHJlc3BvbnNlXG4gICAqIEBwYXJhbSByZXNwb25zZT86IFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICovXG4gIGNhbGxiYWNrOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWRcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHBheSBtb2RhbCBpcyBjbG9zZWQuXG4gICAqL1xuICBvbmNsb3NlOiAoKSA9PiB2b2lkXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhclJhdmVDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItcmF2ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5ndWxhclJhdmVEaXJlY3RpdmUgfSBmcm9tIFwiLi9hbmd1bGFyLXJhdmUuZGlyZWN0aXZlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbQW5ndWxhclJhdmVDb21wb25lbnQsIEFuZ3VsYXJSYXZlRGlyZWN0aXZlXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhclJhdmVDb21wb25lbnQsIEFuZ3VsYXJSYXZlRGlyZWN0aXZlXSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdmVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUF1Q0U7dUJBTHdDLElBQUksWUFBWSxFQUFRO3dCQUNyQixJQUFJLFlBQVksRUFBVTtLQUlwRDs7OztJQUVqQixHQUFHO1FBQ0QsSUFBSSxPQUFPLE1BQU0sQ0FBQyxZQUFZLEtBQUssVUFBVSxFQUFFO1lBQzdDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxrRkFBa0YsQ0FBQyxDQUFBO1NBQ3pHOztRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2hFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO2dCQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMs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