import React from 'react'
import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log(e)
        console.log(name)
        console.log(email)
        console.log(bio)
        console.log(role)
        e.preventDefault()

        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

    return (
        <div>
            {/* criando o form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite o seu nome."
                        value={name}
                        onChange={handleName} />
                </div>
                {/* label envolvendo input */}
                {/* function inline no onChange */}
                <label>
                    <span>E-mail</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite o seu e-mail."
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }} />
                </label>
                {/* tag textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea
                        name="bio"
                        placeholder="Descrição do usuário."
                        value={bio}
                        onChange={(e) => { setBio(e.target.value) }}>
                    </textarea>
                </label>
                {/* tag select */}
                <label>
                    <span>User Role</span>
                    <select
                        name="role"
                        value={role}
                        onChange={(e) => { setRole(e.target.value) }}>
                        <option value="">Selecione...</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                        <option value="Guest">Guest</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
                <hr />
                <p>Name: {name}</p>
                <p>E-mail: {email}</p>
                <p>Bio: {bio}</p>
                <p>Role: {role}</p>
            </form>
        </div>
    )
}

export default MyForm