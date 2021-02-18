import React from 'react'
import Box from '@material-ui/core/Box'
import useStyles from './styles'
import classNames from 'classnames'

export default function Illustration(props) {
  const classes = useStyles()

  return (
    <Box
      className={classNames({
        [classes.container]: true,
        [classes.smallContainer]: props.size === 'small',
        [classes.mediumContainer]: props.size === 'medium'
      })}
    >
      <Box
        className={classNames({
          [classes.shadow]: true,
          [classes.smallContent]: props.size === 'small',
          [classes.mediumContent]: props.size === 'medium'
        })}
      />
      <img
        src={props.image}
        alt={`Illustration-${props.imageName}`}
        className={classNames({
          [classes.image]: true,
          [classes.smallContent]: props.size === 'small',
          [classes.mediumContent]: props.size === 'medium'
        })}
      />
    </Box>
  )
}
