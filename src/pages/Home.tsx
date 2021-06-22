import { useAuth } from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'

import { Button } from '../components/Button'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'


export function Home(){
    const history = useHistory()
    const { signInWithGoogle, user } = useAuth()

    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle()
        }

        history.push('/rooms/new')
    }

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

                    <button className="create-room" onClick={handleCreateRoom} >
                        <img src={googleIconImg} alt="Google Icon" />
                        Crie sua sala com o Google
                    </button>

                    <div className="separator" >ou entre em uma sala</div>

                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />

                        <Button>Entrar na sala</Button>
                    </form>

                </div>
            </main>
            
        </div>
    )
}