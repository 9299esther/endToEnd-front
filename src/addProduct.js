import React from 'react'
class addProduct extends React.Component {
    state = {
        values: { date: new Date() },
        error: ''
    }

    handleSubmit = e => {
        // alert(JSON.stringify(this.state.values))
        e.preventDefault()

        this.setState({ error: '' })

        fetch(`http://localhost:1234/product`, {
            method: 'POST',
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
            <label><b>Add A Product:</b></label><br /><br />
            <section>
                <label>Barcode:</label><br />
                <input type='number' placeholder='Barcode' name='barcode' required />
            </section>
            <section>
                <label>Name:</label><br />
                <input type='text' placeholder='Name' name='name' required />
            </section>
            <section>
                <label>Description:</label><br />
                <input type='text' name='description' placeholder='Description' required />
            </section>
            <section>
                <label>Price:</label><br />
                <input type='number' name='price' placeholder='price' required />
            </section>
            <section>
                <label>Image:</label><br />
                <input type='text' placeholder='image link' name='image' required />
            </section>
            <section>
                <label>Brand:</label><br />
                <input type='radio' name='brand' value='j' required />a<br />
                <input type='radio' name='brand' value='j'/>b<br />
                <input type='radio' name='brand' value='j'/>c<br />
            </section>
            <section>
                <label>Department:</label><br />
                <input type='radio' name='department' value='j' required />d<br />
                <input type='radio' name='department' value='j'/>e <br />
            </section>
            <section>
                <label>Category:</label><br />
                <input type='radio' name='category' value='j' required />f<br />
                <input type='radio' name='category' value='j'/>v <br />
            </section>
            <section>
                <label>Tags:</label><br />
                <input type='radio' name='tags' value='j' required />g<br />
                <input type='radio' name='tags' value='j'/>j <br />
            </section>


            <input type='submit' value="Add Product" />


        </form>
    }
}
export default addProduct