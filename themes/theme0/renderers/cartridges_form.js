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
                        breadcrumbPathLevelOne:data.breadcrumbPathLevelOne,
                        breadcrumbPathLevelTwo:data.breadcrumbPathLevelTwo
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
                    partial:'cartridges_form',
                    context:{
                        formContext: data.breadcrumbPathLevelTwo,
                        form_action: data.form_action,
                        formHtml: data.formHtml,
                        formData: data.formData,
                        formDataRaw: data.formDataRaw,
                        formTitle: data.formTitle,
                        isForm: data.isForm,
                        content_body: {sections:
                            data.list_data
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