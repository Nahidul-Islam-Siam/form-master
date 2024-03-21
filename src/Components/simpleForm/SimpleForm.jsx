

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log('form submit');
    }
    return (
        <div>
         
        </div>
    );
};

export default SimpleForm;