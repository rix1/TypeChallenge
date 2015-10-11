NotFound = React.createClass({

    go(){
        console.log("invoked");
        FlowRouter.go("/");
    },


    render() {
        return <div className="content">
            <div className="welcometext">
                <h1>Woops! 404 Not found</h1>
                <h3>This page could not be found. Try another url, or return the the home page:</h3>
            </div>
            <button onClick={this.go} className="btn-big">Take me home!</button>
        </div>
    }
});


Footer = React.createClass({

    love(){
        return "Made with <3 and Meteor";
    },

    render() {
        return <div className="footer">
            <p>{this.love()}</p>
        </div>
    }
});