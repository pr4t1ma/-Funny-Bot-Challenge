import { useState } from 'react';

import './App.css';
const welcomeMessages = [
  {
    user: 'bot',
    message:
      'do you wanna a hear a joke you can type a ctaegory by typing it,s name yes and no',
  },
];

function App() {
  const [messages, setMessages] = useState(welcomeMessages);
  const [inputText, setInputText] = useState('');
  const changeInput = (e: any) => {
    setInputText(e.target.value);
    console.log('hey', inputText);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    // HERE IS THE RESPOSE CODE
    let responseMessage = '';
    if (inputText.toLowerCase().includes('pun')) {
      responseMessage =
        "Why don't skeletons fight each other? They don't have the guts!";
    } else if (inputText.toLowerCase().includes('anti')) {
      responseMessage =
        'Why did the scarecrow win an award? Because he was outstanding in his field!';
    } else if (inputText.toLocaleLowerCase().includes('dad')) {
      responseMessage = 'fer dark mode? Less light, fewer bugs!';
    } else {
      responseMessage =
        "I'm sorry, I didn't understand. Please choose from pun, programming, or anti.";
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

        {messages.map((message, index) => {
          return (
            <div
              className={message.user === 'pam' ? 'user' : 'bot'}
              key={index}
            >
              {message.user === 'pam' ? (
                <div className="img user">
                  <img className="user" src="/images/pam.png" />
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
