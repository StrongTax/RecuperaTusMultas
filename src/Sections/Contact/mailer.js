import React from 'react';

const mailer =() => {
  return (
    <div>
        <h1>Contact Form</h1>
        <form>
            <label>name</label>
            <input type="text" name="name"/>

            <label>Email</label>
            <input type="email" name="user_email"/>

            <label>Message</label>
            <textarea name='message' rows='4'/>
            <input type='submit' name='Send'/>

            <Tittle>Adjunta tu Multa</Tittle>
            <input type="file" name="my_file" placeholder='Ingresa Tu Multa'/>
        </form>
</div>
  );
}
 
export default mailer;