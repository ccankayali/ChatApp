import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="162ac88f-44a4-432d-95c5-3c8911def152"
            userName="Can"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    ); 
}

export default App;