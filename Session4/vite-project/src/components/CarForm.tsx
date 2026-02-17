function CarForm() {
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(event)
    }

    const isLoading = false;
    return <div>
    Car Form

    <form onSubmit = {handleSubmit}>
        <input type="text" name="carModel"></input>
        <input type="textarea" >
        </form>
    </div>
}

export default CarForm