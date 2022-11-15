import React from "react";

const withUserState = WrappedComponent => {
    class WithUserState extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                id: "",
                name: "",
                password: "",
                email: "",
                phone: ""
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
            this.loadData = this.loadData.bind(this);
            this.handleChangeAddress = this.handleChangeAddress.bind(this);
        }

        handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            });
        }

        handleSubmit(e) {
            e.preventDefault();
            console.log("The form was submitted with the following data:");
            console.log(this.state);
            axios.post('http://localhost:8080/signup', this.state)
                .then(response => {
                    alert("Registered!!!  Proceed to login now :)");
                    console.log(response)
                })
                .catch(error => {
                    alert("Incorrect Details");
                    console.log(error)
                })
        }

        handleSubmitLogin(e) {
            e.preventDefault();

            console.log("The form was submitted with the following data:");
            console.log(this.state);
            axios.post('http://localhost:8080/login', this.state)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    alert("Incorrect Credentials");
                    console.log(error)
                })
        }

        handleChangeAddress(event) {
            this.setState({ address: { ...this.state.address, [event.target.name]: event.target.value } });
        }

        loadData(e) {
            axios.get('http://localhost:8080/getprofile/1')
                .then(response => {
                    this.setState(response.data)
                    console.log(response)
                })
                .catch(error => {
                    alert("Error occured");
                    console.log(error)
                })
        }

        render() {
            return (
                <WrappedComponent 
                
                />
            )
        }
    }

}