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


    }
};