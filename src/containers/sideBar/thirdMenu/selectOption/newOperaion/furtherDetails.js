import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { FormControl } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: 160
  }
})

const FurtherDetails = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  return (
    <div className="description">
      <FormControl className="further_details">
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={3}
          placeholder="توضیحات"
        />
      </FormControl>
    </div>
  )
}

export default FurtherDetails
