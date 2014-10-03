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
                        user_name:'admin@wso2.com'
                    }
                }
            ],
            sub_header:[
                {
                    partial:'index_sub_header',
                    context:{

                    }
                }
            ],
            left_menu:[
                {
                    partial:'index_left_menu',
                    context:{

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
                        content_title:'User Management',
                        content_body:{sections:[
                            {
                                link:'users/',
                                title:'Users',
                                icon:"fa-th-large",
                                description:"Define partitions/partition groups to be used in autoscaling and deployment policies."
                            },
                            {
                                link:'tenants/',
                                title:'Tenant',
                                icon:"fa-road",
                                description:"Define specific policies for cartridge deployment."
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