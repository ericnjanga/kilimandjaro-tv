import React from "react";
import styled from "styled-components";
import theme from './../../settings/theme';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class DialogLogin extends React.Component {
  state = {
    open: false,
    // login: false,
    register: true //login:false,
  };

  toggleConnectionStatus = () => {
    this.setState(prevState => {
      return { register: !prevState.register };
    });
  };

  render() {

    console.log('[render] DialogLogin');

    const {
      handleClose,
      open,
    } = this.props;

    const { register } = this.state;
    const brandName = "Kilimandjaro TV";

    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <Container>
            <Header>
              <h1>
                {register ? "Enregistrement" : "Identification"}
              </h1>
              <p>Et soyez toujours au top du meilleur showbiz Africain!</p>
            </Header>

            <DialogContent>
              {/*<DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>*/}

              <div>
                {register ? <RegisterInputs /> : <LoginInputs />}

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
          </Container>
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
        className="txtfield-bottom-space"
      />
      <Button
        className="button"
        variant="contained"
        color="secondary"
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
        className="txtfield-bottom-space"
      />
      <Button
        className="button"
        variant="contained"
        color="secondary"
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
      <Button className="btn-link" onClick={action}>
      identifiez-vous
      </Button>
    </div>
  );
};

const LoginFooter = ({ brandName, action }) => {
  return (
    <div>
      <a href="#">Mot de passe oublié?</a>
      <br />
      {`Pas encore chez ${brandName}? `}
      <Button className="btn-link" onClick={action}>
        enregistrez-vous
      </Button>
    </div>
  );
};



// Main styles 
const containerWidth = 440;
const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;

  @media(min-width: 420px) {
    max-width: ${containerWidth}px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 60px;
  }

  h1 {
    margin-bottom: 10px;
    line-height: 2.5rem;
    font-size: 1.9rem;
  }
  h2 {
    font-size: 1.2rem;
    color: ${theme.color.gray};
  }

  .button {
    width: 100%;
  }
  .button-bottom-spacing {
    margin-bottom: 10px;
  }

  .btn-link {
    padding: 0;
    color: #007bff;
    min-height: initial;
    font-weight: bold;
    display: inline-block;
    &:hover {
      color: #0056b3;
      background-color: transparent;
      span {
        text-decoration: underline;
      }
    }
  }

  .txtfield-bottom-space {
    margin-bottom: 20px;
  }

  header p {
    margin-bottom: 0;
  }

  h1, h2,
  p {
    text-align: center;
  }
  button {
    text-transform: inherit;
  }
  p.separator {
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .btn-secondary {
    background-color: rgb(66, 133, 244);
  }
  footer {
    font-size: .8rem;
    a {
      font-weight: bold;
    }
  }


  @media(min-width: ${containerWidth + 20}px) {
    h1 {
      font-size: 2.1rem;
    }
    p.separator {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;


const WrapperStyle = `

  @media(min-width: ${containerWidth + 20}px) {
    max-width: ${containerWidth}px;
  }

  flex: 1 1 auto;
  padding: 0 24px 0 24px;
  text-align: center;

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



const Header = styled.header`
  ${WrapperStyle}
`;
const Footer = styled.footer`
  ${WrapperStyle}
`;