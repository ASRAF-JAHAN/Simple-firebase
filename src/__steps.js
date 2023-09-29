/*
   -----------
   INITIAL INSTALLATION
   ----------- 
1.visit: Console.firebase.google.com
2.create project(skip google analytics)
3.register app (create config)
4.install firebase:npm install firebase
5.add config file to your project.
6:DANGER:Do not publish or make firebase config to public by pushing  to github.
*     -----------
      INTEGRATION 
      -----------
7.Visit:Go to Docs > Build > Authentication > Web > Get started
8.export app from the firebase.config.js file: export default app.
9.Login.jsx:import getAuth from firebase/auth.
10.create const auth = getAuth(app).
*     --------------
      PROVIDER SETUP
      --------------
11.import googleAuthProvider and Create a new provider.
12.use signInWithPopUp and pass auth and provider.
13.activate sign-in-method (google,facebook,github, etc.)
14.[vite]: change 127.0.0.1 to localhost

* ------------------
  More Auth PROvider
  ------------------
  1.activate the auth provider (create app, provide redirect url, client id, client secret )
*/