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

Footer = React.createClass({

    love(){
        return "Eg <3 Meteor";
    },

    render() {
        return <div className="footer">
            <p>{this.love()}</p>
        </div>
    }
});

Welcome = React.createClass({
    render() {
        return <div className="content">
            <div className="welcometext">
                <h1>Typechallenge!</h1>
                <h3>Welcome to this super fun typing game where you compete with friends and foes.
                    Pick a nick and prepeare for war!</h3>
            </div>
            <input className="input-big" type="text" placeholder="Pick a nick!"/>
            <button onsubmit="" className="btn-big">Go!</button>
            <h3 className="err">Hold on cowboy! you need a name, son!</h3>
        </div>
    }
});