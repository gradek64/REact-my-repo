/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import React from 'react'
import PropTypes from 'prop-types'

const Field = ({ type = 'text', id, name, label, className, sectionStyling, hintText, ...otherAttr }) => {
  const fieldName = name || id

  return (
    <section className={`form-group ${sectionStyling}`}>
      <label htmlFor={id} className="form-group__label">
        {label}
        { hintText && <span className="form-group__hint">{hintText}</span> }
      </label>
      <div className="form-group__input-wrapper">
        <input aria-required type={type} name={fieldName} id={id} className={`form-group__input${className ? ` ${className}` : ''}`} {...otherAttr} />
      </div>
    </section>
  )
}

Field.propTypes = {
  className: PropTypes.string,
  hintText: PropTypes.string,
  id: (props, propName, componentName) => {
    // Apply `isRequired` conditionally to fields which aren't `hidden`
    const propValue = props[propName]
    if (!propValue) {
      return new Error(`The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is \`${propValue}\`.`)
    }
    if (typeof propValue !== 'string') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof propValue}\` supplied to \`${componentName}\`, expected \`string\`.`)
    }
  },
  label: PropTypes.string,
  name: PropTypes.string,
  otherAttr: PropTypes.objectOf(PropTypes.string),
  sectionStyling: PropTypes.string,
  type: PropTypes.string
}

export default Field
