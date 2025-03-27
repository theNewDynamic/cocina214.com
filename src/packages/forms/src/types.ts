type InputType = 'default' | 'select' | 'textarea' | 'checkboxes' | 'radios'

interface SelectOption {
  title: string;
  value: string;
}


interface Service {
  /**
   * The ID of the form for the chosen service.
   * @type {string}
   * @example 'contact'
   * @example 'feoeirx04x'
   */
  id: string;
}

interface Attributes { [key: string]: string | number | object}

interface FormComponents {
  /**
   * Overrride the component with your own, built-in are input, label, wrapper.
   */
  [key: string]: any
}

interface Field {
  /**
   * The name fo the field. Should be slug-like
   */
  name: string;
  /**
   * The type of the field.
   * @example 'textarea'
   * @default 'text'
   */
  type?: string;
  /**
   * Useful for hidden fields.
   */
  value?: string | number;
  /**
   * Will populate the placeholder attribute.
   */
  placeholder?: string;
  /**
   * Will display a smaller text below the field
   */
  hint?: string;
  /**
   * Allow to add attributes to the input's tag.
   */
  attributes?: Attributes;
  /**
   * If set, will be used as label
   * @default name
   * @example 'Telephone'
   */
  label?: string;
  /**
   * Will make the field 'required'. Label will be appended with '*'
   */
  required?: boolean;
  options?: (string | SelectOption)[]
  rows?: number;
  /**
   * Reserved fro group fields.
   */
  columns?: number;
  fields?: Field[],
  /**
   * Overwrite built in label/wrapper/input component for this field or declare your own for custom input types.
   */
  components?: FormComponents
}


interface FormType {
  title?: string;
  /**
   * Allow to overwrite action value, generated by the service logic
   * @type {string}
   */
  action?: string;
  /**
   * If Netlify is used
   */
  netlify?: Service;
  /**
   * If Formspree is used
   */
  formspree?: Service;
  attributes?: Attributes;
  /**
   * The method used by the Form.
   * @type {string}
   * @example 'POST'
   * @default 'POST'
   */
  method?: string;
  /**
   * If set to true, will use the service's captcha solution
   * @type {boolean}
   * @default false
   */
  captcha?: boolean;
  /**
   * Allow to send a copy of the submission to provided email(s).
   * Only available on Formspree
   * @type {string}
   * @example 'john@doe.com'
   */
  cc?: string;
  /**
   * Determine where to send user after form submission
   * @type {string}
   * @example '/thank-you'
   */
  redirect?: string;
  /**
   * Customize the submit button's copy.
   * @type {string}
   * @example 'Sign up'
   * @default 'Submit'
   */
  submitCopy?: string;
  /**
   * The list of fields
   * @type {Field[]}
   */
  fields: Field[],
  /**
   * Overwrite built in label/wrapper/input component for this form or declare your own for custom input types.
   */
  components?: FormComponents
}

export type { FormType }