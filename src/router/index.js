import Home from '../container/Home.vue';
import ComponentA from '../components/ComponentA.vue';
import ComponentB from '../components/ComponentB.vue';
import ComponentC from '../components/ComponentC.vue';
import ComponentD from '../components/ComponentD.vue';
import ComponentDA from '../components/ComponentDA.vue';
import ComponentDB from '../components/ComponentDB.vue';
import ComponentDBA from '../components/ComponentDBA.vue';
import ComponentE from '../components/ComponentE.vue';
import NotFind from '../components/NotFind.vue';
import Login from '../components/Login.vue';
const routes = [
    {
        path:'/',
        name:'Home',
        component:Home,
        redirect:'/component-a',
        children:[
            {
                path:'/component-a',
                name:'ComponentA',
                component:ComponentA,
                meta: { title: 'ComponentA', path: 'component-a' }
            },
            {
                path:'/component-b',
                name:'ComponenB',
                component:ComponentB,
            },
            {
                path:'/component-c',
                name:'ComponentC',
                component:ComponentC,
            },
            {
                path:'/component-d',
                name:'ComponentD',
                component:ComponentD,
                redirect:'/component-d-a',
                children:[
                    {
                        path:'/component-d-a',
                        name:'ComponentDA',
                        component:ComponentDA,
                    },
                    {
                        path:'/component-d-b',
                        name:'ComponentDB',
                        component:ComponentDB,
                        children:[
                            {
                                path:'/component-d-b-a',
                                name:'ComponentDBA',
                                component:ComponentDBA
                            }
                        ]
                    }
                ]
            },
            {
                path:'/component-e',
                name:'ComponentE',
                component:ComponentE
            }
        ]
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'*',
        name:'NotFind',
        component:NotFind
    }
];

const str = 'ahgighighgihg';

export {
    routes,
    str
}
// export default routes;