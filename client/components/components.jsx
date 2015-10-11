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

    go(){
        var text = React.findDOMNode(this.refs.nick).value.trim();
        if(text.length < 1){
            //throw new Error("Something!");
            this.setState({
                error: "Hold on cowboy! you need a name, son!"
            });
        }else{
            console.log(text);
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