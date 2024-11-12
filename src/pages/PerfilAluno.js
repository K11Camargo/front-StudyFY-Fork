import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import TituloTela from '../styles/tituloTela';
import fotousuario from '../assets/fotousuario.png';
import pontos from '../assets/pontos.png';
import configuracao from '../assets/configuracoes.png';
import calendario from '../assets/calendario.png';
import medalhaDeOuro from '../assets/medalhaDeOuro.png';
import correto from '../assets/correto.png';
import BronzeDois from '../assets/Bronze II.png';
import GrandEwe from '../assets/grande.png'
import TomHolland from '../assets/tomholland.png'
import Pessoas from '../assets/Pessoas.png';
import Estrela from '../assets/estrela.png'
import EstrelaMetade from '../assets/estrelametade.png'
import MedalhaEmblema from '../assets/MedalhaEmblema.png'
import CorujaEmblema from '../assets/mascote.png'
import LivrosEmblema from '../assets/LivrosEmblema.png'


const PerfilAluno = () => {
  const navigate = useNavigate();

  return (
    <Container style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Ícone de Configurações que redireciona para a tela de configuração */}
      <img
        src={configuracao}
        alt="Configurações"
        style={{
          position: 'absolute',
          alignSelf: 'end',
          height: '3vh',
          width: '3vh',
          cursor: 'pointer'
        }}
        onClick={() => navigate('')}
      />

    <TituloTela style={{ marginBottom: '0',textAlign:'center' }}>Perfil</TituloTela>


    <div style={{ width: '100%', height: 'calc(100vh - 100px)', overflowY: 'auto', paddingBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', height: '30%', width: '100%', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
        <div style={{ display: 'flex', width: '90%', height: '230px', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', bottom: '5%', alignItems: 'center' }}>
          <img src={fotousuario} alt="Foto do Usuário" style={{ height: '50%', width: '30%', zIndex: '3', position: 'absolute', top: '20px', placeSelf: 'center' }}/>
          <div style={{ display: 'flex', width: '100%', height: '80%', backgroundColor: '#FEE101', borderRadius: '8px', justifyContent: 'center', alignItems: 'end', paddingBottom: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '24px' }}>Silvia Santos</h1>
              <h2 style={{ fontSize: '14px', fontWeight: 'lighter' }}>Entrou em 2021</h2>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '1px', height: '3%' }}></div>

      <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
  <div style={{ display: 'flex', height: '20vh', width: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '20vh', width: '50%' }}>
      <div><h2 style={{ fontSize: '18px' }}>Estudando</h2><p>História</p></div>
      <div><h2 style={{ fontSize: '18px' }}>Série</h2><p>3º - Fundamental 1</p></div>
      <div><h2 style={{ fontSize: '18px' }}>Assunto no momento</h2><p>Segunda Guerra Mundial</p></div>
    </div>
    <div style={{ display: 'flex', width: '50%', flexDirection: 'column', alignItems: 'end' }}>
      <h2 style={{ fontSize: '18px' }}>Aluno</h2>

    </div>
  </div>

        <div style={{ width: '100%', marginTop: '15%' }}>
          <h1 style={{ marginTop:'5%',fontSize: '28px', textAlign: 'left', color: 'black' }}>Desempenho</h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '12px', border: '1px solid #E0E0E0', overflow: 'hidden', marginTop: '10px' }}>
            {[{img: medalhaDeOuro, alt: "Medalha de Ouro", title: "Rank Recorde", subtitle: "Ouro III"}, {img: pontos, alt: "Pontos", title: "Pontos", subtitle: "210"}, {img: calendario, alt: "Sem Parar", title: "Sem parar!", subtitle: "14 dias"}, {img: correto, alt: "Atividades Feitas", title: "Atividades feitas", subtitle: "20"}].map((item, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '15px', borderBottom: index < 2 ? '1px solid #E0E0E0' : '', borderRight: index % 2 === 0 ? '1px solid #E0E0E0' : '', textAlign: 'center' }}>
                <img src={item.img} alt={item.alt} style={{ width: '30px', height: '30px', marginBottom: '5px' }}/>
                <h2 style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</h2>
                <p style={{ fontSize: '12px', color: '#666' }}>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>


          <h1 style={{fontSize: '28px', marginTop:'15%'}}>Rank - Alunos</h1>
          <div style={{ display: 'flex', flexDirection: 'column', height: '30vh', width: '100%', marginTop:'5%' }}>

            <div style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={BronzeDois} alt="Medalha Bronze II" style={{ width: '15vh', height: '20vh' }} />
                <h2 style={{ fontSize: '24px', color: '#A96224', marginTop: '10px' }}>Bronze II</h2>
              </div>

              <div style={{width:'25vh',height:'19.5vh',marginLeft:'10%', border: '1px solid #E0E0E0', overflow: 'hidden' }}>
                {[{ rank: 9, name: "Grande eweww...", points: "271pts", image: GrandEwe },
                 { rank: 10, name: "Silvia Santos", points: "210pts", image: fotousuario }, 
                { rank: 11, name: "Tom Holland", points: "189pts", image: TomHolland }].map((user, index) => (

                  <div key={index} style={{ display: 'flex', alignItems: 'center',height:'6.5vh', backgroundColor: index % 2 === 0 ? '#F9F9F9' : '#D9D9D9' }}>

                    <span style={{ width: '20%', textAlign: 'center', fontWeight: 'bold', color: '#333' }}>#{user.rank}</span>
                    <img src={user.image} alt={user.name} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                    <span style={{ flex: 1, fontSize: '12px', color: '#333' }}>{user.name}</span>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{user.points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          

                  <div style={{height:'30vh', width:'100%', marginTop:'5vh'}}>
                  <h1 style={{fontSize: '32px'}}>Emblemas</h1>
                  {/* implementar aqui a navegação para a tela de emblemas */}
                  <p>Ver todos</p>
             
                  <div style={{ width: '90%', marginTop: '20px' }}>

        <div style={{ display: 'inline-flex',alignContent:'Center', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '10px',overflowX:'scroll', maxWidth:'100%' }}>
          {/* Emblema 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#a7dcff', borderRadius: '8px', padding: '10px' }}>
            <img src={MedalhaEmblema} alt="Medalha" style={{ width: '10vh', height: '10vh' }} />
            <p style={{ fontSize: '18px', fontWeight:'Bold',color: '#333', marginTop: '5px' }}>Nível 1</p>
          </div>
          {/* Emblema 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#90f7a7', borderRadius: '8px', padding: '10px' }}>
            <img src={LivrosEmblema} alt="Livros" style={{ width: '10vh', height: '10vh' }} />
            <p style={{ fontSize: '18px',fontWeight:'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
          </div>
          {/* Emblema 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fef5a7', borderRadius: '8px', padding: '10px', opacity: 0.5 }}>
            <img src={CorujaEmblema} alt="Coruja" style={{ width: '10vh', height: '10vh' }} />
            <p style={{ fontSize: '18px',fontWeight:'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fef5a7', borderRadius: '8px', padding: '10px', opacity: 0.5 }}>
            <img src={CorujaEmblema} alt="Coruja" style={{ width: '10vh', height: '10vh' }} />
            <p style={{ fontSize: '18px',fontWeight:'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fef5a7', borderRadius: '8px', padding: '10px', opacity: 0.5 }}>
            <img src={CorujaEmblema} alt="Coruja" style={{ width: '10vh', height: '10vh' }} />
            <p style={{ fontSize: '18px',fontWeight:'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
          </div>
        </div>
      </div>
    </div>


        
      </div>
    </div>

    <Navegacao />
  </Container>
);}

export default PerfilAluno;
