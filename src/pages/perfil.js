import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import TituloTela from '../styles/tituloTela';
import fotousuario from '../assets/fotousuario.png';
import pontos from '../assets/pontos.png';
import calendario from '../assets/calendario.png';
import medalhaDeOuro from '../assets/medalhaDeOuro.png';
import correto from '../assets/correto.png';
import Pessoas from '../assets/Pessoas.png';
import BronzeDois from '../assets/Bronze II.png';

const Perfil = () => (
  <Container style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <TituloTela style={{ marginBottom: '0' }}>Perfil</TituloTela>

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

      <div style={{ display: 'flex', flexDirection: 'column', width: '90%', marginBottom: '20px' }}>
        <div style={{ display: 'flex', height: '20vh', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '20vh', width: '50%' }}>
            <div><h2 style={{ fontSize: '18px' }}>Estudando</h2><p>História</p></div>
            <div><h2 style={{ fontSize: '18px' }}>Série</h2><p>3º - Fundamental 1</p></div>
            <div><h2 style={{ fontSize: '18px' }}>Assunto no momento</h2><p>Segunda Guerra Mundial</p></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'end', height: '20vh', width: '30%' }}>
            <div style={{ display: 'flex', width: '90%' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '18px', height: '60px' }}>Aluno/Mentor</h2>
                <button style={{ backgroundColor: '#FEE101', height: '42px', width: '88px', border: 'black', padding: '5px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto' }}>Ver grupo <br /> de mentoria</button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: '100%', marginTop: '5%' }}>
          <h1 style={{ fontSize: '18px', textAlign: 'left', color: 'black' }}>Desempenho</h1>
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

        <h1>Rank - Alunos</h1>
        <div style={{ display: 'flex', flexDirection: 'flex-column', height: '35vh', width: '100%', backgroundColor: 'red' }}>
          <div style={{ display: 'flex', height: '28vh', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
            <img src={BronzeDois} alt="Medalha de Bronze ||" style={{ height: '18vh', width: '15vh', zIndex: '3' }}/>
            <h2 style={{ display: 'flex', justifyContent: 'center', fontSize: '30px', color: '#A96224' }}>Bronze ||</h2>
          </div>
          <div style={{ display: 'flex', height: '28vh', width: '100%', backgroundColor: 'blue' }}>
            <div style={{ flex: 1, right: '20px', transform: 'translateY(20px)' }}>
              <h3 style={{ color: '#302F2F', fontSize: '14px', fontWeight: 'bold', marginLeft: '30px' }}>4.5 estrelas</h3>
              <div style={{ border: '2px solid #D9D9D9', overflow: 'hidden' }}>
                {[{name: "Silvia Santos", score: "174"}, {name: "João Pedro", score: "132"}, {name: "Tom Holland", score: "132"}].map((user, index) => (
                  <div key={index} style={{ display: 'flex', padding: '5px', backgroundColor: index % 2 === 0 ? 'white' : '#D9D9D9', fontSize: '10px' }}>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>#{index + 1}</span>
                    <img src={Pessoas} alt="Perfil" style={{ width: '20px', height: '20px', marginLeft: '-10px' }}/>
                    <span style={{ flex: 3, fontSize: '8px', marginLeft: '10px', marginTop: '3px', color: 'black' }}>{user.name}</span>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>{user.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Navegacao />
  </Container>
);

export default Perfil;
