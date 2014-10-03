var render = function (theme, data, meta, require) {

    if(data.error.length == 0 ){
        theme('index', {
            page_meta: [
                {
                    partial:'index_title',
                    context:{
                        page_title:'Apache Stratos Home',
                        page_description:'Apache Stratos Home'
                    }
                }
            ],
            header:[
                {
                    partial: 'index_header',
                    context:{
                    }
                }
            ],
            left_menu:[
                {
                    partial:'index_left_menu',
                    context:{
                        left_menu:data.left_menu
                    }
                }
            ],
            right_menu_help:[
                {
                    partial:'index_right_menu_help',
                    context:{

                    }
                }
            ],
            content: [

                {
                    partial: 'metro_menu',
                    context:{
                        content_menu:'links',
                        content_title:'Welcome to Apache Stratos',
                        content_body:{sections:[
                                                {
                                                    link:'configure/',
                                                    title:'Configure',
                                                    icon:"fa-gears",
                                                    description:"Configure partitions, deployment and scaling policies, cartridges and manage IaaS"
                                                },
                                                {
                                                    link:'users/',
                                                    title:'Users',
                                                    icon:"fa-users",
                                                    description:"Add, remove and modify users in the tenant."
                                                },
                                                {
                                                    link:'cartridges/',
                                                    title:'Cartridges',
                                                    icon:"fa-inbox",
                                                    description:"Subscribe to Cartridges."
                                                }
                                                ]

                                    }

                    }
                }
            ]
        });

    }else{

        theme('index', {
            page_meta: [
                {
                    partial:'index_title',
                    context:{
                        page_title:'Apache Stratos Home - Error',
                        page_description:'Apache Stratos Home - Error'
                    }
                }
            ],
            header:[
                {
                    partial: 'index_header',
                    context:{
                    }
                }
            ],
            content: [

                {
                    partial: 'error_page',
                    context:{
                        error:data.error,
                        content_title:'Sorry Something went Wrong...! ',
                        content_body:{

                        }

                    }
                }
            ]
        });

    }
};