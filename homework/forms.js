FINAL SCRIPT!!!!!!!!!!!!!!!!!
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title></title>

<!--

Задание.

Используя jQuery реализуйте генерацию списка библиографии после статьи. Результат должен быть как на снимке "результат".

Снимок рядом с этим файлом

-->

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/…/…/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<script src="https://ajax.googleapis.com/…/li…/jquery/3.4.1/jquery.min.js"></script>

<script>

$(function() {

let MODE = 'CREATE'; // EDIT

let UserArray = [

{

id: 1,

firstName: 'Ivan',

lastName: 'Ivanov',

age: 22,

role: 'admin'

},

{

id: 2,

firstName: 'Petr',

lastName: 'Petrov',

age: 42,

role: 'employee'

},

{

id: 3,

firstName: 'Stepan',

lastName: 'Stepanov',

age: 32,

role: 'client'

},

];

$('button:contains("Get Data")').on('click', function () {

renderTable(UserArray);

});

function renderTable(data) {

$('tbody').empty();

data.forEach(function(user) {

$('tbody').append('<tr><td>'+ user.id +'</td><td>'+ user.firstName +'</td><td>'+ user.lastName +'</td><td>'+ user.age +'</td><td><button class="btn btn-danger" data-id="'+ user.id +'">remove</button><button class="btn btn-warning" data-id="'+ user.id +'">edit</button></td></tr>');

$('tbody').find('button[data-id="'+user.id+'"]:contains("remove")').on('click', function () {

let that = this;

UserArray = UserArray.filter(function (user) {

return user.id != $(that).data().id;

});

renderTable(UserArray);

});

$('tbody').find('button[data-id="'+user.id+'"]:contains("edit")').on('click', function () {

MODE = 'EDIT';

let userId = user.id;

const currentUser = UserArray.find(function(user) {

return userId == user.id;

});

console.log(currentUser);

$('form').attr('data-id', currentUser.id);

$('#firstName').val(currentUser.firstName);

$('#lastName').val(currentUser.lastName);

$('#age').val(currentUser.age);

$('#role').val(currentUser.role);

});

})

}

function validate(input) {

return input.val() !== '';

}

function showError(input) {

input.after('<div class="alert alert-danger">required</div>')

}

$('form').submit(function (e) {

e.preventDefault();

$(this).find('.alert').remove();

const firstName = $('#firstName');

const lastName = $('#lastName');

const age = $('#age');

const role = $('#role');

let hasError = false;

if (!validate(firstName)) {

showError(firstName);

hasError = true;

}

if (!validate(lastName)) {

showError(lastName);

hasError = true;

}

if (!validate(age)) {

showError(age);

hasError = true;

}

if (!validate(role)) {

showError(role);

hasError = true;

}

if (hasError) {

return;

}

if (MODE == 'CREATE') {

UserArray.push({

id: UserArray.length + 1,

firstName: $(this).find('#firstName').val(),

lastName: $(this).find('#lastName').val(),

age: $(this).find('#age').val(),

role: $(this).find('#role').val()

});

} else if (MODE == 'EDIT') {

const userId = $('form').data().id;

const userIndex = UserArray.findIndex(function(user) {

return userId == user.id;

});

UserArray[userIndex] = {

id: userId,

firstName: $(this).find('#firstName').val(),

lastName: $(this).find('#lastName').val(),

age: $(this).find('#age').val(),

role: $(this).find('#role').val()

}

}

renderTable(UserArray);

this.reset();

MODE = 'CREATE';

});

// $('form').submit(function (e) {

// e.preventDefault();

// var body = {};

//

// body.name = $(this).find('[name="name"]').val();

// body.age = $(this).find('[name="age"]').val();

// body.password = $(this).find('[name="password"]').val();

//

// if (!body.name) {

// $(this).find('[name="name"]').after('<span style="color: red">required field</span>')

// }

//

// console.log(body);

// });

//

// $('input[name]').focus(clear);

//

// function clear() {

// $('span').remove();

// }

//

// const user = {

// name: 'Petro',

// age: 34,

// password: '123456'

// };

//

// $('input[value="fill"]').click(function () {

// $('input[name="name"]').val(user.name);

// $('input[name="age"]').val(user.age);

// $('input[name="password"]').val(user.password);

// });

});

</script>

<style>

</style>

</head>

<body>

<div class="container-fluid">

<div class="row">

<div class="col-8">

<table class="table table-striped">

<thead>

<tr>

<th scope="col">#</th>

<th scope="col">Имя</th>

<th scope="col">Фамилия</th>

<th scope="col">Возраст</th>

<th>&nbsp</th>

</tr>

</thead>

<tbody>

</tbody>

</table>

<button class="btn btn-primary">Get Data</button>

</div>

<div class="col-4">

<form>

<div class="form-group">

<label for="firstName">First Name</label>

<input type="text" name="firstName" class="form-control" id="firstName" placeholder="Enter your name">

</div>

<div class="form-group">

<label for="lastName">Last Name</label>

<input type="text" name="lastName" class="form-control" id="lastName" placeholder="Enter your last name">

</div>

<div class="form-group">

<label for="age">Age</label>

<input type="number" name="age" class="form-control" id="age" placeholder="Enter your age">

</div>

<div class="form-group">

<label for="role">Role</label>

<input type="text" name="role" class="form-control" id="role" placeholder="Enter your role">

</div>

<button type="submit" class="btn btn-primary">Submit</button>

<button type="reset" class="btn btn-secondary">Reset</button>

</form>

</div>

</div>

</div>

<!--<form>-->

<!-- <div>-->

<!-- <input type="text" name="name">Name-->

<!-- </div>-->

<!-- <div>-->

<!-- <input type="number" name="age">Age-->

<!-- </div>-->

<!-- <div>-->

<!-- <input type="password" name="password">Password-->

<!-- </div>-->

<!-- <input type="button" value="fill">-->

<!-- <input type="submit" value="send">-->

<!--</form>-->

</body>

</html>
