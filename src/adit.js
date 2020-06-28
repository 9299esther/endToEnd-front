import React from 'react'
class adit extends React.Component {
    state = {
        values: { },
        error: ''
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({ error: '' })

        fetch(`http://localhost:1234/product`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.values)
        }).then(r => r.json())
            .then(res => {
                if (res.error) {
                    console.log(res.error);
                    this.setState({ error: res.error.message || res.error })
                } 
                else {
                    this.props.history.push('/')
                }
            })
            .catch(err => {
                this.setState({ error: err.message || err })
            })

    }
    handlChange = e => {
        const { name, value } = e.target
        this.setState({
            values: {
                ...this.state.values,
                [name]: value
            }
        })
    }
    render() {

        return <form onSubmit={this.handleSubmit} onChange={this.handlChange}>
            <label><b>Adit Product Price:</b></label><br /><br />
            <section>
                <label>Barcode:</label><br />
                <input type='number' placeholder='Barcode' name='barcode' required />
            </section>
           
            <section>
                <label>Price:</label><br />
                <input type='number' name='price' placeholder='Price' required />
            </section>
           <br/>
            <input type='submit' value="Update Product" />


        </form>
    }
}
export default adit