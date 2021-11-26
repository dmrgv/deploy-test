export const loginTemplate = `<div class='login-wrapper'>
  <div class='login-block'>
    <h2>Вход</h2>
    <div class='inputs-block'>
      {{#each inputs}}
        <span>{{this.name}}</span>
        <input name='{{this.inputName}}' type='{{this.type}}' />
      {{/each}}
    </div>
    <div class='buttons-block'>
      <button id='login-sign-in'>Войти</button>
      <button id='login-sign-up'>Зарегистрироваться</button>
    </div>
  </div>
</div>`
