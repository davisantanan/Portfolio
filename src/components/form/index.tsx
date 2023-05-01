import './form.css'

function Form(){
    return(
        <div className="form-content">
            <div className="form-header">
                <h3>Contato</h3>
            </div>
            <form action="https://formspree.io/f/xeqwqvbw" method="POST">
                
                <div className="input-box">
                    <input className="input-user" type="text" name="name"  required />
                    <label className="label-input">Nome:</label>
                </div>
                
                <div className="input-box">
                    <input className="input-user" type="text" name="email"  required />
                    <label className="label-input">Email:</label>
                </div>
                
                <div className="input-box">
                    <input className="input-user" type="text" name="telefone"  required />
                    <label className="label-input">Telefone:</label>
                </div>
                
                <div className="input-box">
                    <label className="label-message">Mensagem:</label>  
                    <textarea placeholder="Digite sua Mensagem" name="message"  required></textarea>
                </div>
                
                <div className='button-container-form'>
                    <button type="submit" className="form-button bt2">Enviar</button>
                </div>
            
            </form>
        </div>
    )
}

export default Form;