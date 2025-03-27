// @internal
import { slugify, settings } from './common'
import Label from '../components/Label.astro'
import Wrapper from '../components/Wrapper.astro'
import Input from "../components/inputs/Input.astro"
import TextArea from "../components/inputs/TextArea.astro"
import Select from "../components/inputs/Select.astro"
import Checkboxes from "../components/inputs/Checkboxes.astro"
import Radios from "../components/inputs/Radios.astro"
import Checkbox from "../components/inputs/Checkbox.astro"
import Group from "../components/inputs/Group.astro"
export default (data, formData) => {
  let {
    name,
    hint
  } = data
  const {
    prefix
  } = settings()
  const id = data.id || slugify(name)
  const required = data.required
  const attributes = data.attributes || {}
  const type = data.type || "text"
  const label = type == 'group' ? data.label : data.label || name
  const placeholder = data.placeholder && data.placeholder
  const value = data.value || false
  const fields = type == "group" && data.fields
  const columns = type == "group" && data.columns || undefined
  let cols = false
  let rows = false
  let classList = {
    wrapper: [`${prefix}-wrapper`, `${prefix}--${type}__wrapper`],
    input: [`${prefix}-input`, `${prefix}-input--${type}`],
    label: [`${prefix}-label`, `${prefix}-label--${type}`],
  }
  let options = []

  if(type == "textarea") {
    cols = data.cols || cols
    rows = data.rows || rows
  }

  if(["select", "checkboxes", "radios"].includes(type)) {
    if(["checkboxes", "radios"].includes(type)) {
      name = name + '[]'
    }
    if(data.options && data.options.length) {
      options = data.options.map(option => {
        if(typeof option == "string") {
          return {
            id: `${id}-${slugify(option)}`,
            title: option,
            value: option
          }
        } else {
          if (option?.title !== undefined && option?.value !== undefined) {
            return {
              id: `${id}-${slugify(option?.value)}`,
              title: option?.title,
              value: option?.value
            }
          }
        }
      })
    }
  }

  let WrapperComponent =
    data.components && data.components.wrapper ? data.components.wrapper :
    formData.components && formData.components.wrapper ? formData.components.wrapper :
    Wrapper

  let LabelComponent =
    data.components && data.components.label ? data.components.label :
    formData.components && formData.components.label ? formData.components.label :
    Label

  let InputComponent =
    data.components && data.components.input ? data.components.input :
    formData.components && formData.components[type] && formData.components[type] ? formData.components[type] :
    type == "textarea" ? TextArea :
    type == "select" ? Select :
    type == "checkboxes" ? Checkboxes :
    type == "radios" ? Radios :
    type == "checkbox" ? Checkbox :
    type == "group" ? Group :
    Input

  return {
    name,
    id,
    classList,
    type,
    label,
    hint,
    required,
    placeholder,
    attributes,
    cols,
    rows,
    fields,
    columns,
    options,
    components: {
      wrapper: WrapperComponent,
      input: InputComponent,
      label: LabelComponent,
    },
    form: formData,
    ...(value ? {value} : {}),
  }
}
