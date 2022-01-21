import * as React from 'react'
import './App.css'
import {Web3Storage} from 'web3.storage'

let selectedFile;
console.log('test');

    function getWeb3Client(){
        console.log('calling get web3client');
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFjMzA5ODIyYzVEMjgyYTEyMWJhMmJhNjU2YjVEMjU5Q2YzNUQ5OTUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDE1OTkzMzc5MDksIm5hbWUiOiJteS1maXJzdC10b2tlbiJ9.BcCZKT_1OIJ_Z53aixK4ARli_DQsDHUGZ93iw92IvVA";
        return (new Web3Storage({ token }));
    }; //*/
   
    function onChangeListener (event) {
        console.log("TESTING ALERT");
        let file = event.target.files[0];
        selectedFile = file ;
        alert('You changed the file to' + selectedFile.name);
    };

    //gotta get file to this function 
    async function uploadFile(){
        console.log('calling uploadFile')
        let storage = getWeb3Client();
        console.log('about to put file');
        let cid = await storage.put(selectedFile)
        console.log('file was put');
        alert('hello world, your file is ' +   selectedFile.name + " and was uploaded with cid " + cid);
    };




export default function App() {
  return (
    <main>
        <h1>Hello World</h1>
        <h2> React⚛️ + Vite⚡ + Replit🌀</h2>
        <input type = "File" onChange={onChangeListener}/>
        <button onClick={uploadFile} > Upload File</button> 
    </main>
  )
}