import React from "react";
import StyledDialogLogin from './../styles/StyleDialogLogin'
import firebase from './../../settings/firebase-init'

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import CircularProgress from '@material-ui/core/CircularProgress'

export default class DialogLogin extends React.Component {
  state = {
    open: false,
    register: false, // Login form should first be displayed
    inProgress: false,
    form: {
      email: '',
      password: '',
      passwordConfirm: '',
    }
  }


  toggleProgressFlag = () => {
    this.setState((prevState) => {
      return { inProgress: !prevState.inProgress }
    })
  }


  toggleConnectionStatus = () => {
    this.setState(prevState => {
      return { register: !prevState.register }
    })
  }


  /**
   * Handles changes on inputs
   * (TODO; INPUT VALIDATION)
   */
  handleChange = (event) => {
    const { form } = this.state;
    const { target: {name, value} } = event;
    form[name] = value;
    this.setState({ form });
  };


  /**
   * Submits email registration request to firebase
   */
  handleEmailRegistration = () => {

    const { email, password } = this.state.form;

    this.toggleProgressFlag();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // ...
    });
  }



  /**
   * Submits email signin request to firebase
   */
  handleEmailSignin = () => {

    const { email, password } = this.state.form;

    this.toggleProgressFlag();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // ...
    });
  }


  render() {

    // console.log('[render] DialogLogin');

    const {
      handleClose,
      open,
    } = this.props;

    const {
      DivContainer,
    } = StyledDialogLogin;

    const { register, form, inProgress } = this.state;
    const brandName = "Kilimandjaro TV";

    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DivContainer>
            <header className="headerContainer">
              <h1>
                {register ? "Enregistrement" : "Identification"}
              </h1>
              <p>Et soyez toujours au top du meilleur showbiz Africain!</p>
            </header>

            <DialogContent>
              {/*<DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>*/}

              <div>
                {
                  register ? 
                  <RegisterInputs
                    {...form}
                    handleChange={this.handleChange}
                    handleEmailRegistration={this.handleEmailRegistration}
                  /> : 
                  <LoginInputs
                    {...form}
                    inProgress={inProgress}
                    handleChange={this.handleChange}
                    handleEmailSignin={this.handleEmailSignin}
                  />
                }

                <p className="separator">Ou</p>

                <Button
                  className="button button-bottom-spacing"
                  variant="contained"
                  color="primary"
                >
                  Continuez avec Google
                </Button>

                <Button
                  className="button btn-secondary"
                  variant="contained"
                  color="primary"
                >
                  Continuez avec Facebook
                </Button>
              </div>
            </DialogContent>

            <footer className="footerContainer">
              <div>
                {register ? (
                  <RegisterFooter action={this.toggleConnectionStatus} />
                ) : (
                  <LoginFooter
                    action={this.toggleConnectionStatus}
                    brandName={brandName}
                  />
                )}
              </div>
            </footer>
          </DivContainer>
        </Dialog>
      </div>
    );
  }
}

const RegisterInputs = ({
  email,
  password,
  passwordConfirm,
  handleChange,
  handleEmailRegistration,
}) => {
  return (
    <React.Fragment>
      <TextField
        autoFocus
        margin="dense"
        id="email"
        name="email"
        label="Addresse e-mail"
        type="email"
        fullWidth
        value={email}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        id="password"
        name="password"
        label="Mot de Passe"
        type="password"
        fullWidth
        value={password}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        id="passwordConfirm"
        name="passwordConfirm"
        label="Confirmez votre mot de Passe"
        type="password"
        fullWidth
        className="txtfield-bottom-space"
        value={passwordConfirm}
        onChange={handleChange}
      />
      <Button
        className="button"
        variant="contained"
        color="secondary"
        onClick={handleEmailRegistration}
      >
        Enregistrez-vous
      </Button>
    </React.Fragment>
  );
};

const LoginInputs = ({
  email,
  password,
  inProgress,
  handleChange,
  handleEmailSignin,
}) => {
  return (
    <React.Fragment>
      <TextField
        autoFocus
        margin="dense"
        id="email"
        name="email"
        label="Addresse e-mail"
        type="email"
        fullWidth
        value={email}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        id="password"
        name="password"
        label="Mot de Passe"
        type="password"
        fullWidth
        className="txtfield-bottom-space"
        value={password}
        onChange={handleChange}
      />
      <Button
        className="button"
        variant="contained"
        color="secondary"
        onClick={handleEmailSignin}
      >
        Connectez-vous 

        {
          inProgress && <CircularProgress className="progress" />
        }
      </Button>
    </React.Fragment>
  );
};

const RegisterFooter = ({ brandName, action }) => {
  return (
    <div>
      Déjà membre?{" "}
      <Button className="btn-link" onClick={action}>
      identifiez-vous
      </Button>
    </div>
  );
};

const LoginFooter = ({ brandName, action }) => {
  return (
    <div>
      <a href="/">Mot de passe oublié?</a>
      <br />
      {`Pas encore chez ${brandName}? `}
      <Button className="btn-link" onClick={action}>
        enregistrez-vous
      </Button>
    </div>
  );
};