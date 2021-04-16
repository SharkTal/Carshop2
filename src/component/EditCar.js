import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
const EditCar = (props) =>{
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand:'',
        model:'',
        color:'',
        fuel:'',
        year:'',
        price:''
        })
const inputChanged = (e) =>{
    setCar({...car, [e.target.name] :e.target.value});
}
    const handleClickOpen = () => {
        //console.log(props.car);
        setCar({
            brand:props.car.brand,
            model: props.car.model,
            color: props.car.color,
            fuel: props.car.fuel,
            year: props.car.year,
            price: props.car.price,
        })
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSave =()=>{
        if(car.price >= 0 & car.year >= 0){
            props.editCar(props.link, car);
            setOpen(false);
        }
        else
        alert('Please check your price and year !')
    }

    return (
        <div>
            <IconButton color="primary" onClick={handleClickOpen}>
                <EditIcon />
      </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              
                <DialogContent>
                        <TextField
                        margin="dense"                     
                        label="Brand"
                        value={car.brand}
                        name="brand"
                        onChange={inputChanged}                      
                        fullWidth
                    />
                            <TextField
                        margin="dense"
                        label="Model"
                        value={car.model}
                        name="model"
                        onChange={inputChanged}
                        fullWidth
                    />
                            <TextField
                        margin="dense"
                        label="Color"
                        value={car.color}
                        name="color"
                        onChange={inputChanged}
                        fullWidth
                    />
                            <TextField
                        margin="dense"
                        label="Fuel"
                        value={car.fuel}
                        name="fuel"
                        onChange={inputChanged}
                        fullWidth
                    />
                            <TextField
                        margin="dense"
                        label="Year"
                        value={car.year}
                        name="year"
                        onChange={inputChanged}
                        fullWidth
                    />
                            <TextField
                        margin="dense"
                        label="Price"
                        value={car.price}
                        name="price"
                        onChange={inputChanged}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );


}

export default EditCar;