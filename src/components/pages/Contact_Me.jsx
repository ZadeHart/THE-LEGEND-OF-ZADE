export default function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <img src='/assets/hold_the_phone.gif'/>
      
        <section className="forms">
          <form id="form" method="post">
            <label>Name:
            <input type="text" id="name"/>
            </label>
            <label>Email Address: 
            <input type="text" id="title"/>
            </label>
            <label>Message:
            <textarea id="message"/>
            </label>
            <p id="error"></p>
            <input type="submit" value="Submit"/>
          </form>
        </section>

    </div>
  );
}
