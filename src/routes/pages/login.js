import  React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { loginUser } from '../../redux/actions'
import userLogo from '../../assets/imges/user.svg'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 30px 60px 0 rgba(0,0,0,.3)',
    width: '450px',
    padding: '17px 50px',
    height: '414px'
  }
}))

const Login = (props) => {
  const { loading } = props
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onInputChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onInputChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault()
    props.loginUser({ email, password }, props.history)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={userLogo} alt="userLogo" className="user"/>
        <form className="login" noValidate onSubmit={submit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="ایمیل"
            disabled={loading}
            onChange={onInputChangeEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="پسورد"
            onChange={onInputChangePassword}
          />
          <Button
            type="submit"
            variant="contained"
            className="submit_form"
          >
            ورود
          </Button>
          <h2 className="error_login"> {props.msg ? props.msg : ''} </h2>
        </form>
        {/* props:{`${props.loading}`} */}
        <br />
      </div>
    </Container>
  )
}
const mapStateToProps = ({ authUser: { user, loading, msg } }) => ({
  user,
  loading,
  msg
})

export default connect(mapStateToProps, { loginUser })(Login)
