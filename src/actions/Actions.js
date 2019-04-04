import axios from 'axios';

class Actions {
      createUser(user, callback){
            console.log(user);
            axios.post('https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/users', user, { crossDomain: true })
            .then((res)=> {
                  console.log(res);
                  callback(res);
            });      
      }

      updateProfileImage(files, callback){
            const formData = new FormData();
            formData.append('myImage',files);
        
            axios.post("http://localhost:3001/image-upload",formData)
            .then((res)=> {
                  console.log(res);
                  callback(res);
            });     
      }
    
      updateProfileImageFeed(data, callback){
            console.log(data);
            axios.post(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/updateImageFeed/${data.email}`, data, { crossDomain: true })
            .then((res)=> {
                  console.log(res.data);
            });
      }

      updateProfile(userData, callback){
            // console.log(userData.id);
            axios.put(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/userProfile/${userData.id}`, userData, { crossDomain: true })
            .then((res)=> {
                  console.log(res.data);
                  callback(res);
            })      
      }

      createUserActivity(user, callback){
            axios.post('https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/userActivity', user, { crossDomain: true })
            .then((res)=> {
                  console.log(res);
                  callback(res);
            });      
      }
      setLoggedIn(user, callback){

      }

      getUserFeed(email, callback){
            axios(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/feed/${email}`, { crossDomain: true})
            .then((res)=> {
                  callback(res);
            });
      }

      createNote(note, callback){
            axios.post('https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/feed', note, { crossDomain: true })
            .then((res)=> {
                  console.log(res.data);
                  callback(res.data);
            });      
      }

      getFeed(callback){
            axios('https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/feed', { crossDomain: true})
            .then((res)=>{
                  var data = res.data;
                  data.sort((a, b) => (a.date < b.date) ? 1 : -1);
                  callback(data);

            })
      }

      checkIfUserExists(user, callback){
            console.log(user.email)
            axios(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/users/${user.email}`, { crossDomain: true })
            .then((res)=> {
                  console.log(res.data);
                  callback(res.data);
            });
      }

      loginUser(user, callback){
            axios.post(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/login`,user, { crossDomain: true })
            .then(res => {
                  console.log(res.data);
                  callback(res.data, null);
                  
            }, (err)=>{
                  console.log(err);
                  callback(null, err);
            });
      }

      getUser(user, callback){
        axios(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/user/${user}`,{ crossDomain: true })
          .then((res)=>{
                console.log(res.data);
            //     var data = JSON.parse(res.data);
                // alert(data);
                callback(res.data);
          });
    }
}

export default Actions;