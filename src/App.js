import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState(prevState => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('[App.js] onEnter')}
          onEntering={() => console.log('[App.js] onEntering')}
          onEntered={() => console.log('[App.js] onEntered')}
          onExit={() => console.log('[App.js] onExit')}
          onExiting={() => console.log('[App.js] onExiting')}
          onExited={() => console.log('[App.js] onExited')}
        >
          {state => (
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                transition: 'opacity 0.3s ease-out',
                opacity: state === 'exiting' ? 0 : 1
              }}
            />
          )}
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button onClick={this.showModal} className="Button">
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
