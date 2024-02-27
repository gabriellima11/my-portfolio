import { ContactSection } from "./style_ContactMeSection"

export const ContactMe = () =>{
    return (
        <ContactSection id='contactMe'>
          <h1 className='title'>FALE <span>COMIGO</span></h1>
          <form className='boxContact' action="https://formsubmit.co/gabrielflima05@gmail.com" method="POST">
            <input className='inputs' type='text' name='name' placeholder='Seu nome: ' />
            <input className='inputs' type='email' name='email' placeholder='Seu e-mail: ' />
            <input className='inputs' type='tel' name='telefone' placeholder='Seu telefone: ' />
            <textarea className='inputMessage' name="message" id="" cols="30" rows="10" placeholder='Sua mensagem: '></textarea>
            <button className='sendButton' type='submit' target='_blank'>ENVIAR</button>
          </form>
        </ContactSection>
    )
}