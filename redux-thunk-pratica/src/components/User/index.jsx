import { Button, TextField } from "@material-ui/core"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addComentThunk } from "../../store/modules/user/thunk"
import './style.css'
const User = () => {
    const dispatch = useDispatch()
    const [ inptValue, setInptValue ] = useState('')
    const user = useSelector((state)=> state.user)
    const handleClick = () =>{
        dispatch(addComentThunk(inptValue))
        setInptValue("")
    }
    return(
        <div className='container'>
            <div className='userImg'>
                Name: {user.name}
            </div>
            <div className='comments-container'>
                {user.comments.map(( comment,index )=>(
                    <p key={index}>{comment}</p>
                ))}    
            </div>
            <div className='action-container'>
            <TextField
              id='outlined-basic'
              label='Digite um comentário'
              value={inptValue}
              variant='outlined'
              onChange= {(e)=> setInptValue(e.target.value)}
            />
            <Button variant='contained'color='primary'onClick={ handleClick }>Adicionar</Button>
            </div>
        </div>
    )
}
export default User