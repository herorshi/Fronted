export default {
    categories:[
        {
            id:1,
            title:'Languages'
        },
        {
            id:2,
            title:'DevOps'
        },
        {
            id:3,
            title:'Editors'
        }
    ],
    articles:[
        {
            id: 1 ,
            title:"Introduction to javascript",
            content: "Lorem Ipsum",
            authorId: 1,
            categoryId:1
        },
        {
            id: 2,
            title: 'Introduction to Python',
            content: 'Lorem Ipsum',
            authorId: 1,
            categoryId:1
        },
        {
            id: 3,
            title: 'Introduction to Elixir',
            content: ' Lorem iPsum',
            authorId: 2,
            categoryId:2
        },
        {
            id: 4,
            title: 'Introduction to Ruby',
            content: 'Lorem Ipsum',
            authorId: 3,
            categoryId:1
        }
    ],
    users:[
        {
            id: 1,
            email :'babelcoder@gmail.com',
            isAdmin: true,
            password: '123456789'
        },
        {
            id: 2,
            email: 'somchai@gmail.com',
            isAdmin:false,
            password:'9876543210'
        }
    ]
}