// import { ChatEngine } from 'react-chat-engine';

// import ChatFeed from './components/ChatFeed';

// import './App.css';

// const App = () => {
//     return (
//         <ChatEngine
// height = "100vh"
// projectID="69f99679-7b0b-492c-adf0-ac3762052bbd"
// userName="AsthaBaranwal"
// userSecret="12345678"
// renderChatFeed={(chatAppProps) => <ChatFeed  {... chatAppProps} />}
//         />
//     );
// }

// export default App;
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '69f99679-7b0b-492c-adf0-ac3762052bbd';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;