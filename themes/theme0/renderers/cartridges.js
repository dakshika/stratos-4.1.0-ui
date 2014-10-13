var render = function (theme, data, meta, require) {

    if (data.error.length == 0) {
        var log = new Log();
        session.remove("get-status");
        session.remove("deploy-status");
        var cartridges = data.cartridges.cartridge, cartridges_new = [];


        for (var i = 0; i < cartridges.length; i++) {
            if (cartridges[i].serviceGroup != undefined) {
                if (!cartridges[i].done) {

                    cartridges[i].done = true;
                    var newObj = {};
                    var serviceGroup = cartridges[i].serviceGroup;
                    newObj.serviceGroup = serviceGroup;
                    newObj.cartridgeType = cartridges[i].cartridgeType;
                    newObj.items = [];
                    newObj.items.push(parse(stringify(cartridges[i])));
                    newObj.version = cartridges[i].version;
                    for (var j = 0; j < cartridges.length; j++) {
                        if (cartridges[j].serviceGroup == serviceGroup && !cartridges[j].done) {
                            cartridges[j].done = true;
                            newObj.items.push(parse(stringify(cartridges[j])));
                        }
                    }

                    cartridges_new.push(newObj);
                }
            } else {
                cartridges_new.push(cartridges[i]);
            }
        }

        theme('index', {
            page_meta: [
                {
                    partial: 'index_title',
                    context: {
                        page_title: 'Apache Stratos Home',
                        page_description: 'Apache Stratos Home'
                    }
                }
            ],
            header: [
                {
                    partial: 'index_header',
                    context: {
                        user_name: 'admin@wso2.com'
                    }
                }
            ],
            sub_header: [
                {
                    partial: 'index_sub_header',
                    context: {
                        breadcrumbPathLevelOne: 'cartridges',
                        breadcrumbPathLevelTwo: data.breadcrumbPathLevelTwo
                    }
                }
            ],
            left_menu: [
                {
                    partial: 'index_left_menu',
                    context: {
                        left_menu: data.left_menu
                    }
                }
            ],
            right_menu_help: [
                {
                    partial: 'index_right_menu_help',
                    context: {

                    }
                }
            ],
            content: [

                {
                    partial: 'cartridges',
                    context: {
                        content_menu: 'links',
                        content_title: 'Subscribe to Cartridge',
                        content_body: {sections: cartridges_new}

                    }
                }
            ]
        });

    } else {
        theme('index', {
            page_meta: [
                {
                    partial: 'index_title',
                    context: {
                        page_title: 'Apache Stratos Home - Error',
                        page_description: 'Apache Stratos Home - Error'
                    }
                }
            ],
            header: [
                {
                    partial: 'index_header',
                    context: {
                    }
                }
            ],
            content: [

                {
                    partial: 'error_page',
                    context: {
                        error: data.error,
                        content_title: 'Sorry Something went Wrong...! ',
                        content_body: {

                        }

                    }
                }
            ]
        });

    }
};