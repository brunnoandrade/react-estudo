import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Sobre from './pages/Sobre';
// import Categoria from './pages/Categoria';
// import styled from 'styled-components';
// import SearchBox from './components/SearchBox'
// import Modal from './components/Modal'

function App() {
  return (
    <>
    </>
  )
}

//CONTROLE DE ACESSO ---------------------------------------------------------------------------------
// const isLogged = false;

// const PrivateRoute = ({children, ...rest}) => {
//   return (
//     <Route {...rest}>
//       {isLogged ? children : <Redirect to="/login" />}
//     </Route>
//   );
// };

// function App() {
//   return (
//     <BrowserRouter>

//       <header>
//         <h1>Meu Site</h1>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/sobre">Sobre</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <hr/>

//       <Switch>

//         <Route exact path="/">
//           <Home />
//         </Route>

//         <Route path="/login">
//           <Login />
//         </Route>

//         {/* <Route path="/sobre">
//           {isLogged ? <Sobre /> : <Redirect to="/login" />}
//         </Route> */}

//         <PrivateRoute path="/sobre">
//           <Sobre />
//         </PrivateRoute>

//         <Route path="*">
//           <h1>Página não encontrada.</h1>
//         </Route>
        
//       </Switch>

//       <hr/>

//       <footer>
//         Todos os direitos reservados.
//       </footer>
//     </BrowserRouter>
//   )
// }

//ROUTER, PARÂMETROS NA URL, QUERY STRINGS, ERROR PAGE, REDIRECTS ---------------------------------------------------------------------------------
// function App() {
//   return (
//     <BrowserRouter>

//       <header>
//         <h1>Meu Site</h1>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/sobre">Sobre</Link>
//             </li>
//             <li>
//               <Link to="/quem-somos">Quem Somos</Link>
//             </li>
//             {/* <li>
//               <Link to="/categoria/esportes">Esportes</Link>
//             </li>
//             <li>
//               <Link to="/categoria/noticias">Notícias</Link>
//             </li>
//             <li>
//               <Link to="/categoria/viagem">Viagem</Link>
//             </li> */}
//             <li>
//               <Link to="/categoria?tipo=viagem">Viagem</Link>
//             </li>
//             <li>
//               <Link to="/categoria?tipo=noticias&subcat=newyork">Notícias</Link>
//             </li>
//             <li>
//               <Link to="/notfound">Página que não existe</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <hr/>

//       <Switch>

//         <Route exact path="/">
//           <Home />
//         </Route>

//         <Route path="/sobre">
//           <Sobre />
//         </Route>

//         <Route path="/quem-somos">
//           <Redirect to="/sobre" />
//         </Route>

//         {/* <Route path="/categoria/:cat/:subcat">
//           <Categoria />
//         </Route> */}

//         {/* <Route path="/produto/:id">
//           <Categoria />
//         </Route> */}

//         <Route path="/categoria">
//           <Categoria />
//         </Route>

//         <Route path="*">
//           <h1>Página não encontrada.</h1>
//         </Route>
        
//       </Switch>

//       <hr/>

//       <footer>
//         Todos os direitos reservados.
//       </footer>
//     </BrowserRouter>
//   )
// }

// //MODAL ---------------------------------------------------------------------------------
// function App() {

//   const [modalVisible, setModalVisible] = useState(false);

//   const handleButtonClick = () => {
//     setModalVisible(true);
//   }

//   return (
//     <>
//       <button onClick={handleButtonClick}>Abrir Modal</button>
//       <Modal visible={modalVisible} setVisible={setModalVisible}>
//         <h1>Testando </h1>
//       </Modal>
//     </>
//   )
// }

//LOCAL STORAGE ---------------------------------------------------------------------------------
// function App() {

//   const [name, setName] = useState(localStorage.getItem('name'));

//   useEffect(() => {
//     localStorage.setItem('name', name)
//   }, [name]);

//   return (
//     <>
//       <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//     </>
//   )
// }

//ADICIONANDO ITEMS A LISTA E MARCANDO ---------------------------------------------------------------------------------
// function App () {

//   const [searchText, setSearchText] = useState('');
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     setList(
//       [
//         {id:1, title:'Comprar o bolo', done:false},
//         {id:2, title:'Pega o cachorro no petshop', done:true},
//         {id:3, title:'Gravar Aula', done:false}
//       ]
//     )
//   }, []);

//   function addAction(newItem) {
//     // let newList = [ ...list, {title:newItem, done:false} ];

//     let newList = [ ...list ];
//     newList.push({title:newItem, done:false})

//     // newList.push({
//     //   title:newItem,
//     //   done:false
//     // });

//     setList(newList);
//   }

//   function handleToggleDone(index) {
//     let newList = [ ...list ];
//     newList[index].done = !newList[index].done;

//     setList(newList);
//   }

//   return (
//     <>
//       <h1>Lista de Tarefas</h1>
//       <SearchBox 
//         frasePadrao="Adicione um item"
//         onEnter={addAction}
//       />

//       <hr/>

//       <ul>
//         {list.map((item, index)=>(
//           <li key={index}>
//             {item.done &&
//               <del>{item.title}</del>
//             }
//             {!item.done &&
//               <li>{item.title}</li>
//             }
//             <button onClick={()=>handleToggleDone(index)}>
//               {item.done && 'Desfazer'}
//               {!item.done && 'Fazer'}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

//EXIBINDO LISTA ---------------------------------------------------------------------------------
// function App () {

//   const [searchText, setSearchText] = useState('');
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     setList(
//       [
//         {id:1, title:'Comprar o bolo', done:false},
//         {id:2, title:'Pega o cachorro no petshop', done:true},
//         {id:3, title:'Gravar Aula', done:false}
//       ]
//     )
//   }, []);

//   function handleSearchInput(novoTexto) {
//     setSearchText(novoTexto);
//   }

//   return (
//     <>
//       <h1>Lista de Tarefas</h1>
//       <SearchBox 
//         frasePadrao="Faça uma Busca"
//         onChangeText={handleSearchInput}
//       />

//       <hr/>

//       {/* <ul>
//         {list.map((item)=>{
//           return (
//             <li>{item.title}</li>
//           );
//         })}
//       </ul> */}

//       {/* <ul>
//         {list.map((item)=>(
//           <li key={item.id.toString()}>{item.title}</li>
//         ))}
//       </ul> */}

//       <ul>
//         {list.map((item, index)=>(
//           <li key={index}>
//             {item.done &&
//               <del>{item.title}</del>
//             }
//             {!item.done &&
//               <li>{item.title}</li>
//             }
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

//COMUNICAÇÃO DENTRO DE COMPONENTES ---------------------------------------------------------------------------------
// function App () {

//   const [searchText, setSearchText] = useState('');

//   function handleSearchInput(novoTexto) {
//     setSearchText(novoTexto);
//   }

//   return (
//     <>
//       <h1>Lista de Tarefas</h1>
//         <SearchBox 
//           frasePadrao="Faça uma Busca"
//           onChangeText={handleSearchInput}
//         />

//         <SearchBox 
//           frasePadrao={searchText}
//         />

//       <hr/>

//       Texto Procurado: {searchText}
//     </>
//   )
// }

//SEPARANDO EM COMPONENTES ---------------------------------------------------------------------------------
// function App () {
//   return (
//     <>
//       <h1>Lista de Tarefas</h1>
//       <SearchBox frasePadrao="Faça uma Busca" />
//       <SearchBox frasePadrao="Digite seu nome" />
//       <SearchBox />
//     </>
//   )
// }

//USEEFFECT ---------------------------------------------------------------------------------
// function App () {

//   const [ contagem, setContagem ] = useState(0);

//   useEffect(() => {
//       if (contagem === 0) {
//         document.title = "Começou a brincadeira!"
//       } else {
//         document.title = "Contagem: " + contagem;
//       }
//     }, [contagem]
//   );

//   function aumentarAction() {
//     setContagem(contagem + 1);
//   }

//   return (
//     <>
//       <h1>Contagem: {contagem}</h1>
//       <button onClick={aumentarAction}>Aumentar</button>
//     </>
//   )

// }

//USESTATE INPUT CONDICIONAL DE EXIBIÇÃO ---------------------------------------------------------------------------------
// const Input = styled.input`
//   padding: 20px;
//   font-size: 20px;
// `;

// function App () {

//   const [ email, setEmail ] = useState('');
//   const [ isLogged, setIsLogged ] = useState(false);

//   return (
//     <>
//       <Input placeholder="Digite um e-mail" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

//       {/* {algo && <Componente />} */}

//       {/* {isLogged === true &&
//         <button>Sair</button>
//       }

//       {isLogged === false &&
//         <button>Entrar</button>
//       } */}

//       {isLogged 
//         ? <button>Sair</button> 
//         : <button>Entrar</button>
//       }

//       {/* {email.length > 0 &&
//         <>
//           <p>{email.length} caractere{email.length !== 1 ? 's' : ''}</p>
//           <p>Aviso alguma coisa</p>
//         </>
//       } */}
//     </>
//   )
// }

//USESTATE INPUT ---------------------------------------------------------------------------------

// const Input = styled.input`
//   padding: 20px;
//   font-size: 20px;
// `;

// function App () {

//   const [ email, setEmail ] = useState('');
//   const [ password, setPassword ] = useState('');

//   const handlePasswordInput = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleButton = () => {
//     alert(email+' - '+password);
//   };

//   return (
//     <>
//       <Input placeholder="Digite um e-mail" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
//       <Input placeholder="Digite uma senha" type="password" value={password} onChange={handlePasswordInput} />
//       <button onClick={handleButton}>Dizer</button>
//     </>
//   )
//   // ---------------------------------------------------------------------------------
//   // const [ texto, setTexto ] = useState('');
//   // const handleInput = (e) => {
//   //   setTexto(e.target.value);
//   // };

//   // return (
//   //   <>
//   //     <Input type="text" value={texto} onChange={handleInput} />
//   //     <p>
//   //       {texto.length} caracteres
//   //     </p>
//   //   </>
//   // )
// }

//USESTATE ---------------------------------------------------------------------------------
// function App () {

//   const [ contagem, setContagem ] = useState(0);

//   const botaoAction = () => {
//     setContagem(contagem + 1);
//   };

//   return (
//     <>
//       <div>{contagem} vezes</div>
//       <button onClick={botaoAction}>Clique para aumentar</button>
//     </>
//   )
// }

//STYLED COMPONENTS ---------------------------------------------------------------------------------
// import './App.css';
// import styled from 'styled-components';
// const Site = styled.h1`
//   width: 400px;
//   height: 400px;
//   background-color: #00FF00;
// `;

// const Botao = styled.button`
//   padding: 20px;
//   font-size: 20px;
//   /* background-color: ${props => props.color || '#00FF00'}; */
//   background-color: ${props => props.ativo == true ? '#0000FF' : '#000000'};
//   color: ${props => props.ativo == true ? '#000000' : '#ffffff'};
// `;

// const Botao = styled.button`
//   padding: 20px;
//   font-size: 20px;
//   background-color: #0000FF;
// `;

// const BotaoPequeno = styled(Botao)`
//   padding: 20px;
//   font-size: 20px;
//   background-color: #FF0000;
// `;

// function App() {
//   return (
//     <Site>
//       <Botao>Clique aqui 1</Botao>
//       <BotaoPequeno>Clique aqui 1</BotaoPequeno>
//       {/* <Botao ativo={true}>Clique aqui 1</Botao> */}
//       {/* <Botao ativo={false}>Clique aqui 2</Botao> */}
//       {/* <Botao color="#FF0000">Clique aqui 3</Botao>
//       <Botao color="#0000FF">Clique aqui 4</Botao> */}
//       {/* <Botao>Clique aqui</Botao> */}
//     </Site>
//   )
// }

//PROPS ---------------------------------------------------------------------------------
// function BemVindo(props) {
//   return <h1>Olá, {props.nome} você tem {props.idade}</h1>;
// }

// function Avatar(props) {
//   return (
//     <div>
//       <img src={props.url} alt={props.name} />
//       <br/>
//       <span>{props.name}</span>
//     </div>
//   );
// }

// function App() {

//   let user = {
//     url: "https://www.google.com.br/logos/google.jpg",
//     name: "Bruno andrade"
//   }

//   return <>
//     <Avatar url={user.url} name={user.name} />
//   </>;
// }

//PROPS ---------------------------------------------------------------------------------
// function Avatar(props) {
//   return (
//     <div className="avatar" style={{backgroundColor:'#777777', padding:20, width:150}}>
//       <img style={{width:50, height:50}} src={props.user.url} alt={props.user.name} />
//       <br/>
//       <span>{props.user.name}</span>
//     </div>
//   );
// }

// function App() {

//   let user = {
//     url: "https://www.google.com.br/logos/google.jpg",
//     name: "Bruno andrade"
//   }

//   return <>
//     <Avatar user={user} />
//   </>;
// }


//COMPONENTES E FUNÇÕES ---------------------------------------------------------------------------------

// class App extends React.Component {
//   render () {
//     return <h1>Testando</h1>;
//   }
// }

// let App = () => {
//   return <h1>Testando3</h1>
// }

// let App = () => <h1>Testando4</h1>

// function App() {
//   return <h1>Testando2</h1>
// }



// function formatarNome(usuario) {
//   return usuario.nome+' '+usuario.sobrenome;
// }

// function App() {

//   let nome = 'Bruno Andrade';
//   let idade = 27;

//   let usuario = {
//     nome: 'Bruno',
//     sobrenome: 'Andrade'
//   };

//   let imagem = 'https://www.google.com.br/logos/google.jpg';

//   return <>
//     <div>
//       Meu nome é: {formatarNome(usuario)}
//       <img src={imagem} />
//     </div>
//   </>;
// }

export default App;