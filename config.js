const config = {
    name: 'Hello World App',
    version: '1.0.0',
    title: 'Hello World',
    routes: {
        '/': {
            id: 'home',
            title: 'Home',
            exact: true,
            components: {
                home: {
                    id: 'home',
                    props: {},
                },
            },
        },
        '/about': {
            id: 'about',
            title: 'About',
            components: {
                about: {
                    id: 'about',
                    props: {},
                },
            },
        },
        /*The default route when no match is found*/
        default: {
            id: '404',
            name: 'Not found',
            title: 'Not found',
            components: {},
        },
    },
    globals: {
        navbar: {
            id: 'navbar',
            position: 'top',
            props: {
                title: 'React Jab Native',
            },
        },
        footer: {
            id: 'footer',
            position: 'bottom',
            props: {
                tabs: [
                    {
                        title: 'Home',
                        transition: 'goHome',
                    },
                    {
                        title: 'About',
                        transition: 'goAbout',
                    },
                ],
            },
        },
    },
    transitions: {
        goHome: {
            from: null,
            to: 'home',
        },
        goAbout: {
            from: null,
            to: 'about',
        },
    },
}

export default config
