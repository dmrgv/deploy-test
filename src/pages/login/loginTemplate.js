export const loginTemplate = `<div class='_login__login-wrapper'>
  <div class='_login__login-block'>
    <h2>Вход</h2>
    <div class='_login__inputs-block'>
      {{#each inputs}}
        <span>{{this.name}}</span>
        <input name='{{this.inputName}}' type='{{this.type}}' />
      {{/each}}
    </div>
    <div class='_login__buttons-block'>
      <button id='login-sign-in'>Войти</button>
      <button id='login-sign-up'>Зарегистрироваться</button>
    </div>
  </div>
</div>`
