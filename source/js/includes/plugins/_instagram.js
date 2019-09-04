
    var userFeed = new Instafeed({
        get: 'user',
        userId: '4787090402',
        limit: '9',
        accessToken: '4787090402.1331252.cc4b47c67fa94385a85a9d45f7226196',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    });
    userFeed.run();
