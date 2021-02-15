/*
        //Progression 3
        // Functional component
        const Container = () =>{
            return React.createElement(`div`,null,`Hey ProGrads! Welcome to React Learning`, React.createElement(`div`,null,`Let's rock and roll`) );
        }
        // Render the Container
        const container = document.getElementById('react-container');
        ReactDOM.render(React.createElement(Container),container);

*/

/*
        //Progression 4
        // class component
        class ReactContainer extends React.Component{
            constructor(){
                super();
            }

            render(){
                return ( React.createElement(`div`,null,`Hey ProGrads! Welcome to React Learning`,React.createElement(`div`,null,`Let's rock and roll`)) );
            }



        }

        const container = document.getElementById('react-container');
        ReactDOM.render(React.createElement(ReactContainer),container);
*/

//Progression 5
//Class component with Babel configuration
        class ReactContainer extends React.Component {
            // JSX tags
            constructor(){
                super();
            }
            render() {
            return (
                <div>
                    <div>Hey ProGrads! Welcome to React Learning</div>
                    <div>Let's rock and roll </div>
                </div>
            );
            }
        }
        
        const container = document.getElementById('react-container');
        ReactDOM.render(<ReactContainer />, container);
        