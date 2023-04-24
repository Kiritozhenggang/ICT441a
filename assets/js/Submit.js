function myFunction() { 
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');
const Questions = document.getElementById('Questions');

form.addEventListener('submit', e => {
	e.preventDefault();
	validateForm();
});

// 表单验证
function validateForm() {
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
	const genderValue = gender.value.trim();
	const QuestionsValue = Questions.value.trim();
	
	// 验证用户名
	if(nameValue  !== null && input.trim()!=="" && test(input)) {
		printError(name, '请输入用户名');
	} else {
		removeError(name);
	}
	
	// 验证邮箱
	if(emailValue === '') {
		printError(email, '请输入邮箱');
	} else if (!validateEmail(emailValue)) {
		printError(email, '邮箱格式有误');
	} else {
		removeError(email);
	}
    
	if (phoneValue !== "") {
		printError(phone, 'please enter the number');
	} else {
		removeError(phone);
	}
	
	// 验证密码
	if(genderValue ===""){
		printError(gender, '请输入密码');
	} else {
		removeError(gender);
	}
	
	// 验证确认密码
	if(QuestionsValue ===""|| length >= 150 ) {
		printError(Questions, '请确认密码');
	} else{
		removeError(Questions);
	}
}

// 打印错误提示
function printError(input, message) {
	const formControl = input.parentElement;
	const errorMessage = formControl.querySelector('.error-message');
	formControl.classList.add('error');
	errorMessage.textContent = message;
}

// 删除错误提示（用户输入正确信息）
function removeError(input) {
	const formControl = input.parentElement;
	formControl.classList.remove('error');
}

// 验证邮箱格式
function validateEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
}