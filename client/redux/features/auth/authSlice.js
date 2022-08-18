import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
    error: null
}

export const registerUser = createAsyncThunk(
    'auth/registerUser', 
    async ({email, password, name}) => {
        try {
            const {data} = await axios.post('/auth/register', {
                email, 
                password,
                name
            })
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async({email, password}) => {
        try {
            const {data} = await axios.post('/auth/login', {
                email,
                password
            })
            if(data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }
) 
export const getMe = createAsyncThunk(
    'auth/getMe',
    async() => {
        try {
            const {data} = await axios.get('/auth/me')
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
) 

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
            state.error = null
        }
    },
    extraReducers: {
        // register
        [registerUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
            state.error = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false
            if(action.payload.type === 'error') {
                state.error = action.payload.message
            } else {
                state.status = action.payload.message
            }
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [registerUser.rejected]: (state, action) => {
            if(action.payload.type === 'error') {
                state.error = action.payload.message
            } else {
                state.status = action.payload.message
            }
            state.isLoading = false
        },
        // login
        [loginUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
            state.error = null
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            if(action.payload.type === 'error') {
                state.error = action.payload.message
            } else {
                state.status = action.payload.message
            }
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [loginUser.rejected]: (state, action) => {
            if(action.payload.type === 'error') {
                state.error = action.payload.message
            } else {
                state.status = action.payload.message
            }
            state.isLoading = false
        },
        // check authorization
        [getMe.pending]: (state) => {
            state.isLoading = true
            state.status = null
            state.error = null
        },
        [getMe.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.user = action.payload?.user
            state.token = action.payload?.token
            if(action.payload.type === 'error') {
                state.error = action.payload.message
            } else {
                state.status = action.payload.message
            }
        },
        [getMe.rejected]: (state) => {
            if(action.payload.type === 'error') {
                state.error = action.payload.message
            } else {
                state.status = action.payload.message
            }
            state.isLoading = false
        }
        
    }
})

export const checkIsAuth = state =>  {
    return Boolean(state.auth.token)
}

export const {logout} = authSlice.actions

export default authSlice.reducer