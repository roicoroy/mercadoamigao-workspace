/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * DOCUMENTATION
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
/*
https://github.com/swagger-api/swagger-codegen/wiki/Mustache-Template-Variables
*/
import { BaseModel } from './BaseModel';
import { Role } from './Role';

/**
 * Generated Model Interface for Model "User"
 *
 */
export interface IUser {
  user: any;
  userObj: any;
  id?: string;
  username: any;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: any;
  created_by?: any;
  updated_by?: any;
  avatar?: any;
}
/**
 * Generated Model Class for Model "User"
 *
 */
export class User extends BaseModel implements IUser {
  public static readonly MODEL = 'User';
  public MODEL = 'User';

  public id: string;
  public username: string;
  public email: string;
  public provider?: string;
  public confirmed?: boolean;
  public blocked?: boolean;
  public role?: Role;
  // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match
  public created_by?: any;
  // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match
  public updated_by?: any;
  public userObj: any;
  public user: any;

  constructor(values?: any, useFormGroupValuesToModel = false) {
    super();

    if (values) {
      this.setValues(values, useFormGroupValuesToModel);
    }
    // define non enumerable properties so these are omitted in JSON.stringify.
    Object.defineProperty(this, 'MODEL', {
      enumerable: false,
      writable: false
    });
  }

  public setValues(values: any, useFormGroupValuesToModel = false): void {
    if (values) {
      const rawValues = this.getValuesToUse(values, useFormGroupValuesToModel);

      this.id = this.castTo('string', rawValues.id);

      this.username = this.castTo('string', rawValues.username);

      this.email = this.castTo('string', rawValues.email);

      this.provider = this.castTo('string', rawValues.provider);

      this.confirmed = this.castTo('boolean', rawValues.confirmed);

      this.blocked = this.castTo('boolean', rawValues.blocked);

      this.role = this.castTo('any', rawValues.role);

      this.created_by = this.castTo('any', rawValues.created_by);

      this.updated_by = this.castTo('any', rawValues.updated_by);

      // set values in model properties for added formControls
      super.setValuesInAddedPropertiesOfAttachedFormControls(
        values,
        useFormGroupValuesToModel
      );
    }
  }

  /**
   * returns the FormGroup of that model
   */
  public getFormGroup(): FormGroup {
    if (!this._formGroup) {
      this._formGroup = new FormGroup({
        id: new FormControl(this.id, [Validators.required]),
        username: new FormControl(this.username, [Validators.required]),
        email: new FormControl(this.email, [Validators.required]),
        provider: new FormControl(this.provider, []),
        confirmed: new FormControl(this.confirmed, []),
        blocked: new FormControl(this.blocked, []),
        role: new FormControl(this.role, []),
        created_by: new FormControl(this.created_by, []),
        updated_by: new FormControl(this.updated_by, [])
      });
    }
    return this._formGroup;
  }

  /**
   * set the FormGroup values to the model values.
   */
  public setFormGroupValues(): void {
    this.$formGroup.controls.id.setValue(this.id);
    this.$formGroup.controls.username.setValue(this.username);
    this.$formGroup.controls.email.setValue(this.email);
    this.$formGroup.controls.provider.setValue(this.provider);
    this.$formGroup.controls.confirmed.setValue(this.confirmed);
    this.$formGroup.controls.blocked.setValue(this.blocked);
    this.$formGroup.controls.role.setValue(this.role);
    this.$formGroup.controls.created_by.setValue(this.created_by);
    this.$formGroup.controls.updated_by.setValue(this.updated_by);

    // set formValues in added formControls
    super.setFormGroupValuesInAddedFormControls();
  }

  /**
   * checks, if attribute is required for this model
   */
  public isRequired(attribute: string): boolean {
    switch (attribute) {
      case 'id':
        return true;
      case 'username':
        return true;
      case 'email':
        return true;
      case 'provider':
        return false;
      case 'confirmed':
        return false;
      case 'blocked':
        return false;
      case 'role':
        return false;
      case 'created_by':
        return false;
      case 'updated_by':
        return false;
      default:
        return false;
    }
  }
}
