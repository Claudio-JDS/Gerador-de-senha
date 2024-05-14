import { useState } from "react"

function App() {
  //state para gerar a senha
  const [password, setPassword] = useState("")
  //state para copiar a senha
  const [copyText, setCopyText] = useState("Copiar")

  //Gerador de senha
	function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length)
      //pegando um caracter em uma posiçao aleatoria
      newPassword += characters[position]
    }
    setPassword(newPassword)
    //Voltando o nome para copiar apos clicar em gerar
    setCopyText("Copiar")
  }

  //copiando o arquivo para aria de transferência
  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }


  return (
    <div>
      <h1>Gerador de senhas</h1>
			<button onClick={generate}>Gerar!</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}

export default App