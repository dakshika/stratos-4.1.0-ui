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
                        breadcrumbPathLevelOne:data.breadcrumbPathLevelOne,
                        breadcrumbPathLevelTwo:data.breadcrumbPathLevelTwo
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
                    partial: '',
                    context:{
                        content_menu:'links',
                        content_title:'Configure Apache Stratos',
                        content_body:{sections:data.metro_menu}

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