MainLayout = React.createClass({
    render() {
        return <div>
            <div id="wrapper">
                <header>{this.props.header}</header>
                <main>{this.props.content}</main>
                <Footer />
            </div>
        </div>;
    }
});

Welcome = React.createClass({
    getInitialState() {
        return {
            error : ""
        };
    },

    //mixins: [ReactMeteorData],

    createUser(nick){
        var test = Users.insert({
            name: nick,
            createdAt: new Date()
        });
        console.log(test);
    },

    go(){
        var text = React.findDOMNode(this.refs.nick).value.trim();
        if(text.length < 1){
            //throw new Error("Something!");
            this.setState({
                error: "Hold on cowboy! You need a name, son!"
            });
        }else{
            console.log(text);
            //createUser(text);
            FlowRouter.go("/menu")
        }
    },

    render() {
        return <div className="content">
            <div className="welcometext">
                <h1>Typechallenge!</h1>
                <h3>Welcome to this super fun typing game where you compete with friends and foes.
                    Pick a nick and prepeare for war!</h3>
            </div>
            <input className="input-big" ref="nick" type="text" placeholder="Pick a nick!"/>
            <button onClick={this.go} className="btn-big">Go!</button>
            <h3 className="err">{this.state.error}</h3>

        </div>
    }
});


Menu = React.createClass({

    getInitialState() {
        return {
        };
    },

    go(){
        console.log("button clicked");
        //FlowRouter.go("/menu")
    },

    render() {
        return <div className="content">
            <div className="welcometext">
                <h1>Welcome, Rix1!</h1>
                <h3>Pick a game type from the menu below:</h3>
            </div>
            <button onClick={this.go} className="btn-big">Create Game</button>
            <button onClick={this.go} className="btn-big">Join Game</button>
            <button onClick={this.go} className="btn-big">Settings</button>
        </div>
    }
});