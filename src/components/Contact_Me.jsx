import phone from '../../public/images/phone.gif'

export default function Contact() {
  return (


    <div>
      <h2>Contact Me</h2>
      <img src={phone}/>

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

            <input type="submit" value="Submit"/>
            
          </form>

    </div>
  );
}
