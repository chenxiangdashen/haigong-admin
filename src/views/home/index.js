import React from 'react'
import './style.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state.userInput = "input";
        this.myRef = React.createRef();
    }

    state = {
        userInput: "",
    }

    handleChange(e) {
        this.setState({ userInput: e.target.value });
    }

    clearAndFocusInput() {
        this.setState({ userInput: '' });

        this.myRef.current.focus();
    }

    render() {
        let helloString = " Hello World  !!!";
        return (
            <div style={styles.bg} className='home'   >
                Hello World!!!
                <div dangerouslySetInnerHTML={{ __html: helloString }} />

                <div onClick={this.clearAndFocusInput.bind(this)}>
                    Click to Focus and Reset
                </div>
                <input
                    ref={this.myRef}
                    value={this.state.userInput}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        )
    }
}

const styles = {
    bgxx: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100vh - 64px)'
    }
}

export default Home