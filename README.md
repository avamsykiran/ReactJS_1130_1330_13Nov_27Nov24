ReactJS
-------------------

    Topics To Be Covered
    --------------------
        1)Create cross-platform native applications with React
        2)Create and use stateful components
        3 Handle Data flow between client and server in the applications
        4 Demonstrate on bundle and build applications and depedencies effectively
        5)Use data querying language to handle complex,nested data dependencies
        6 Build a data driven react application      
        7)Apply React/GraphQL/Relay best practices

    Pre-Requites
    --------------------------
        HTML 5
        CSS 3
        JavaScript (ES 6)
        Bootstrap 5
        NodeJS 

    React JS Intro
    ---------------------------

        is a javascript based library to develop SPA's.

        SPA - Single Page Application 
            It is a web application that has only one page. The content of the page is tailored from time to time. 
            
            SPA bundle is downloaded onto the client and gets executed inside the client (Browser) unlike dynamic web application. 

            No new request from the client needs to be sent to the server for the sake of html content.

            For data operations SPA depends on REST-API.

    React Js Components
    ---------------------------

        A Component is a reusable unit of DOM, or a user defiend html element.

        1. Function Components      is any javascript function that returns html-dom.

                                    const MyWebTitle = () => <h3>CTS</h3>

                                    const MyFooter = function() {
                                        return (
                                            <footer>
                                                &copy; All Rights Reserved 2024.
                                            </footer>
                                        );
                                    }

                                    <MyWebTitle></MyWebTitle>
                                    <MyFooter></MyFooter>

        2. Class Components         is a javascript class inheriting React.Component

        3. High Order Components    is a javascript function that accewpts a component as a param and returns another component.

    JSX
    -------------------------------

        Javascript XML is a amolgumation of javascript and html together, to reduce a lot of boiler plate code for dom 
        manipulation in javascript.

        javascript

            userName = "Vamsy Kiran"
            para1 = document.createElement("p")
            para1.innerHTML = "Hello " + userName + "! "

        jsx

            userName = "Vamsy Kiran"
            para1 = <p> Hello {userName} </p>

        javascript

            friends = ["Usha",":Lakshmi","Suma","Latha"]
            olObj = document.createElement("ol")
            
            friends.forEach( f => {
                liObj = document.createElement("li")
                liObj.innerHTML = f
                olObj.append(liObj)
            })

        jsx

            friends = ["Usha",":Lakshmi","Suma","Latha"]
            olObj = (
                <ol>
                    {
                        friends.forEach( f => <li>{f}</li>)
                    }
                </ol>
            )

        JSX Rules

            1. It is case sensitive (so <H3></h3> is invalid)
            2. All html pre-available elements are to be lower in case
            3. All Components must be Initial Capitalized

                <header></header>       refers to an html header tag
                <Header></Header>       refers to a react component.

            4. 'class' attribute is not allowed, 'className' to be used instead.
            5. An object can refer to only one top-level element at a time.

                obj1 = <p> A Test </p> <p> Another Test </p>                is invalid
                obj1 = <div> <p> A Test </p> <p> Another Test </p> </div>   is valid
    
    First ReactJS APP
    -------------------------

        node --version
        
        npx create-react-app app-name

        or 

        npm i -g create-react-app
        create-react-app app-name

    props - Properties
    --------------------------

        props is a parameter accepted by function components or construcotr of a class component and it carries
        attributes passed by a parent component into the child component.

    Class Components
    --------------------------

        is a javascript class inheriting React.Component

            class MyPage extends React.Component {
                
            }

        Class Components are also known as stateful components, on the other hand function components are said to be stateless .

        'state' is a property inhereted into class components from React.Component. 'state' is used to hold the data
        related to the current component. 'state' is continuosly monitored by the react engine and any change to the state will
        invoke 'render()'.

        'render()' is a method inhereted from React.Component and is ment to return the DOM to be displayed by the component. Each time
        'render' is invoked, the contnet of the component can change.

            class MyPage extends React.Component {
             constructor(){
                this.state = {
                    greeting:"Hello "
                }
             }   

             render(){
                return (
                    <section>
                        <p> {this.state.greeting} Everybody </p>
                    </section>
                );
             }
            }

        'state' is immutable. This means that 'state' can not be modified but it can only be replaced. 
        'setState()' is a method offered by React.Component to replace the 'state'.
        'setState()' can accept partial state as well.

    Integrating Bootstrap
    -----------------------------------------

        npm i bootstrap

        index.js

            import 'bootstrap/dist/css/bootstrap.min.css';
            import 'bootstrap/dist/js/bootstrap.bundle';

    Class Component Lifecycle Methods
    ------------------------------------------

        constructor()                           is used to initialize the state
            ↓
            render()                            returns the dom
                ↓
                componentDidMount()             is used to execute any task after the first render
                        ↓
                        /**************************************************/
                      |--→  the component will be idle...
                      |     until setState() is called
                      | /**************************************************/
                      |             ↓
                      |             render()                        returns the dom
                      |                 ↓
                      |                 componentDidUpdate()        is used to execute any task after every rendering..!
                      |                     ↓
                      ----------------------|
            
    ReactJS Hooks
    ------------------------------------------
        
        'hook' to a feature
        
        Hook is a function that addes featiures to a functional component. These hooks make
        functional components equivalent to class components almost eliminating the need for
        class components furthur.
        
        useState()      provides state to a functional component

                        let [getter,setter] = useState(initialValue)

                        let [x,setX] = useState(0);

        useEffect()     provides life cycle methods to a functional component

                        useEffect( callBack ,  array )

                        the 'array' can be undefiend
                                
                                useEffect(callBack)     

                                the callBack is executed after every rendering.

                        the 'array' can be empty

                                useEffect(callBack, [])     

                                the callBack is executed only once after first rendering.

                        the 'array' is not empty

                                useEffect(callBack, [x])     

                                the callBack is executed after any rendering,
                                     only when the given field/fields are modified
                                    

    Creating Fake Rest Api with Json-Server
    ------------------------------------------------

        json-server to create a fake rest api. json-server is a nodejs library that
        takes a .json file containing data and creates a fake rest-api.

        md adb-api
        cd adb-api
        npm init -y
        npm i json-server@0.17.4

        in 'package.json', we create a start script 'start':'json-server --watch data.json --port 9999'

        create adb-api/data.json, with hypothetical data.

        npm start

    Integrating Rest API using AXIOS
    -----------------------------------------------

        npm i axios

        axios.get(url)              returns a Promise
        axios.post(url,reqBody)     returns a Promise
        axios.put(url,reqBody)      returns a Promise
        axios.delete(url)           returns a Promise

            let p = axios.get(url);

            p.then( resp => { /*extract results from resposne */} ).catch( err => { /*handle the error*/ } )


    Creating Fake GraphQL Api with Json-GraphQl-Server
    ----------------------------------------------------

        md adb-api2
        cd adb-api2
        npm init -y
        npm i json-graphql-server

        in 'package.json', we create a start script 'start':'json-graphql-server data.json --port 9999'

        create adb-api2/data.json, with hypothetical data.

        npm start

    GraphQL 
    ---------------------------------------------------

        Assuming Employee is a resource...1

        Extracting Data
            query {
                allEmplpoyees {
                    id,
                    fullName,
                    mailId
                }
            }

            query {
                Emplpoyee(id:101) {
                    id,
                    fullName,
                    salary
                }
            }

        Adding or Updating or Deleting
            mutation {
                createEmployee()
            }
            
            mutation {
                createManyEmployees()
            }

            mutation {
                updateEmployee()
            }

            mutation {
                deleteEmployee()
            }

    Integrating GraphQl API using Apollo-Client
    -----------------------------------------------

        npm i @apollo/client graphql

        apollo-client

            ApolloClientProvider
            ApolloClient

            gql('string')   adn returns DocuemntNode (is a graphql understandable qry)

            useQuery(DocumentNode)
            useMutation(DocumentNode)

   