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
    
      createUserActivity(user, callback){
            axios.post('https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/userActivity', user, { crossDomain: true })
            .then((res)=> {
                  console.log(res);
                  callback(res);
            });      
      }
      setLoggedIn(user, callback){

      }

      checkIfUserExists(user, callback){
            console.log(user.email)
            axios(`https://sl3cev5vli.execute-api.us-east-1.amazonaws.com/dev/users/${user.email}`, { crossDomain: true })
            .then((res)=> {
                  console.log(res.data);
                  callback(res.data);
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