const { default: styled } = require("styled-components")

export const Container = styled.div`

width:100%;
max-width:1120px;
height:100vh;
margin: 0 auto;

display:flex;
align-items:center;
justify-content:space-between;

section.form{
    width:100%;
    max-width:350px
}

form {
    margin-top:100px;
    margin-right:32px 
}
form h1{
        font-size:32px;
        margin-bottom:32px;
        }


h1{
    font-family:Roboto, sans-serif
    }
`
