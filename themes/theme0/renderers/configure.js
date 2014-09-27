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
                                link:'iaas/',
                                title:'IaaS',
                                icon:"fa-gears",
                                description:"Configure partitions, deployment and scaling policies, cartridges and manage IaaS"
                            },
                            {
                                link:'partitions/',
                                title:'Partitions',
                                icon:"fa-th-large",
                                description:"Define partitions/partition groups to be used in autoscaling and deployment policies."
                            },
                            {
                                link:'deployment/',
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
                                link:'cartridges/',
                                title:'Cartridge/LB Definitions',
                                icon:"fa-inbox",
                                description:"Define and manage single/multi tenant cartridges."
                            },
                            {
                                link:'multitenent/',
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


    }
};