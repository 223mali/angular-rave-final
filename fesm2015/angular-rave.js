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
                window.getpaidSetup(this._raveOptions);
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
        this.callback ? this._raveOptions.callback = (res) => this.onclose.emit(res) : null;
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
        this.raveOptions.callback = res => this.callback.emit(res);
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
        this.callback ? this._raveOptions.callback = res => {
            this.callback.emit(res);
            this.paymentSetup.close();
        } : null;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvYW5ndWxhci1yYXZlLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1yYXZlL2xpYi9yYXZlLW9wdGlvbnMudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvYW5ndWxhci1yYXZlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfUmF2ZU9wdGlvbnMgfSBmcm9tIFwiLi9yYXZlLW9wdGlvbnNcIjtcblxuaW50ZXJmYWNlIG15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgZ2V0cGFpZFNldHVwOiAocmF2ZU9wdGlvbnM6IFBhcnRpYWw8X1JhdmVPcHRpb25zPikgPT4gdm9pZFxufVxuXG5kZWNsYXJlIHZhciB3aW5kb3c6IG15V2luZG93XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuZ3VsYXItcmF2ZScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIFBCRlB1YktleTogc3RyaW5nO1xuICBASW5wdXQoKSBpbnRlZ3JpdHlfaGFzaDogc3RyaW5nO1xuICBASW5wdXQoKSB0eHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBwYXltZW50X21ldGhvZDogc3RyaW5nO1xuICBASW5wdXQoKSBhbW91bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgcGF5bWVudF9wbGFuOiBudW1iZXI7XG4gIEBJbnB1dCgpIGN1cnJlbmN5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfZW1haWw6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfcGhvbmU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfZmlyc3RuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBheV9idXR0b25fdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlZGlyZWN0X3VybDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fbG9nbzogc3RyaW5nO1xuICBASW5wdXQoKSBtZXRhOiBhbnk7XG4gIEBJbnB1dCgpIHJhdmVPcHRpb25zOiBQYXJ0aWFsPF9SYXZlT3B0aW9ucz5cbiAgQE91dHB1dCgpIG9uY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xuICBwcml2YXRlIF9yYXZlT3B0aW9uczogUGFydGlhbDxfUmF2ZU9wdGlvbnM+XG4gIHByaXZhdGUgcGF5bWVudFNldHVwOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwYXkoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0cGFpZFNldHVwICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBQbGVhc2UgdmVyaWZ5IHRoYXQgeW91IGltcG9ydGVkIHJhdmUncyBzY3JpcHQgaW50byB5b3VyIGluZGV4Lmh0bWxcIilcbiAgICB9XG4gICAgLy8gSWYgdGhlIHJhdmVvcHRpb25zIElucHV0IGlzIHByZXNlbnQgdGhlbiB1c2UgaXRcbiAgICBpZiAodGhpcy5yYXZlT3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLnJhdmVPcHRpb25zKS5sZW5ndGggPiAzKSB7XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZU9wdGlvbnMoKSkge1xuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5yYXZlT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlSW5wdXQoKSkge1xuICAgICAgICB0aGlzLmluc2VydFJhdmVPcHRpb25zKCk7XG4gICAgICAgIHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5fcmF2ZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5fcmF2ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluc2VydFJhdmVPcHRpb25zKCkge1xuICAgIHRoaXMuYW1vdW50ID8gdGhpcy5fcmF2ZU9wdGlvbnMuYW1vdW50ID0gdGhpcy5hbW91bnQgOiBudWxsXG4gICAgdGhpcy5wYXltZW50X3BsYW4gPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X3BsYW4gPSB0aGlzLnBheW1lbnRfcGxhbiA6IG51bGxcbiAgICB0aGlzLlBCRlB1YktleSA/IHRoaXMuX3JhdmVPcHRpb25zLlBCRlB1YktleSA9IHRoaXMuUEJGUHViS2V5IDogbnVsbFxuICAgIHRoaXMucGF5bWVudF9tZXRob2QgPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X21ldGhvZCA9IHRoaXMucGF5bWVudF9tZXRob2QgOiBudWxsXG4gICAgdGhpcy5yZWRpcmVjdF91cmwgPyB0aGlzLl9yYXZlT3B0aW9ucy5yZWRpcmVjdF91cmwgPSB0aGlzLnJlZGlyZWN0X3VybCA6IG51bGxcbiAgICB0aGlzLmludGVncml0eV9oYXNoID8gdGhpcy5fcmF2ZU9wdGlvbnMuaW50ZWdyaXR5X2hhc2ggPSB0aGlzLmludGVncml0eV9oYXNoIDogbnVsbFxuICAgIHRoaXMucGF5X2J1dHRvbl90ZXh0ID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5X2J1dHRvbl90ZXh0ID0gdGhpcy5wYXlfYnV0dG9uX3RleHQgOiBudWxsXG4gICAgdGhpcy5jb3VudHJ5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY291bnRyeSA9IHRoaXMuY291bnRyeSA6IG51bGxcbiAgICB0aGlzLmN1cnJlbmN5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VycmVuY3kgPSB0aGlzLmN1cnJlbmN5IDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2Rlc2NyaXB0aW9uID0gdGhpcy5jdXN0b21fZGVzY3JpcHRpb24gOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9lbWFpbCA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsID0gdGhpcy5jdXN0b21lcl9lbWFpbCA6IG51bGxcbiAgICB0aGlzLmN1c3RvbV9sb2dvID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2xvZ28gPSB0aGlzLmN1c3RvbV9sb2dvIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX3RpdGxlID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX3RpdGxlID0gdGhpcy5jdXN0b21fdGl0bGUgOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9maXJzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9maXJzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA6IG51bGxcbiAgICB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfbGFzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lIDogbnVsbFxuICAgIHRoaXMudHhyZWYgPyB0aGlzLl9yYXZlT3B0aW9ucy50eHJlZiA9IHRoaXMudHhyZWYgOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9waG9uZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lID0gdGhpcy5jdXN0b21lcl9waG9uZSA6IG51bGxcbiAgICB0aGlzLm9uY2xvc2UgPyB0aGlzLl9yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4gdGhpcy5vbmNsb3NlLmVtaXQoKSA6IG51bGxcbiAgICB0aGlzLmNhbGxiYWNrID8gdGhpcy5fcmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSAocmVzKSA9PiB0aGlzLm9uY2xvc2UuZW1pdChyZXMpIDogbnVsbFxuICB9XG5cbiAgdmFsaWRhdGVPcHRpb25zKCkge1xuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy5QQkZQdWJLZXkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkXCIpO1xuICAgIGlmICghKHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLnR4cmVmKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLmFtb3VudCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2sub2JzZXJ2ZXJzLmxlbmd0aCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uXCIpXG4gICAgaWYgKHRoaXMub25jbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB0aGlzLnJhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB0aGlzLm9uY2xvc2UuZW1pdCgpXG4gICAgdGhpcy5yYXZlT3B0aW9ucy5jYWxsYmFjayA9IHJlcyA9PiB0aGlzLmNhbGxiYWNrLmVtaXQocmVzKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB2YWxpZGF0ZUlucHV0KCkge1xuICAgIGlmICghdGhpcy5QQkZQdWJLZXkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkXCIpO1xuICAgIGlmICghKHRoaXMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5jdXN0b21lcl9waG9uZSkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCF0aGlzLnR4cmVmKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLmFtb3VudCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2spIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvblwiKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBheSgpXG4gIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgX1JhdmVPcHRpb25zIH0gZnJvbSBcIi4vcmF2ZS1vcHRpb25zXCI7XG5cbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIGdldHBhaWRTZXR1cDogKHJhdmVPcHRpb25zOiBQYXJ0aWFsPF9SYXZlT3B0aW9ucz4pID0+IHZvaWRcbn1cblxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvd1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW5ndWxhci1yYXZlXSdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdmVEaXJlY3RpdmUge1xuICBASW5wdXQoKSBQQkZQdWJLZXk6IHN0cmluZztcbiAgQElucHV0KCkgaW50ZWdyaXR5X2hhc2g6IHN0cmluZztcbiAgQElucHV0KCkgdHhyZWY6IHN0cmluZztcbiAgQElucHV0KCkgcGF5bWVudF9tZXRob2Q6IHN0cmluZztcbiAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBheW1lbnRfcGxhbjogbnVtYmVyO1xuICBASW5wdXQoKSBjdXJyZW5jeTogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2VtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX3Bob25lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9sYXN0bmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYXlfYnV0dG9uX3RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX3RpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbV9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSByZWRpcmVjdF91cmw6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX2xvZ286IHN0cmluZztcbiAgQElucHV0KCkgbWV0YTogYW55O1xuICBASW5wdXQoKSByYXZlT3B0aW9uczogUGFydGlhbDxfUmF2ZU9wdGlvbnM+ID0ge31cbiAgQE91dHB1dCgpIG9uY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwcml2YXRlIF9yYXZlT3B0aW9uczogUGFydGlhbDxfUmF2ZU9wdGlvbnM+ID0ge307XG4gIHByaXZhdGUgcGF5bWVudFNldHVwO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBidXR0b25DbGljaygpIHtcbiAgICB0aGlzLnBheSgpXG4gIH1cblxuICBwYXkoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0cGFpZFNldHVwICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBQbGVhc2UgdmVyaWZ5IHRoYXQgeW91IGltcG9ydGVkIHJhdmUncyBzY3JpcHQgaW50byB5b3VyIGluZGV4Lmh0bWxcIilcbiAgICB9XG4gICAgLy8gSWYgdGhlIHJhdmVvcHRpb25zIElucHV0IGlzIHByZXNlbnQgdGhlbiB1c2VcbiAgICBpZiAodGhpcy5yYXZlT3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLnJhdmVPcHRpb25zKS5sZW5ndGggPiAzKSB7XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZU9wdGlvbnMoKSkge1xuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5yYXZlT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlSW5wdXQoKSkge1xuICAgICAgICB0aGlzLmluc2VydFJhdmVPcHRpb25zKCk7XG4gICAgICAgIHRoaXMucGF5bWVudFNldHVwID0gd2luZG93LmdldHBhaWRTZXR1cCh0aGlzLl9yYXZlT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0UmF2ZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5hbW91bnQgPyB0aGlzLl9yYXZlT3B0aW9ucy5hbW91bnQgPSB0aGlzLmFtb3VudCA6IG51bGxcbiAgICB0aGlzLnBheW1lbnRfcGxhbiA/IHRoaXMuX3JhdmVPcHRpb25zLnBheW1lbnRfcGxhbiA9IHRoaXMucGF5bWVudF9wbGFuIDogbnVsbFxuICAgIHRoaXMuUEJGUHViS2V5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuUEJGUHViS2V5ID0gdGhpcy5QQkZQdWJLZXkgOiBudWxsXG4gICAgdGhpcy5wYXltZW50X21ldGhvZCA/IHRoaXMuX3JhdmVPcHRpb25zLnBheW1lbnRfbWV0aG9kID0gdGhpcy5wYXltZW50X21ldGhvZCA6IG51bGxcbiAgICB0aGlzLnJlZGlyZWN0X3VybCA/IHRoaXMuX3JhdmVPcHRpb25zLnJlZGlyZWN0X3VybCA9IHRoaXMucmVkaXJlY3RfdXJsIDogbnVsbFxuICAgIHRoaXMuaW50ZWdyaXR5X2hhc2ggPyB0aGlzLl9yYXZlT3B0aW9ucy5pbnRlZ3JpdHlfaGFzaCA9IHRoaXMuaW50ZWdyaXR5X2hhc2ggOiBudWxsXG4gICAgdGhpcy5wYXlfYnV0dG9uX3RleHQgPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXlfYnV0dG9uX3RleHQgPSB0aGlzLnBheV9idXR0b25fdGV4dCA6IG51bGxcbiAgICB0aGlzLmNvdW50cnkgPyB0aGlzLl9yYXZlT3B0aW9ucy5jb3VudHJ5ID0gdGhpcy5jb3VudHJ5IDogbnVsbFxuICAgIHRoaXMuY3VycmVuY3kgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXJyZW5jeSA9IHRoaXMuY3VycmVuY3kgOiBudWxsXG4gICAgdGhpcy5jdXN0b21fZGVzY3JpcHRpb24gPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fZGVzY3JpcHRpb24gPSB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbiA6IG51bGxcbiAgICB0aGlzLmN1c3RvbWVyX2VtYWlsID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgPSB0aGlzLmN1c3RvbWVyX2VtYWlsIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX2xvZ28gPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fbG9nbyA9IHRoaXMuY3VzdG9tX2xvZ28gOiBudWxsXG4gICAgdGhpcy5jdXN0b21fdGl0bGUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fdGl0bGUgPSB0aGlzLmN1c3RvbV90aXRsZSA6IG51bGxcbiAgICB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2ZpcnN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9sYXN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9waG9uZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lID0gdGhpcy5jdXN0b21lcl9waG9uZSA6IG51bGxcbiAgICB0aGlzLnR4cmVmID8gdGhpcy5fcmF2ZU9wdGlvbnMudHhyZWYgPSB0aGlzLnR4cmVmIDogbnVsbFxuICAgIHRoaXMub25jbG9zZSA/IHRoaXMuX3JhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9uY2xvc2UuZW1pdCgpXG4gICAgfSA6IG51bGxcbiAgICB0aGlzLmNhbGxiYWNrID8gdGhpcy5fcmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSByZXMgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KHJlcyk7XG4gICAgICB0aGlzLnBheW1lbnRTZXR1cC5jbG9zZSgpO1xuICAgIH0gOiBudWxsXG4gIH1cblxuICB2YWxpZGF0ZU9wdGlvbnMoKSB7XG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLlBCRlB1YktleSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCEodGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMudHhyZWYpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuYW1vdW50KSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZFwiKVxuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogWW91IHNob3VsZCBhdHRhY2ggdG8gY2FsbGJhY2sgdG8gdmVyaWZ5IHlvdXIgdHJhbnNhY3Rpb25cIilcbiAgICBpZiAodGhpcy5vbmNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHRoaXMucmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KClcbiAgICB0aGlzLnJhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHtcbiAgICAgIHRoaXMuY2FsbGJhY2suZW1pdChyZXMpO1xuICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcbiAgICB9O1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFsaWRhdGVJbnB1dCgpIHtcbiAgICBpZiAoIXRoaXMuUEJGUHViS2V5KSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoISh0aGlzLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMuY3VzdG9tZXJfcGhvbmUpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkXCIpO1xuICAgIGlmICghdGhpcy50eHJlZikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZFwiKVxuICAgIGlmICghdGhpcy5hbW91bnQpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogWW91IHNob3VsZCBhdHRhY2ggdG8gY2FsbGJhY2sgdG8gdmVyaWZ5IHlvdXIgdHJhbnNhY3Rpb25cIilcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgUmF2ZU9wdGlvbnMge1xuICAvKipcbiAgICogWW91ciBtZXJjaGFudCBwdWJsaWMga2V5IHByb3ZpZGVkIHdoZW4geW91IGNyZWF0ZSBhIGJ1dHRvblxuICAgKi9cbiAgUEJGUHViS2V5OiBzdHJpbmdcbiAgLyoqXG4gICAqIEVtYWlsIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfZW1haWw/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEZpcnN0bmFtZSBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX2ZpcnN0bmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogZmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfbGFzdG5hbWU/OiBzdHJpbmdcblxuICBwYXltZW50X3BsYW4/OiBudW1iZXJcbiAgLyoqXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIGEgc2hvcnQgbW9kYWwgZGVzY3JpcHRpb25cbiAgICovXG4gIGN1c3RvbV9kZXNjcmlwdGlvbj86IHN0cmluZ1xuICAvKipcbiAgICogTGluayB0byB5b3VyIGN1c3RvbSBpbWFnZVxuICAgKi9cbiAgY3VzdG9tX2xvZ28/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSB0aXRsZSBvZiB0aGUgcGF5bWVudCBtb2RhbFxuICAgKi9cbiAgY3VzdG9tX3RpdGxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBBbW91bnQgdG8gY2hhcmdlXG4gICAqL1xuICBhbW91bnQ6IG51bWJlclxuICAvKipcbiAgICogcGhvbmUgbnVtYmVyIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfcGhvbmU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFVSTCB0byByZWRpcmVjdCB0byB3aGVuIHRyYW5zYWN0aW9uIGlzIGNvbXBsZXRlZC5cbiAgICovXG4gIHJlZGlyZWN0X3VybD86IHN0cmluZ1xuICAvKipcbiAgICogcm91dGUgY291bnRyeS4gRGVmYXVsdCBOR1xuICAgKi9cbiAgY291bnRyeT86IHN0cmluZ1xuICAvKipcbiAgICogY3VycmVuY3kgdG8gY2hhcmdlIHRoZSBjYXJkIGluLiBEZWZhdWx0IFwiTkdOXCJcbiAgICovXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGlzIGFsbG93cyB5b3Ugc2VsZWN0IHRoZSBwYXltZW50IG9wdGlvbiB5b3Ugd2FudCBmb3IgeW91ciB1c2VycywgcG9zc2libGUgdmFsdWVzIGFyZSBjYXJkLCBhY2NvdW50IG9yIGJvdGhcbiAgICovXG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgUmF2ZSBDaGVja291dCBCdXR0b25cbiAgICovXG4gIHBheV9idXR0b25fdGV4dD86IHN0cmluZ1xuICAvKipcbiAgICogVW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBwcm92aWRlZCBieSB0aGUgbWVyY2hhbnRcbiAgICovXG4gIHR4cmVmOiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBzaGEyNTYgaGFzaCBvZiB5b3VyIGdldHBhaWRTZXR1cCB2YWx1ZXMsIGl0IGlzIHVzZWQgZm9yIHBhc3Npbmcgc2VjdXJlZCB2YWx1ZXMgdG8gdGhlIHBheW1lbnQgZ2F0ZXdheVxuICAgKi9cbiAgaW50ZWdyaXR5X2hhc2g/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSB0byBiZSBwYXNzZWQgZm9yIHRoaXMgaXMgMS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBjdXN0b21lciBpcyB1c2luZyBhbiBvcGVyYSBicm93c2VyLCBpdCB3b3VsZCBsb2FkIHRoZSBwYXltZW50IG1vZGFsIG9uIGEgbmV3IHBhZ2UuXG4gICAqL1xuICBob3N0ZWRfcGF5bWVudD86IDFcbiAgLyoqXG4gICAqIEFueSBvdGhlciBjdXN0b20gZGF0YSB5b3Ugd2lzaCB0byBwYXNzLlxuICAgKi9cbiAgbWV0YT86IGFueVxufVxuXG5leHBvcnQgY2xhc3MgX1JhdmVPcHRpb25zIHtcbiAgLyoqXG4gICAqIFlvdXIgbWVyY2hhbnQgcHVibGljIGtleSBwcm92aWRlZCB3aGVuIHlvdSBjcmVhdGUgYSBidXR0b25cbiAgICovXG4gIFBCRlB1YktleTogc3RyaW5nXG4gIC8qKlxuICAgKiBFbWFpbCBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX2VtYWlsPzogc3RyaW5nXG4gIC8qKlxuICAgKiBGaXJzdG5hbWUgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9maXJzdG5hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGZpcnN0bmFtZSBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX2xhc3RuYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBhcyBhIHNob3J0IG1vZGFsIGRlc2NyaXB0aW9uXG4gICAqL1xuICBjdXN0b21fZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgLyoqXG4gICAqIExpbmsgdG8geW91ciBjdXN0b20gaW1hZ2VcbiAgICovXG4gIGN1c3RvbV9sb2dvPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBhcyB0aGUgdGl0bGUgb2YgdGhlIHBheW1lbnQgbW9kYWxcbiAgICovXG4gIGN1c3RvbV90aXRsZT86IHN0cmluZ1xuICAvKipcbiAgICogQW1vdW50IHRvIGNoYXJnZVxuICAgKi9cbiAgYW1vdW50OiBudW1iZXJcblxuICBwYXltZW50X3BsYW46IG51bWJlclxuICAvKipcbiAgICogcGhvbmUgbnVtYmVyIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfcGhvbmU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFVSTCB0byByZWRpcmVjdCB0byB3aGVuIHRyYW5zYWN0aW9uIGlzIGNvbXBsZXRlZC5cbiAgICovXG4gIHJlZGlyZWN0X3VybD86IHN0cmluZ1xuICAvKipcbiAgICogcm91dGUgY291bnRyeS4gRGVmYXVsdCBOR1xuICAgKi9cbiAgY291bnRyeT86IHN0cmluZ1xuICAvKipcbiAgICogY3VycmVuY3kgdG8gY2hhcmdlIHRoZSBjYXJkIGluLiBEZWZhdWx0IFwiTkdOXCJcbiAgICovXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGlzIGFsbG93cyB5b3Ugc2VsZWN0IHRoZSBwYXltZW50IG9wdGlvbiB5b3Ugd2FudCBmb3IgeW91ciB1c2VycywgcG9zc2libGUgdmFsdWVzIGFyZSBjYXJkLCBhY2NvdW50IG9yIGJvdGhcbiAgICovXG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgUmF2ZSBDaGVja291dCBCdXR0b25cbiAgICovXG4gIHBheV9idXR0b25fdGV4dD86IHN0cmluZ1xuICAvKipcbiAgICogVW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBwcm92aWRlZCBieSB0aGUgbWVyY2hhbnRcbiAgICovXG4gIHR4cmVmOiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBzaGEyNTYgaGFzaCBvZiB5b3VyIGdldHBhaWRTZXR1cCB2YWx1ZXMsIGl0IGlzIHVzZWQgZm9yIHBhc3Npbmcgc2VjdXJlZCB2YWx1ZXMgdG8gdGhlIHBheW1lbnQgZ2F0ZXdheVxuICAgKi9cbiAgaW50ZWdyaXR5X2hhc2g/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSB0byBiZSBwYXNzZWQgZm9yIHRoaXMgaXMgMS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBjdXN0b21lciBpcyB1c2luZyBhbiBvcGVyYSBicm93c2VyLCBpdCB3b3VsZCBsb2FkIHRoZSBwYXltZW50IG1vZGFsIG9uIGEgbmV3IHBhZ2UuXG4gICAqL1xuICBob3N0ZWRfcGF5bWVudD86IDFcbiAgLyoqXG4gICAqIEFueSBvdGhlciBjdXN0b20gZGF0YSB5b3Ugd2lzaCB0byBwYXNzLlxuICAgKi9cbiAgbWV0YT86IGFueVxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gc3VjY2Vzc2Z1bCBjYXJkIGNoYXJnZS4gVXNlcsOiwoDCmXMgY2FuIGFsd2F5cyBiZSByZWRpcmVjdGVkIHRvIGEgc3VjY2Vzc2Z1bCBvciBmYWlsZWQgcGFnZSBzdXBwbGllZCBieSB0aGUgbWVyY2hhbnQgaGVyZSBiYXNlZCBvbiByZXNwb25zZVxuICAgKiBAcGFyYW0gcmVzcG9uc2U/OiBUaGUgc2VydmVyIHJlc3BvbnNlXG4gICAqL1xuICBjYWxsYmFjazogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBwYXkgbW9kYWwgaXMgY2xvc2VkLlxuICAgKi9cbiAgb25jbG9zZTogKCkgPT4gdm9pZFxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJSYXZlQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLXJhdmUuY29tcG9uZW50JztcbmltcG9ydCB7IEFuZ3VsYXJSYXZlRGlyZWN0aXZlIH0gZnJvbSBcIi4vYW5ndWxhci1yYXZlLmRpcmVjdGl2ZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW0FuZ3VsYXJSYXZlQ29tcG9uZW50LCBBbmd1bGFyUmF2ZURpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJSYXZlQ29tcG9uZW50LCBBbmd1bGFyUmF2ZURpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJSYXZlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBdUNFO3VCQUx3QyxJQUFJLFlBQVksRUFBUTt3QkFDckIsSUFBSSxZQUFZLEVBQVU7S0FJcEQ7Ozs7SUFFakIsR0FBRztRQUNELElBQUksT0FBTyxNQUFNLENBQUMsWUFBWSxLQUFLLFVBQVUsRUFBRTtZQUM3QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0ZBQWtGLENBQUMsQ0FBQTtTQUN6Rzs7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNoRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMzRDtTQUNGO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxZQUFZ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