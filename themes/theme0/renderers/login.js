var render = function (theme, data, meta, require) {

    if(data.error.length == 0 ){
        theme('index', {
            page_meta: [
                {
                    partial:'index_title',
                    context:{
                        page_title:'Apache Stratos Login',
                        page_description:'Apache Stratos Login'
                    }
                }
            ],
            header:[
                {
                    partial: 'login_header',
                    context:{
                    }
                }
            ],
            content: [

                {
                    partial: 'login_body',
                    context:{
                        content_title:'The most comprehensive enterprise grade PaaS Framework'

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