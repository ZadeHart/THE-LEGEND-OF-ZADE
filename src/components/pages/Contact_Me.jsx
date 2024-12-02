// const formSelector = document.querySelector('#forms');
// const name = document.querySelector('#username');
// const email = document.querySelector('#title');
// const message = document.querySelector('#content')
// const errorMessage = document.querySelector('#error')

// // TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

// function displayMessage(type, message) {
//   errorMessage.textContent = message;
//   errorMessage.setAttribute('class', type);
// }

// formSelector.addEventListener('submit', function(event){
//   event.preventDefault();  

//   const forms = {
//     name: name.trim(),
//     email: email.trim(),
//     message: message.trim(),

//   };
  
//     console.log(forms);

//   if (name === '') {
//     displayMessage('error', 'Please complete the form.');
//   } else if (email === '') {
//     displayMessage('#error', 'Please complete the form.');
//   } else if (message === '') {
//     displayMessage('#error', 'Please complete the form.');
//   }

// });



export default function Contact() {
  return (


    <div>
      <h2>Contact Me</h2>
      <img src='/assets/hold_the_phone.gif'/>

          <form id="form">
            <label>Name:
            <input type="text" id="name" required/>
            </label>

            <label>Email Address: 
            <input type="text" id="email" required/>
            </label>

            <label>Message:
            <textarea id="message" required/>
            </label>

            <p id="error"></p>
            <input type="submit" value="Submit"/>
          </form>

    </div>
  );
}
