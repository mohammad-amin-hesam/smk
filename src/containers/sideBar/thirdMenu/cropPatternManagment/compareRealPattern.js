import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  listRealPatterns,
  listPatternsPlantingByPatternIdAndPlantationIdAndComparisionPatternId,
  listByOperationPatternsPlantingByPlantationIdAndComparisionBetweenPatternId,
  setChangeOption
} from '../../../../redux/actions'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const CompareRealPattern = (props) => {
  const [value, setValue] = useState()
  const classes = useStyles()
  let { realPatterns, patternId, plantationId } = props

  const handleChangeRealPattern = () => {
    props.listPatternsPlantingByPatternIdAndPlantationIdAndComparisionPatternId(
      plantationId,
      patternId,
      value
    )
    props.listByOperationPatternsPlantingByPlantationIdAndComparisionBetweenPatternId(
      plantationId,
      patternId,
      value
    )
    props.setChangeOption(true)
  }
  useEffect(() => {
    props.listRealPatterns()
  }, [])

  return (
    <div className="compare">
      <label> مقایسه با :</label>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          native
          value={value}
          onClick={handleChangeRealPattern}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="0">هیچ کدام</option>
          {realPatterns?.map((option) => {
            return (
              <option key={option.id} value={option.id}>
                {option.title}
              </option>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}

const mapStateToProps = ({
  plantationState: { plantationId },
  pattern: { pattern: pattern, realPatterns, patternId }
}) => ({
  plantationId,
  pattern,
  realPatterns,
  patternId
})
export default connect(mapStateToProps, {
  listRealPatterns,
  setChangeOption,
  listPatternsPlantingByPatternIdAndPlantationIdAndComparisionPatternId,
  listByOperationPatternsPlantingByPlantationIdAndComparisionBetweenPatternId
})(CompareRealPattern)
