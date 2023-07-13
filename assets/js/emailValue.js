class EmailValue {
  constructor() {
    this.emailValue = document.getElementById("emailValue") // Elemento para exibir o email
    this.submitButton = document.getElementById("submitButton") // Botão de envio

    // Exibe o email armazenado no elemento HTML
    this.emailValue.textContent = localStorage.getItem("email")

    this.submitButton.addEventListener("click", this.volta.bind(this))
  }

  volta(event) {
    event.preventDefault()

    // Remove o email do localStorage
    localStorage.removeItem("email")

    // Redireciona para a página "index.html"
    window.location.href = "index.html"
  }
}

const emailValue = new EmailValue()
