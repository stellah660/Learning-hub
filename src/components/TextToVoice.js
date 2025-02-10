import React, { useState, useEffect } from 'react';
import ttv from '../assets/tts.png'; 
import microphone from '../assets/microphone.svg'; 
import microphoneoff from '../assets/microphoneoff.svg'; 

const TextToVoice = () => {
    const [isTTSActive, setIsTTSActive] = useState(false);

    useEffect(() => {
        const speakEL = document.getElementById('rightButton1');
        const iconEL = speakEL ? speakEL.querySelector('img') : null;

        const toggleTTS = () => {
            setIsTTSActive(prevState => {
                const newState = !prevState;

                if (iconEL) {
                    if (newState) {
                        document.addEventListener('mouseup', speakSelectedText);
                    } else {
                        window.speechSynthesis.cancel();
                        document.removeEventListener('mouseup', speakSelectedText);
                    }
                }

                return newState;
            });
        };

        const speakSelectedText = () => {
            window.speechSynthesis.cancel();  

            const selectedText = window.getSelection().toString();

            if (selectedText) {
                const utterance = new SpeechSynthesisUtterance(selectedText);
                utterance.lang = 'en-US';  
                window.speechSynthesis.speak(utterance);
            }
        };

        if (speakEL) {
            speakEL.addEventListener('click', toggleTTS);
        }

        return () => {
            if (speakEL) {
                speakEL.removeEventListener('click', toggleTTS);
            }
            document.removeEventListener('mouseup', speakSelectedText);
        };
    }, []);

    const openTalk = () => {
        const ttsPopup = document.getElementById('ttsPopup');
        if (ttsPopup) {
            ttsPopup.style.display = ttsPopup.style.display === 'none' ? 'block' : 'none';
        }
    };

    return (
        <>
            <div onClick={openTalk}>
                <img className="Logo texttovoiceimg" alt="Logo" src={ttv} height='45px' width='45px' />
            </div>

            <div
                id="ttsPopup"
                style={{
                    display: 'none', 
                    position: 'fixed',
                    top: '72%',
                    left: '25px',
                    background: 'white',
                    padding: '10px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    alignItems: 'center',  
                    justifyContent: 'center',  
                }}
                >
                <p className="right_button1" id="rightButton1">
                    {isTTSActive ?
                        <img
                            src={microphone}
                            alt="TTS Icon"
                            style={{ height: '20px', cursor: 'pointer' }} 
                        />:
                        <img
                            src={microphoneoff}
                            alt="TTS Icon"
                            style={{ height: '20px', cursor: 'pointer' }} 
                        />
                    }
                </p>
            </div>
        </>
    );
};

export default TextToVoice;
