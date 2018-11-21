import React from "react";
import { Link } from "react-router-dom";
import {
  CardContent,
  Card,
  Button,
  Grid,
  TextField,
} from '@material-ui/core';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <Card className="loginPage boxShadow">
          <CardContent>
            <form className="formLogin">
              <h3>Login</h3>

              <TextField
                label="What's your username?"
                type="text"
                margin="normal"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                label="What's your password?"
                type="password"
                margin="normal"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Grid container className="actionPage " spacing={24}>
                <Grid item sm={8}>
                  {/* <a href="/register">Don't have a account? Sign up</a> */}
                  <Link className="linkPage" to="/register">Don't have a account? Sign up</Link>
                </Grid>
                <Grid item sm={4}>
                  <Button variant="contained" color="primary" className="btnLogin">Login</Button>
                </Grid>
              </Grid>

            </form>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default Login;