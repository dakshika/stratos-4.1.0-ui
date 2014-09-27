var render = function (theme, data, meta, require) {

    if(data.error.length === 0 ){
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
            header:[
                {
                    partial: 'index_header',
                    context:{
                        user_name: 'admin@wso2.com'
                    }
                }
            ],
            sub_header:[
                {
                    partial:'index_sub_header',
                    context:{
                        breadcrumb_path_l2:data.config_path_l2
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
                    partial:'configure_form',
                    context:{
                        form_action: data.form_action,
                        formHtml: data.formHtml,
                        formData: data.formData,
                        isForm: data.isForm,
                        content_body: {sections:
                                        [,,,,,,,,,,,,,,,,,,,,,,,,,,,,]
                        }
                    }
                }

            ]
        });

    }else{


    }
};