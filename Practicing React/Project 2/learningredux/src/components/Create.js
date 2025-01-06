import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addUser } from '../features/userDetails';

const Create = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState({});

    const getUserData = (e) => {
        setUsers({ ...users , [e.target.name] : e.target.value })
        console.log(users);
    }

    const handleSubmit () => {
        dispatch()
    }
    

    return (
        <div>
          <h2 className="w-50 mx-auto my-5">Fill the data</h2>
          <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input type="text" name="name" class="form-control" required onChange={getUserData} />
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" name="email" class="form-control" required onChange={getUserData}/>
            </div>
            <div class="mb-3">
              <label class="form-label">Age</label>
              <input type="text" name="age" class="form-control"  required onChange={getUserData}/>
            </div>
            <div class="mb-3">
              <input class="form-check-input" name="gender" value="Male" type="radio" required onChange={getUserData}/>
              <label class="form-check-label">Male</label>
              <input class="form-check-input" name="gender" value="Female" type="radio" onChange={getUserData}/>
              <label class="form-check-label">Female</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
    );      
};

export default Create;
