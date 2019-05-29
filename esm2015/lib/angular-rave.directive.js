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
export class AngularRaveDirective {
    constructor() {
        this.raveOptions = {};
        this.onclose = new EventEmitter();
        this.callback = new EventEmitter();
        this.init = new EventEmitter();
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.init) {
                this.init.emit();
            }
            yield this.loadScript();
            if (typeof window.getpaidSetup !== 'function') {
                return console.error('ANGULAR-RAVE: Please verify that you imported rave\'s script into your index.html');
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
        });
    }
    /**
     * @return {?}
     */
    insertRaveOptions() {
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
            this._raveOptions.init = () => this.init.emit();
        }
        if (this.onclose) {
            this._raveOptions.onclose = () => this.onclose.emit();
        }
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
            this.raveOptions.onclose = () => this.onclose.emit();
        }
        this.raveOptions.callback = res => {
            this.callback.emit(res);
            this.paymentSetup.close();
        };
        return true;
    }
    /**
     * @return {?}
     */
    loadScript() {
        return new Promise(resolve => {
            if (typeof window.getpaidSetup === 'function') {
                resolve();
                return;
            }
            const /** @type {?} */ script = window.document.createElement('script');
            window.document.head.appendChild(script);
            const /** @type {?} */ onLoadFunc = () => {
                script.removeEventListener('load', onLoadFunc);
                resolve();
            };
            script.addEventListener('load', onLoadFunc);
            script.setAttribute('src', 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js');
        });
    }
    /**
     * @return {?}
     */
    validateInput() {
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
    }
}
AngularRaveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[angular-rave]' // tslint:disable-line
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcmF2ZS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXJhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQWFyRixNQUFNO0lBMkJKOzJCQVBvRCxFQUFFO3VCQUNkLElBQUksWUFBWSxFQUFRO3dCQUN4QixJQUFJLFlBQVksRUFBTztvQkFDeEIsSUFBSSxZQUFZLEVBQVU7NEJBQ2IsRUFBRTtLQUdyQzs7OztJQUdqQixXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOzs7OztJQUdQLEdBQUc7O1lBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQjtZQUNELE1BQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFlBQVksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDO2FBQzNHOztZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMs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QUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1NBQUU7UUFDeEksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7U0FBRTtRQUN0RyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUFFO1FBQ3pGLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO1NBQUU7UUFDdkgsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiOzs7WUEvSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7OzBCQUVFLEtBQUs7K0JBQ0wsS0FBSztzQkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLOytCQUNMLEtBQUs7bUNBQ0wsS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLO21DQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3FCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxNQUFNO3lCQUNOLE1BQU07cUJBQ04sTUFBTTs0QkFNTixZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFByaXZhdGVSYXZlT3B0aW9ucyB9IGZyb20gJy4vcmF2ZS1vcHRpb25zJztcclxuXHJcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgZ2V0cGFpZFNldHVwOiAocmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPikgPT4gdm9pZDtcclxufVxyXG5cclxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FuZ3VsYXItcmF2ZV0nIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJSYXZlRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSBQQkZQdWJLZXk6IHN0cmluZztcclxuICBASW5wdXQoKSBpbnRlZ3JpdHlfaGFzaDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHR4cmVmOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF5bWVudF9tZXRob2Q6IHN0cmluZztcclxuICBASW5wdXQoKSBhbW91bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcclxuICBASW5wdXQoKSBwYXltZW50X3BsYW46IG51bWJlcjtcclxuICBASW5wdXQoKSBjdXN0b21lcl9lbWFpbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX3Bob25lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfZmlyc3RuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfbGFzdG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwYXlfYnV0dG9uX3RleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzdWJhY2NvdW50OiB7IGlkOiBzdHJpbmcsIHRyYW5zYWN0aW9uX3NwbGl0X3JhdGlvOiBzdHJpbmcgfVtdO1xyXG4gIEBJbnB1dCgpIGN1c3RvbV9kZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJlZGlyZWN0X3VybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbV9sb2dvOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWV0YTogYW55O1xyXG4gIEBJbnB1dCgpIHJhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz4gPSB7fTtcclxuICBAT3V0cHV0KCkgb25jbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgaW5pdDogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcclxuICBwcml2YXRlIF9yYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+ID0ge307XHJcbiAgcHJpdmF0ZSBwYXltZW50U2V0dXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBidXR0b25DbGljaygpIHtcclxuICAgIHRoaXMucGF5KCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBwYXkoKSB7XHJcbiAgICBpZiAodGhpcy5pbml0KSB7XHJcbiAgICAgIHRoaXMuaW5pdC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRTY3JpcHQoKTtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBQbGVhc2UgdmVyaWZ5IHRoYXQgeW91IGltcG9ydGVkIHJhdmVcXCdzIHNjcmlwdCBpbnRvIHlvdXIgaW5kZXguaHRtbCcpO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgdGhlIHJhdmVvcHRpb25zIElucHV0IGlzIHByZXNlbnQgdGhlbiB1c2VcclxuICAgIGlmICh0aGlzLnJhdmVPcHRpb25zICYmIE9iamVjdC5rZXlzKHRoaXMucmF2ZU9wdGlvbnMpLmxlbmd0aCA+IDMpIHtcclxuICAgICAgaWYgKHRoaXMudmFsaWRhdGVPcHRpb25zKCkpIHtcclxuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5yYXZlT3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlSW5wdXQoKSkge1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0UmF2ZU9wdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5fcmF2ZU9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnNlcnRSYXZlT3B0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLmFtb3VudCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5hbW91bnQgPSB0aGlzLmFtb3VudDsgfVxyXG4gICAgaWYgKHRoaXMuUEJGUHViS2V5KSB7IHRoaXMuX3JhdmVPcHRpb25zLlBCRlB1YktleSA9IHRoaXMuUEJGUHViS2V5OyB9XHJcbiAgICBpZiAodGhpcy5wYXltZW50X21ldGhvZCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X21ldGhvZCA9IHRoaXMucGF5bWVudF9tZXRob2Q7IH1cclxuICAgIGlmICh0aGlzLnJlZGlyZWN0X3VybCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5yZWRpcmVjdF91cmwgPSB0aGlzLnJlZGlyZWN0X3VybDsgfVxyXG4gICAgaWYgKHRoaXMuaW50ZWdyaXR5X2hhc2gpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuaW50ZWdyaXR5X2hhc2ggPSB0aGlzLmludGVncml0eV9oYXNoOyB9XHJcbiAgICBpZiAodGhpcy5wYXlfYnV0dG9uX3RleHQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMucGF5X2J1dHRvbl90ZXh0ID0gdGhpcy5wYXlfYnV0dG9uX3RleHQ7IH1cclxuICAgIGlmICh0aGlzLmNvdW50cnkpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY291bnRyeSA9IHRoaXMuY291bnRyeTsgfVxyXG4gICAgaWYgKHRoaXMucGF5bWVudF9wbGFuKSB7IHRoaXMuX3JhdmVPcHRpb25zLnBheW1lbnRfcGxhbiA9IHRoaXMucGF5bWVudF9wbGFuOyB9XHJcbiAgICBpZiAodGhpcy5jdXJyZW5jeSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXJyZW5jeSA9IHRoaXMuY3VycmVuY3k7IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbikgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fZGVzY3JpcHRpb24gPSB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbjsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJfZW1haWwpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgPSB0aGlzLmN1c3RvbWVyX2VtYWlsOyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21fbG9nbykgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fbG9nbyA9IHRoaXMuY3VzdG9tX2xvZ287IH1cclxuICAgIGlmICh0aGlzLmN1c3RvbV90aXRsZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fdGl0bGUgPSB0aGlzLmN1c3RvbV90aXRsZTsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lKSB7IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2ZpcnN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lOyB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21lcl9sYXN0bmFtZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9sYXN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWU7IH1cclxuICAgIGlmICh0aGlzLnN1YmFjY291bnQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuc3ViYWNjb3VudCA9IHRoaXMuc3ViYWNjb3VudDsgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tZXJfcGhvbmUpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUgPSB0aGlzLmN1c3RvbWVyX3Bob25lOyB9XHJcbiAgICBpZiAodGhpcy50eHJlZikgeyB0aGlzLl9yYXZlT3B0aW9ucy50eHJlZiA9IHRoaXMudHhyZWY7IH1cclxuICAgIGlmICh0aGlzLmluaXQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuaW5pdCA9ICgpID0+IHRoaXMuaW5pdC5lbWl0KCk7IH1cclxuICAgIGlmICh0aGlzLm9uY2xvc2UpIHsgdGhpcy5fcmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KCk7IH1cclxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMuX3JhdmVPcHRpb25zLmNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMub25jbG9zZS5lbWl0KHJlcyk7XHJcbiAgICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlT3B0aW9ucygpIHtcclxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy5QQkZQdWJLZXkpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoISh0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUpKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLnR4cmVmKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuYW1vdW50KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrLm9ic2VydmVycy5sZW5ndGgpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogWW91IHNob3VsZCBhdHRhY2ggdG8gY2FsbGJhY2sgdG8gdmVyaWZ5IHlvdXIgdHJhbnNhY3Rpb24nKTsgfVxyXG4gICAgaWYgKHRoaXMub25jbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7IHRoaXMucmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KCk7IH1cclxuICAgIHRoaXMucmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSByZXMgPT4ge1xyXG4gICAgICB0aGlzLmNhbGxiYWNrLmVtaXQocmVzKTtcclxuICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGxvYWRTY3JpcHQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICBjb25zdCBvbkxvYWRGdW5jID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9O1xyXG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xyXG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9yYXZlc2FuZGJveGFwaS5mbHV0dGVyd2F2ZS5jb20vZmx3djMtcHVnL2dldHBhaWR4L2FwaS9mbHdwYmYtaW5saW5lLmpzJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlSW5wdXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCEodGhpcy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLmN1c3RvbWVyX3Bob25lKSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLnR4cmVmKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMuYW1vdW50KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19