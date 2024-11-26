const loginForm = document.getElementById('login-form')
const loginUsername = document.getElementById('username')
const loginPassword = document.getElementById('password')
const divUsername = document.querySelector('.username')
const divPassword = document.querySelector('.password')
const usernameErrorMsg = document.createElement('span')
const passwordErrorMsg = document.createElement('span')
const loginData = {
    username: '',
    password: ''
}
const validation = ({ username, password }) => {
    const errors = { username: '', password: '' }
    if (!username) errors.username = 'Please enter your username'
    if (!password) errors.password = 'Please enter your password'
    return errors
}
const onChangeHandler = (event) => {
    const { name, value } = event.target
    if (name === 'username') loginData.username = value
    else if (name === 'password') loginData.password = value
    usernameErrorMsg.textContent = ''
    passwordErrorMsg.textContent = ''
}
const onSubmitHandler = (event) => {
    event.preventDefault();
    const errors = validation(loginData)
    if (errors.username) {
        if (errors.username) usernameErrorMsg.textContent = errors.username
        divUsername.appendChild(usernameErrorMsg)
    }
    if (errors.password) {
        passwordErrorMsg.textContent = errors.password
        divPassword.appendChild(passwordErrorMsg)
    }
}
loginForm.addEventListener('submit', (event) => onSubmitHandler(event))
loginForm.addEventListener('change', (event) => onChangeHandler(event))
