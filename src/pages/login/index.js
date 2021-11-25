import { loginTemplate } from "./login-template"
import "./login.css"
import { prepareTemplate } from "../../modules/prepare-template"

const data = {
    message: "Hello, world!"
}

prepareTemplate(loginTemplate, data)
