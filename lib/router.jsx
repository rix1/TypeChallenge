FlowRouter.route('/', {
    action: function (param, queryParam) {
        console.log("home");
        ReactLayout.render(MainLayout, {footer: <Footer />});
    },
    name: "home"
});

FlowRouter.route('/home', {
    action(params) {
        ReactLayout.render(MainLayout, {content: <Welcome />});
    }
});

FlowRouter.notFound = {
    subscriptions: function () {

    },
    action() {
        console.log("404! NOT FOUND ");
    }
};
