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
export class AngularRaveComponent {
    constructor() {
        this.onclose = new EventEmitter();
        this.callback = new EventEmitter();
        this.init = new EventEmitter();
        this._raveOptions = {};
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
        });
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
        this.onclose ? this._raveOptions.onclose = () => { this.onclose.emit(); this.paymentSetup.close(); } : null;
        this.callback ? this._raveOptions.callback = (res) => this.onclose.emit(res) : null;
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
                // tslint:disable-line
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcmF2ZS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXJhdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBYy9FLE1BQU07SUEyQko7dUJBTndDLElBQUksWUFBWSxFQUFRO3dCQUNyQixJQUFJLFlBQVksRUFBVTtvQkFDOUIsSUFBSSxZQUFZLEVBQVU7NEJBQ2IsRUFBRTtLQUdyQzs7OztJQUVYLEdBQUc7O1lBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQjtZQUNELE1BQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFlBQVksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDO2FBQzNHOztZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixFQUFFLENBQUMsQ0FB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SCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ1o7OztZQXpIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7O2dCQUN4QixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOzs7OzswQkFHRSxLQUFLOytCQUNMLEtBQUs7c0JBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLO21DQUNMLEtBQUs7a0NBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSzttQ0FDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsTUFBTTt5QkFDTixNQUFNO3FCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByaXZhdGVSYXZlT3B0aW9ucyB9IGZyb20gJy4vcmF2ZS1vcHRpb25zJztcclxuXHJcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgZ2V0cGFpZFNldHVwOiAocmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPikgPT4gdm9pZDtcclxufVxyXG5cclxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW5ndWxhci1yYXZlJywgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgUEJGUHViS2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW50ZWdyaXR5X2hhc2g6IHN0cmluZztcclxuICBASW5wdXQoKSB0eHJlZjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBheW1lbnRfbWV0aG9kOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcclxuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGF5bWVudF9wbGFuOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VzdG9tZXJfZW1haWw6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21lcl9waG9uZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3ViYWNjb3VudDogeyBpZDogc3RyaW5nLCB0cmFuc2FjdGlvbl9zcGxpdF9yYXRpbzogc3RyaW5nIH1bXTtcclxuICBASW5wdXQoKSBwYXlfYnV0dG9uX3RleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fZGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSByZWRpcmVjdF91cmw6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21fbG9nbzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1ldGE6IGFueTtcclxuICBASW5wdXQoKSByYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+O1xyXG4gIEBPdXRwdXQoKSBvbmNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xyXG4gIEBPdXRwdXQoKSBpbml0OiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xyXG4gIHByaXZhdGUgX3JhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz4gPSB7fTtcclxuICBwcml2YXRlIHBheW1lbnRTZXR1cDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBhc3luYyBwYXkoKSB7XHJcbiAgICBpZiAodGhpcy5pbml0KSB7XHJcbiAgICAgIHRoaXMuaW5pdC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRTY3JpcHQoKTtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBQbGVhc2UgdmVyaWZ5IHRoYXQgeW91IGltcG9ydGVkIHJhdmVcXCdzIHNjcmlwdCBpbnRvIHlvdXIgaW5kZXguaHRtbCcpO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgdGhlIHJhdmVvcHRpb25zIElucHV0IGlzIHByZXNlbnQgdGhlbiB1c2UgaXRcclxuICAgIGlmICh0aGlzLnJhdmVPcHRpb25zICYmIE9iamVjdC5rZXlzKHRoaXMucmF2ZU9wdGlvbnMpLmxlbmd0aCA+IDMpIHtcclxuICAgICAgaWYgKHRoaXMudmFsaWRhdGVPcHRpb25zKCkpIHtcclxuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5yYXZlT3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlSW5wdXQoKSkge1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0UmF2ZU9wdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnBheW1lbnRTZXR1cCA9IHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5fcmF2ZU9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnNlcnRSYXZlT3B0aW9ucygpIHtcclxuICAgIHRoaXMuYW1vdW50ID8gdGhpcy5fcmF2ZU9wdGlvbnMuYW1vdW50ID0gdGhpcy5hbW91bnQgOiBudWxsXHJcbiAgICB0aGlzLnBheW1lbnRfcGxhbiA/IHRoaXMuX3JhdmVPcHRpb25zLnBheW1lbnRfcGxhbiA9IHRoaXMucGF5bWVudF9wbGFuIDogbnVsbFxyXG4gICAgdGhpcy5QQkZQdWJLZXkgPyB0aGlzLl9yYXZlT3B0aW9ucy5QQkZQdWJLZXkgPSB0aGlzLlBCRlB1YktleSA6IG51bGxcclxuICAgIHRoaXMucGF5bWVudF9tZXRob2QgPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X21ldGhvZCA9IHRoaXMucGF5bWVudF9tZXRob2QgOiBudWxsXHJcbiAgICB0aGlzLnJlZGlyZWN0X3VybCA/IHRoaXMuX3JhdmVPcHRpb25zLnJlZGlyZWN0X3VybCA9IHRoaXMucmVkaXJlY3RfdXJsIDogbnVsbFxyXG4gICAgdGhpcy5pbnRlZ3JpdHlfaGFzaCA/IHRoaXMuX3JhdmVPcHRpb25zLmludGVncml0eV9oYXNoID0gdGhpcy5pbnRlZ3JpdHlfaGFzaCA6IG51bGxcclxuICAgIHRoaXMucGF5X2J1dHRvbl90ZXh0ID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5X2J1dHRvbl90ZXh0ID0gdGhpcy5wYXlfYnV0dG9uX3RleHQgOiBudWxsXHJcbiAgICB0aGlzLmNvdW50cnkgPyB0aGlzLl9yYXZlT3B0aW9ucy5jb3VudHJ5ID0gdGhpcy5jb3VudHJ5IDogbnVsbFxyXG4gICAgdGhpcy5jdXJyZW5jeSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1cnJlbmN5ID0gdGhpcy5jdXJyZW5jeSA6IG51bGxcclxuICAgIHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2Rlc2NyaXB0aW9uID0gdGhpcy5jdXN0b21fZGVzY3JpcHRpb24gOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbWVyX2VtYWlsID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgPSB0aGlzLmN1c3RvbWVyX2VtYWlsIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21fbG9nbyA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV9sb2dvID0gdGhpcy5jdXN0b21fbG9nbyA6IG51bGxcclxuICAgIHRoaXMuY3VzdG9tX3RpdGxlID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX3RpdGxlID0gdGhpcy5jdXN0b21fdGl0bGUgOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2ZpcnN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lIDogbnVsbFxyXG4gICAgdGhpcy5jdXN0b21lcl9sYXN0bmFtZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2xhc3RuYW1lID0gdGhpcy5jdXN0b21lcl9sYXN0bmFtZSA6IG51bGxcclxuICAgIHRoaXMudHhyZWYgPyB0aGlzLl9yYXZlT3B0aW9ucy50eHJlZiA9IHRoaXMudHhyZWYgOiBudWxsXHJcbiAgICB0aGlzLmN1c3RvbWVyX3Bob25lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUgPSB0aGlzLmN1c3RvbWVyX3Bob25lIDogbnVsbFxyXG4gICAgdGhpcy5vbmNsb3NlID8gdGhpcy5fcmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHt0aGlzLm9uY2xvc2UuZW1pdCgpOyB0aGlzLnBheW1lbnRTZXR1cC5jbG9zZSgpfSA6IG51bGxcclxuICAgIHRoaXMuY2FsbGJhY2sgPyB0aGlzLl9yYXZlT3B0aW9ucy5jYWxsYmFjayA9IChyZXMpID0+IHRoaXMub25jbG9zZS5lbWl0KHJlcykgOiBudWxsXHJcbiAgfVxyXG5cclxuICBsb2FkU2NyaXB0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgY29uc3Qgb25Mb2FkRnVuYyA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfTtcclxuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcclxuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vcmF2ZXNhbmRib3hhcGkuZmx1dHRlcndhdmUuY29tL2Zsd3YzLXB1Zy9nZXRwYWlkeC9hcGkvZmx3cGJmLWlubGluZS5qcycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZU9wdGlvbnMoKSB7XHJcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCEodGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lKSkge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy50eHJlZikgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLmFtb3VudCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkJyk7IH1cclxuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cclxuICAgIGlmICh0aGlzLm9uY2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkgdGhpcy5yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4gdGhpcy5vbmNsb3NlLmVtaXQoKTtcclxuICAgIHRoaXMucmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSByZXMgPT4ge1xyXG4gICAgICB0aGlzLmNhbGxiYWNrLmVtaXQocmVzKTtcclxuICAgICAgdGhpcy5wYXltZW50U2V0dXAuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlSW5wdXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCEodGhpcy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLmN1c3RvbWVyX3Bob25lKSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLnR4cmVmKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpOyB9XHJcbiAgICBpZiAoIXRoaXMuYW1vdW50KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWQnKTsgfVxyXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBheSgpO1xyXG4gIH1cclxufVxyXG4iXX0=