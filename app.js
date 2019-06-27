var firebaseConfig = {
    apiKey: "AIzaSyAdkslfirEykySUWi5JjP8URYHC9HVSam8",
    authDomain: "mytest-b513e.firebaseapp.com",
    databaseURL: "https://mytest-b513e.firebaseio.com",
    projectId: "mytest-b513e",
    storageBucket: "mytest-b513e.appspot.com",
    messagingSenderId: "229330357923",
   
  };

firebase.initializeApp(firebaseConfig);


var rootRef = firebase.database().ref().child('graduate');
$('#saveForm').click(function(){

    
    rootRef.push().set({
     
        firstName:$('#userfName').val(),
        lastName:$('#userlName').val(),
        undergraduate:$('#undergraduate').val(),
        graduate:$('#graduate').val(),
        gradDate:$('#gradDate').val(),

        
    });
    alert("Friendship will never");
})