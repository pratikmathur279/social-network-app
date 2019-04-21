import axios from 'axios';

class Actions {
      createUser(user, callback){
            axios.post('https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/users', user, { crossDomain: true })
            .then((res)=> {
                  callback(res);
            });      
      }

      getAllPeople(user, callback){
            let data = {
                  'email': user
            }
            axios.post('https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/people', data, { crossDomain: true })
            .then((res)=> {
                  callback(res);   
            });
      }

      updateProfileImage(files, callback){
            const formData = new FormData();
            formData.append('myImage',files);
        
            axios.post("http://localhost:3001/image-upload",formData)
            .then((res)=> {
                  callback(res);
            });     
      }

      userFollowingList(user, callback){
            axios(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/userfollowlist/${user}`, { crossDomain: true })
            .then((res)=> {
                  callback(res);
            });
      }

      userFollowedList(user, callback){
            axios(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/userfollowedlist/${user}`, { crossDomain: true })
            .then((res)=> {
                  callback(res);
            });
      }

      followUser(fromId, toId, callback){
           let data = {
                 'fromId': fromId,
                 'toId': toId
            }
           axios.post("https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/followUser", data, { crossDomain: true })
            .then((res)=> {
                  callback(res);
            });     
      }
    
      deleteFeedItem(id, callback){
            axios.post(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/deleteFeed/${id}`, { crossDomain: true })
            .then((res)=> {
                  callback(res);
            });
      }

      unfollowUser(fromId, toId, callback){
            let data = {
                 'fromId': fromId,
                 'toId': toId
            }
           axios.post("https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/unfollowUser", data, { crossDomain: true })
            .then((res)=> {
                  callback(res);
            });  
      }

      updateProfileImageFeed(data, callback){
            axios.post(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/updateImageFeed/${data.email}`, data, { crossDomain: true })
            .then((res)=> {
                  callback(res);
            });
      }

      updateProfile(userData, callback){
            axios.put(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/userProfile/${userData.id}`, userData, { crossDomain: true })
            .then((res)=> {
                  callback(res);
            })      
      }

      createUserActivity(user, callback){
            axios.post('https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/userActivity', user, { crossDomain: true })
            .then((res)=> {
                  callback(res);
            });      
      }

      getUserFeed(email, callback){
            axios(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/feed/${email}`, { crossDomain: true})
            .then((res)=> {
                  var data = res.data;
                  data.sort((a, b) => (a.date < b.date) ? 1 : -1);
                  callback(data);
            });
      }

      createNote(note, callback){
            axios.post('https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/feed', note, { crossDomain: true })
            .then((res)=> {
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
            axios(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/users/${user.email}`, { crossDomain: true })
            .then((res)=> {
                  callback(res.data);
            });
      }

      loginUser(user, callback){
            axios.post(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/login`,user, { crossDomain: true })
            .then(res => {
                  callback(res.data, null);
                  
            }, (err)=>{
                  callback(null, err);
            });
      }

      getUserById(id, callback){
            axios(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/getuser/${id}`,{ crossDomain: true })
            .then((res)=>{
                  callback(res.data);
            });
      }
      
      getUser(user, callback){
        axios(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/user/${user}`,{ crossDomain: true })
          .then((res)=>{
                callback(res.data);
          });
    }
}

export default Actions;