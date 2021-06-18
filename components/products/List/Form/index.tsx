import * as R from 'ramda'
import {Form as FormikForm, useFormikContext} from 'formik'
import {Fragment, useEffect, useState} from 'react'
import {Category as CategoryFilter} from 'components/products/List/filters/Category'
import {Colors as ColorsFilter} from 'components/products/List/filters/Colors'
import {Designers as DesignersFilter} from 'components/products/List/filters/Designers'
import {Genders as GendersFilter} from 'components/products/List/filters/Genders'
import {Icon} from 'components/common/Icon'
import {Price as PriceFilter} from 'components/products/List/filters/Price'

export function Form(props: {
  className?: string
  close: () => void
  initialValues: Record<string, any>
  isBlogDomain?: boolean
  isDesignerCollectionRequested?: boolean
  isWishListRequested?: boolean
  query: Record<string, string>
}) {
  const {submitForm, values} = useFormikContext()
  const [lastSubmittedValues, setLastSubmittedValues] = useState(props.initialValues)

  useEffect(
    () => {
      if(R.equals(values, lastSubmittedValues))
        return

      setLastSubmittedValues(values)
      submitForm()
    },

    [lastSubmittedValues, submitForm, values],
  )

  return <FormikForm className={props.className}>
    <div className="active-layer" onClick={props.close} />

    <div className="wrapper">
      <div className="button-section">
        <button className="button" onClick={props.close}>
          <Icon className="icon" name="filter-to-close" />
        </button>
      </div>
      <div className="scroll">
        {props.query.gender !== 'all' && <Fragment>
          <CategoryFilter className="section" isWishListRequested={props.isWishListRequested} query={props.query} />

          {!props.isDesignerCollectionRequested && <Fragment>
            <hr className="divider" />
            <DesignersFilter className="section" isBlogDomain={props.isBlogDomain} />
          </Fragment>}

          <hr className="divider" />
          <ColorsFilter className="section" />
          <hr className="divider" />
          <PriceFilter className="section" />
        </Fragment>}

        {props.query.gender === 'all' && <GendersFilter
          className="section"
          isWishListRequested={props.isWishListRequested}
          query={props.query}
        />}
      </div>
    </div>
  </FormikForm>
}
