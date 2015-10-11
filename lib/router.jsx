FlowRouter.route('/', {
    action: function (param, queryParam) {
        console.log("home");
        ReactLayout.render(MainLayout, { content: <Welcome />, footer: <Footer />});
    },
    name: "home"
});

FlowRouter.route('/home', {
    action(params, queryParams) {
        ReactLayout.render(MainLayout, {content: <Welcome />});
    }
});

FlowRouter.route('/user/:userId', {
    action(params, queryparam) {
        console.log(params.userId);
        ReactLayout.render(MainLayout, {content: <Menu user={params.userId} />});
    }
});

FlowRouter.notFound = {
    subscriptions: function () {

    },
    action() {
        ReactLayout.render(MainLayout, {content: <NotFound />});
    }
};
