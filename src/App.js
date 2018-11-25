import React, { Component } from 'react';
import firebase from './settings/firebase-configs';
// import { dbGetNode, dbGetSnapshotData, dbSaveRecord, dbUpdateRecord, dbUploadFile } from './utilities/func/mix1.js';
import { /*APP_PREFIX,*/ GlobalContext } from './settings/basics.js';
import AppPresentation from './AppPresentation.js';
// import { localStorageSave, localStorageGetItem } from './utilities/func/mix1.js';

// import { TEXT_COPY } from './settings/language-and-text.js';

// import CheckBoxOffIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxOnIcon from '@material-ui/icons/CheckBox';

import './App.css';


/**
 * -----------------------------------------------------------------
 * HIDE "AUTH PANEL" IF USER INFO HAVE BEEN SAVED IN LOCAL STORAGE
 * -----------------------------------------------------------------
 *
function verifySavedUserInfoAndHideAuthPanel () {

  return new Promise((resolve) => {

    console.log('.....verifySavedUserInfoAndHideAuthPanel>>>>' );
  
    const { authPanel, globals, appLoader } = this.state;
  
    const savedUserInfo = {
      name: localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'name' }) ? localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'name' }) : null,
      email: localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'email' }) ? localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'email' }) : null,
      phone: localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'phone' }) ? Number(localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'phone' })) : null,
    };
  
    // If there are some user saved informations:
    // - Get that user in the database and save its info inside the global object
    // - Hide login screen
    if (savedUserInfo.name && savedUserInfo.email && savedUserInfo.phone) {
  
      dbGetNode(`users`).once('value', (snapshot) => {
  
        dbGetSnapshotData({ snapshot }).then((usersCollection) => {
  
          // Find-out if this user exist in the DB
          if (usersCollection) {
            
            const userInDB = usersCollection.filter(currUser => {
              return (currUser.name===savedUserInfo.name && currUser.email===savedUserInfo.email && currUser.phone===savedUserInfo.phone);
            });
  
            // Save user database info inside the global object
            globals.user = userInDB[0];
            // console.log('....globals.user=', globals.user);
            
            // Hide login screen
            authPanel.active = false;

            // Flag userInfo setting as completed
            appLoader.userInfo = true;
  
            // Update state
            this.setState({ globals, authPanel, appLoader }, ()=>{ resolve('UI verification done'); console.log('.....[done]verifySavedUserInfoAndHideAuthPanel>>>>' ); });
  
          }
        
        });
        
      });
  
    } else {

      // Flag userInfo setting as completed
      appLoader.userInfo = true;
  
      // Update state
      this.setState({ appLoader }, ()=>{ resolve('No user info'); console.log('.....[done]verifySavedUserInfoAndHideAuthPanel>>>>' ); });
    }// [end] checking saved info

  }); // [end] promise

} // [end] verifySavedUserInfoAndHideAuthPanel
*/

/**
 * -----------------------------------------------------------------
 * EXTRACT APP INFO (saved in the database)
 * - brand name, app title, system info (for CRUD in the admin)
 * -----------------------------------------------------------------
 */
/*
function getAppInfo () {

  return new Promise((resolve)=>{

    const { globals, appLoader } = this.state;
    dbGetNode(`site-info`).on('value', (snapshot) => {

      dbGetSnapshotData({ snapshot, singleData: true }).then((data) => {

        if (data) { // only if data is available

          ['brand', 'system', 'adminCreds'].forEach(option => {
            if(data[option]) {
              globals[option] = data[option];
              if(option==='brand') {
                document.title = globals[option].name + (data[option].slogan ? ` | ${data[option].slogan}` : '');
              }
            }
          });

          // Flag appInfo setting as completed
          appLoader.appInfo = true;
          
        } // [end] only if data is available

        this.setState({ globals, appLoader }, ()=>{ resolve('data extraction done'); console.log('.....[done]getAppInfo>>>>' ); });

      }); // [end] dbGetSnapshotData

    }); // [end] dbGetNode

  }); //[end] promise

} // [end] getAppInfo
*/







  /**
   * [ADMIN] APP DATA (Admin saved data)
   * ------------------------
   * Handle data submission from admin to the database
   * @param {*} param0 
   */
  // handleAdminDataSubmit = ({ event, nodeRoot, nodeDir1, isSingleRecord }) => {

  //   // console.log('>>>handle submit')

  //   const { dialogInfo } = this.state;

  //   // Inform the user: "data is being saved"
  //   dialogInfo.set({ active:true, message:'Saving your data ...' });

  //   // Submitting a product
  //   // 2 steps submission:
  //   // - Image (going to storage)
  //   // - Post (going to database)
  //   if (nodeRoot==='products') {

  //     const { image, title } = event.formData;
  //     const imgUploaded = dbUploadFile({ dir:'products', fileUrl:image, fileName:title });

  //     imgUploaded.then((data) => {

  //       // Inform the user: "Image has been successfully uploaded"
  //       dialogInfo.set({ active:true, message:'Image has been successfully uploaded! Now saving post ...' });
  
  //       //...
  //       const { name } = data.metadata;
  //       const record = event.formData;
  //       record.image = name;

  //       // [*] Submit record (code duplicated: must be optimized)
  //       const prodSubmitted = dbSaveRecord({
  //         url:`${nodeRoot}/`,
  //         record: { ...record },
  //         isSingleRecord,
  //       });
  
  //       // Reset state after data is submitted
  //       prodSubmitted.then(()=> {

  //         // Hide the info dialog
  //         dialogInfo.set({ active:false, message:'' });
    
  //       });
  //       // [*] Submit record (code duplicated: must be optimized)
  
  //     }); // [end] imgUploaded

  //   // Submit another record
  //   } else {
      
  //     // [*] Submit record (code duplicated: must be optimized)
  //     const submitUrl = nodeDir1 ? `${nodeRoot}/${nodeDir1}/` : `${nodeRoot}/`;
  //     const prodSubmitted = dbSaveRecord({
  //       url: submitUrl,
  //       record: { ...event.formData },
  //       isSingleRecord,
  //     });

  //     // Reset state after data is submitted
  //     prodSubmitted.then(()=> {

  //       // Hide the info dialog
  //       dialogInfo.set({ active:false, message:'' });
  
  //     });
  //     // [*] Submit record (code duplicated: must be optimized)

  //   }

  // } //...






  // handleAdminLogin = (event) => {
    
  //   const { formData:{ name }, formData:{ password } } = event; 
  //   const { dialogInfo } = this.state;

  //   // // Inform the user ...
  //   // dialogInfo.set({ active:true, message:'Fetching information ...' });

  //   // dbGetNode(`site-info/adminCreds`).once('value', (snapshot) => {

  //   //   dbGetSnapshotData({ snapshot, singleData: true }).then((adminUser) => {

  //   //     // Find-out if this user exist in the DB
  //   //     if (adminUser && adminUser.name===name && adminUser.password==password) {
  //   //       // console.log('---->>>>found it', adminUser);
  //   //       const { globals } = this.state;
  //   //       globals.adminUser = adminUser;

  //   //       // Inform the user ...
  //   //       dialogInfo.set({ active:false, message:'' });

  //   //       this.setState({ globals });

  //   //     } else {
  //   //       // Give some times before displaying the error message
  //   //       window.setTimeout(()=>{
  //   //         dialogInfo.set({ active:true, message:"nom d'utilisateur ou mot de passe incorrect" });
  //   //       }, 800);
  //   //       window.setTimeout(()=>{
  //   //         dialogInfo.set({ active:false, message:'' });
  //   //       }, 2200);
          
  //   //     }

  //   //   });

  //   // });

  // };

  /**
   * Save user object in the state
   * info: https://firebase.google.com/docs/auth/web/start
   */
  function saveLoggedUserInfo({
    displayName,
    email,
    emailVerified,
    photoURL,
    isAnonymous,
    uid,
    providerData,
  }) {
    const user = {
      displayName,
      email,
      emailVerified,
      photoURL,
      isAnonymous,
      uid,
      providerData,
    };

    this.setState({ user });
  }




 



async function executeAppInitProcess() {

  // let process1Done = await getAppInfo.call(this, null);
  // let process2Done = await verifySavedUserInfoAndHideAuthPanel.call(this, null);
  
  // if (process1Done && process2Done) {
  //   console.log(`first render ready: ${process1Done} - ${process2Done}`);
  //   window.setTimeout(()=>{
  //     const { appLoader } = this.state;
  //     appLoader.firstRenderReady = true;
  //     this.setState({ appLoader });
  //   }, 1000);
  // }

}



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      drawer: false,
      appLoader: {
        firstRenderReady: true, // Prevent app from rendering multiple times "on first render"
        appInfo: false,
        userInfo: false,
      },
      // globals: {
      //   handleSubmit: this.handleAdminDataSubmit,
      // }, 
      // dialogInfo: {
      //   active: false,
      //   message: '',
      //   set: ({ active, message }) => {
      //     const { dialogInfo } = this.state;
      //     dialogInfo.active = active;
      //     dialogInfo.message = message;
      //     this.setState({ dialogInfo });
      //   },
      // },
    };  
  }





  toggleDrawer = () => {
    // console.log('???????')
    this.setState((prevState) => {
      return { drawer: !prevState.drawer }
    });
  }


  /**
   * APP INIT
   * ------------------------
   * get Admin saved data (admin info, brand, ...)
   * @param {*} data 
   * @param {*} itemId 
   */
  componentDidMount() { 

    executeAppInitProcess.call(this, null);

    // Set an authentication state observer and get user data
    firebase.auth().onAuthStateChanged((user) => {

      if (user) {
        // User is signed in.
        console.log('[authentication state observer] user has signed in');
        saveLoggedUserInfo.call(this, user);
        
      }

    });

  } // [end] componentDidMount




 

  render() {
    // console.log('....********', this.state);


    var user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}




    return (
      <GlobalContext.Provider value={{...this.state.globals}}>
        <AppPresentation
          {...this.state} 
          toggleDrawer={this.toggleDrawer}
          // handleAdminDataSubmit={this.handleAdminDataSubmit}
        />
      </GlobalContext.Provider>
    );
  }
}

export default App;
