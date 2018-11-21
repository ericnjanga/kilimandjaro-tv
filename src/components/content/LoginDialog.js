import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import IconPerson from "@material-ui/icons/Person";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class LoginDialog extends React.Component {
  state = {
    open: false,
    // login: false,
    register: true //login:false,
  };

  // toggleConnectionStatus = () => {
  //   this.setState(prevState => {
  //     return { register: !prevState.register };
  //   });
  // };

  // handleClickOpen = () => {
  //   this.setState({ open: true });
  // };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  render() {
    const Container = styled.div`
      max-width: 260px;
      margin-left: auto;
      margin-right: auto;

      h1 {
        margin-bottom: 0;
      }

      h1,
      p {
        text-align: center;
      }
      button {
        text-transform: inherit;
      }
      .btn-secondary {
        background-color: rgb(66, 133, 244);
      }
    `;

    const Footer = styled.footer`
      max-width: 260px;
      flex: 1 1 auto;
      padding: 0 24px 24px;
      text-align: center;

      p {
        border: 10px solid lime;
      }

      br {
        margin-top: 10px;
        margin-bottom: 10px;
        display: block;
        border-bottom: 1px solid #ccc;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }
    `;

    const { register } = this.state;
    const brandName = "Kilimandjaro TV";

    return (
      <div>
        <IconButton onClick={this.handleClickOpen} style={{ color: "blue" }}>
          <IconPerson fontSize="small" />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <Container>
            <h1>
              {register ? "Enregistrez" : "Identifiez"}
              -vous et decouvrez plus
            </h1>
          </Container>

          <DialogContent>
            <Container>
              {/*<DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>*/}

              <div>
                {register ? <RegisterInputs /> : <LoginInputs />}

                <p>Ou</p>

                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginBottom: "10px", width: "100%" }}
                >
                  Continuez avec Google
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  className="btn-secondary"
                  style={{ marginBottom: "10px", width: "100%" }}
                >
                  Continuez avec Facebook
                </Button>
              </div>
            </Container>

          </DialogContent>
          <Footer>
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
          </Footer>
        </Dialog>
      </div>
    );
  }
}

const RegisterInputs = () => {
  return (
    <React.Fragment>
      <TextField
        autoFocus
        margin="dense"
        id="email"
        label="Addresse e-mail"
        type="email"
        fullWidth
      />
      <TextField
        margin="dense"
        id="password"
        label="Mot de Passe"
        type="password"
        fullWidth
      />
      <TextField
        margin="dense"
        id="password"
        label="Confirmez votre mot de Passe"
        type="password"
        fullWidth
        style={{
          marginBottom: "20px"
        }}
      />
      <Button
        variant="contained"
        color="secondary"
        style={{ marginBottom: "0px", width: "100%" }}
      >
        Enregistrez-vous
      </Button>
    </React.Fragment>
  );
};

const LoginInputs = () => {
  return (
    <React.Fragment>
      <TextField
        autoFocus
        margin="dense"
        id="email"
        label="Addresse e-mail"
        type="email"
        fullWidth
      />
      <TextField
        margin="dense"
        id="password"
        label="Mot de Passe"
        type="password"
        fullWidth
      />
      <Button
        variant="contained"
        color="secondary"
        style={{ marginBottom: "0px", width: "100%" }}
      >
        Connectez-vous
      </Button>
    </React.Fragment>
  );
};

const RegisterFooter = ({ brandName, action }) => {
  return (
    <div>
      Déjà membre?{" "}
      <a href="#" onClick={action}>
        identifiez-vous
      </a>
    </div>
  );
};

const LoginFooter = ({ brandName, action }) => {
  return (
    <div>
      <a href="#">Mot de passe oublié?</a>
      <br />
      {`Pas encore chez ${brandName}? `}
      <a href="#" onClick={action}>
        enregistrez-vous
      </a>
    </div>
  );
};
