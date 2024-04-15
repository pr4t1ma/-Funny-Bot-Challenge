import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './App.css';
const welcomeMessages = [
  {
    user: 'bot',
    message:
      'Welcome to the Random Joke !Do you want to hear a joke? You can choose a category by typing its name. Type pun, dad or anti, to continue.',
  },
];

function App() {
  const [messages, setMessages] = useState(welcomeMessages);
  const [inputText, setInputText] = useState('');
  const messageEndRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    scrollToboottom()
  },[messages])

  const scrollToboottom= ()=>{
    console.log(messageEndRef.current?.scrollTop )
    console.log(messageEndRef.current?.scrollHeight )
    if(messageEndRef.current)
    messageEndRef.current.scrollTop = messageEndRef.current.scrollHeight
  }
  const changeInput = (e: any) => {
    setInputText(e.target.value);
    console.log('hey', inputText);
  };

  const formSubmit = (e:any) => {
    e.preventDefault();
    // HERE IS THE RESPOSE CODE
    let responseMessage = '';
    if (inputText.toLowerCase().includes('pun')) {
      const pun= [ "Why don't skeletons fight each other? They don't have the guts!",
      "I'm reading a book on the history of glue. I just can't seem to put it down!",
      "Why did the bicycle fall over? Because it was two-tired!",];
      responseMessage =pun[Math.floor(Math.random()* pun.length)]
    }
     else if (inputText.toLowerCase().includes('anti')) {
      const anti=[
        "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
        "Why do programmers prefer dark mode? Less light, fewer bugs!",
        "Why did the computer go to therapy? It had too many bytes of emotional baggage!",
      ]
      responseMessage =anti[Math.floor(Math.random()*anti.length)]
   
    } else if (inputText.toLocaleLowerCase().includes('dad')) {
      const dad=[   'Why did the scarecrow win an award? Because he was outstanding in his field!',
      "What's orange and sounds like a parrot? A carrot!",
      "Why couldn't the bicycle stand up by itself? It was two-tired!",];
      responseMessage = dad[Math.floor(Math.random()*dad.length)]
    }
    else if(inputText.toLocaleLowerCase() === "no"){
      responseMessage ="Okay see you next time bye."
    }
    else{
      responseMessage='I am sorry, I didnt understand. Please choose from pun, programming, or anti.'
    }
    setMessages([
      ...messages,
      {
        user: 'pam',
        message: inputText,
      },
      {
        user: 'bot',
        message: responseMessage,
      },
    ]);
    setInputText('');
    console.log('hello');
  };


  return (
    <>
      <div className="container">
        <h1>Random Jokes</h1>
        <div className="message-list" ref ={messageEndRef}>
        {messages.map((message, index) => {
          return (
            <div
              className={message.user === 'pam' ? 'user' : 'bot'}
              key={index}
            >
              {message.user === 'pam' ? (
                <div className="img user">
                  <img className="" src="/images/pam.png" />
                </div>
              ) : (
                <div className="img bot">
                  <img className="" src="/images/Robot.jpeg" />
                </div>
              )}

              <p className="msgbox" key={index}>
                {message.message}
              </p>
            </div>
          );
        })}
        </div>      
        <div className="form">
          <form className="form-group" onSubmit={formSubmit}>
            <input
              type="text"
              placeholder="type here "
              value={inputText}
              onChange={changeInput}
            />
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
