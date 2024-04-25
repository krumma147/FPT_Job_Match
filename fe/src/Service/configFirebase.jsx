import { initializeApp } from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  //   apiKey: "AIzaSyBIT0w_ZFvhvNSJg1VJaI9baB5uQGFIE2I",
  //   authDomain: "fpt-job-match.firebaseapp.com",
  //   projectId: "fpt-job-match",
  //   storageBucket: "fpt-job-match.appspot.com",
  //   messagingSenderId: "270647917763",
  //   appId: "1:270647917763:web:1634c811519ca97c2cb676",
  //   measurementId: "G-Z76KB4ZS1Q",
  // apiKey: "AIzaSyAUEkzRnAZOGthwiuQy3jB58L7I111N_hM",
  // authDomain: "fpt-job-match-a5824.firebaseapp.com",
  // projectId: "fpt-job-match-a5824",
  // storageBucket: "fpt-job-match-a5824.appspot.com",
  // messagingSenderId: "281658530717",
  // appId: "1:281658530717:web:f7818d66373478bd4dad74",
  // measurementId: "G-941F4YGZ23",
  apiKey: "AIzaSyA2NHnblLaZK9L67ZAoEMCJoPqmt19hV-c",
  authDomain: "testsms-ef96e.firebaseapp.com",
  projectId: "testsms-ef96e",
  storageBucket: "testsms-ef96e.appspot.com",
  messagingSenderId: "528597591853",
  appId: "1:528597591853:web:01d789ee4f4dd0a066d5a4",
  measurementId: "G-00JQZTKHV8"
};

const app = initializeApp(firebaseConfig);

export { app };
