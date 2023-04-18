import React, { FC } from 'react'
import ReactSelect, { Props as SelectProps } from 'react-select'
import { useFormik } from 'formik'

export type TFormik = ReturnType<typeof useFormik<ReturnType<typeof useFormik>['values']>>
export interface IFormikReactSelect {
  formik: TFormik
  props: SelectProps
  name: string
}

export const FormikReactSelect: FC<IFormikReactSelect> = ({ formik, props, name }) => {
  return <ReactSelect {...props} name={name} onChange={(selectedItem) => formik.setFieldValue(name, selectedItem)} />
}
