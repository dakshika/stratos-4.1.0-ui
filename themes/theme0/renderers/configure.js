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
                        content_title:'Configure Apache Stratos',
                        content_body:{sections:[
                            {
                                link:'partitions/',
                                title:'Partitions',
                                icon:"fa-th-large",
                                description:"Define partitions/partition groups to be used in autoscaling and deployment policies."
                            },
                            {
                                link:'deployments/',
                                title:'Deployment Policies',
                                icon:"fa-road",
                                description:"Define specific policies for cartridge deployment."
                            },
                            {
                                link:'autoscalingpolicies/',
                                title:'Autoscaling Policies',
                                icon:"fa-expand",
                                description:"Define policies which specify inbound requests, memory usage and CPU usage etc."
                            },
                            {
                                link:'loadbalancer/',
                                title:'LB Definitions',
                                icon:"fa-inbox",
                                description:"Define and manage single/multi tenant Load balancers."
                            },
                            {
                                link:'cartridges/',
                                title:'Cartridge/LB Definitions',
                                icon:"fa-inbox",
                                description:"Define and manage single/multi tenant cartridges."
                            },
                            {
                                link:'multitenant/',
                                title:'Multitenant Services',
                                icon:"fa-sitemap",
                                description:"Define and manage multitenant services."
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