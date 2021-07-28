import React, { useState } from 'react';
import axios from 'axios';

function Test(props) {
    
    var [imgFiles,setImgFiles] = useState([]);
    const [input,setInput] = useState('');
    return (
        <React.Fragment>
            <form>
                <input 
                    type='file'
                    multiple
                    onChange = {(e) => {
                        
                    setImgFiles(e.target.files);
                       
                        
                    }}
                />
                <button 
                    type="button"
                    onClick = {
                        ()=>onHandleSubmit()
                    }
                >submit</button>
                <br/>
                <input 
                    type='text'
                    onChange = {(e) => {
                        setInput(e.target.value)
                    }}


                />
                <button 
                    type="button"
                    onClick={
                    () =>onHandleDetele()
                   
                }
                >
                    delete
                </button>
            </form>

        </React.Fragment>
    );

    function onHandleSubmit(){
        const formData = new FormData();
       
        for(var i=0;i<imgFiles.length;i++){
            formData.append('image', imgFiles[i]);
        }
        
        console.log(imgFiles)
        async function postt(){

           await axios.post(`http://localhost:5000/api/upload`,formData).then( res =>{
                 console.log(res);
                 if(res) alert(res.data.message)
            }).catch(err => {
                console.log(err)
            })
        }
        postt()
    

      
    } 
    function onHandleDetele(){
    
        async function postt(){

            await axios.post(`http://localhost:5000/api/destroy`,{
                
            
                'public_id' : input
               
                
            }).then( res =>{
                  console.log(res);
                  
             }).catch(err => {
                 console.log(err)   
             })
         }
         postt()


    }         
}

export default Test;