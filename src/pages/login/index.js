import { loginTemplate } from "./login-template"
import "./login.scss"
import { prepareTemplate } from "../../modules/prepare-template"

const data = {
    message: "Hello, world!"
}

prepareTemplate(loginTemplate, data)
