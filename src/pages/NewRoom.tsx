import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import { Button } from '../components/Button'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import '../styles/auth.scss'


export function NewRoom(){
    const { user } = useAuth()

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustration Image" />
                <strong>Cria sala de perguntas e repostas ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            
            <main>
                <div className="main-Content"> 
                    <img src={logoImg} alt="Imagem do logo" />
                    <h2>Criar uma nova sala</h2>

                    <form>
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                        />

                        <Button>Criar sala</Button>
                    </form>

                    <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link> </p>

                </div>
            </main>
            
        </div>
    )
}