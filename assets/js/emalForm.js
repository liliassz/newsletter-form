class EmailForm {
  constructor() {
    this.emailInput = document.getElementById("emailInput") // Campo de e-mail
    this.errorMsg = document.getElementById("errorMsg") // Mensagem de erro
    this.submitButton = document.getElementById("submitButton") // Botão de envio

    this.emailInput.addEventListener("input", this.validateEmail.bind(this))
    this.submitButton.addEventListener("click", this.submitForm.bind(this))
  }

  validateEmail() {
    const email = this.emailInput.value

    // Expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email === "") {
      // Se o campo de e-mail estiver vazio, exibe uma mensagem de erro
      this.errorMsg.textContent = "please, fill in the email field."
      this.submitButton.classList.remove("active")
    } else if (!emailRegex.test(email)) {
      // Se o formato do e-mail for inválido, exibe uma mensagem de erro
      this.errorMsg.textContent = "valid email required"
      this.submitButton.classList.remove("active")
    } else {
      // Caso contrário, o e-mail é válido
      this.errorMsg.textContent = ""
      this.submitButton.classList.add("active")
      this.submitForm()
    }
  }

  submitForm(event) {
    event.preventDefault() // Evita o comportamento padrão do botão

    const email = this.emailInput.value.trim()

    if (email !== "") {
      // Salva o email no localStorage
      localStorage.setItem("email", email)

      // Redireciona para a página de sucesso
      window.location.href = "success.html"
    }
  }
}

const emailForm = new EmailForm()
