(function () {
  const firebaseConfig = {
    apiKey: 'AIzaSyAwK62roMtYmHhfKJrj_IN9PeVxmOCfrKU',
    authDomain: 'shoshathetarnegolet.firebaseapp.com',
    databaseURL: 'https://shoshathetarnegolet-default-rtdb.firebaseio.com',
    projectId: 'shoshathetarnegolet',
    storageBucket: 'shoshathetarnegolet.appspot.com',
    messagingSenderId: '586990792212',
    appId: '1:586990792212:web:98a0837e476421ac94c101',
    measurementId: 'G-XDTQFKZ84G',
  };

  firebase.initializeApp(firebaseConfig);

  const ref = firebase.database().ref('messages');

  const contact_submit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const msg = document.getElementById('message');

    const data = {
      name: name.value,
      lname: lname.value,
      email: email.value,
      phone: phone.value,
      msg: msg.value,
      date: new Date().toLocaleString(),
    };
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (name.value === '' || email.value === '' || phone.value === '') {
      alert('Please enter equired data');
    } else if (!email.value.match(mailformat)) {
      alert('Please enter a valid email');
    } else if (!phone.value.match(phoneno)) {
      alert('Please enter a valid phone');
    } else {
      ref
        .push(data)
        .then(function () {
          alert("Thanks for sending a message. I'll try and get back to you as soon as possible.");
        })
        .catch(function (error) {
          console.log('Message could not be sent: ', error);
        });
    }
  };

  document.getElementById('submit_msg').addEventListener('click', contact_submit);
})();
