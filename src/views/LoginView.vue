<script></script>

<template>
<div class="container z">
	<div class="d-flex justify-content-center h-100">
		<div class="user_card">
			<div class="d-flex justify-content-center">
				<div class="brand_logo_container">
					<img src="https://avatars.githubusercontent.com/u/106554495?v=4" class="brand_logo" alt="Logo">
				</div>
			</div>
			<div class="d-flex justify-content-center text-center form_container">
				<form>
					<h4>Login</h4>
					<div class="input-group mb-3">
						<div class="input-group-append">
							<span class="input-group-text"><img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" width="25px" alt=""></span>
						</div>
						<input type="text" name="" class="form-control input_user" value="" placeholder="Usuário">
					</div>
					<div class="input-group mb-2">
						<div class="input-group-append">
							<span class="input-group-text"><img src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" width="25px" alt=""></span>
						</div>
						<input type="password" name="" class="form-control input_pass" value="" placeholder="Senha">
					</div>
						<div class="d-flex justify-content-center mt-3 login_container">
			 	<button type="button" name="button" class="btn btn-primary">Login</button>
			   </div>
				</form>
			</div>
	
			<div class="mt-4">
				<div class="d-flex justify-content-center links">
					Não tem uma conta:<router-link to="/cadastro" class="ml-2">Cadastra-se</router-link>
				</div>
				<div class="d-flex justify-content-center links">
					<RouterLink to="/foof">Esqueceu a sua senha?</RouterLink>
				</div>
			</div>
		</div>
	</div>
</div>

</template>

<style scoped>

.container {
margin-top: 150px;
margin-bottom: 150px;
}

body, html {
margin: 0;
padding: 0;
height: 100%;
background: #ffffff !important;
}

.user_card {
height: 400px;
width: 350px;
margin-top: auto;
margin-bottom: auto;
background: #f7eccb;
position: relative;
display: flex;
justify-content: center;
flex-direction: column;
padding: 10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 5px;
}

.brand_logo_container {
position: absolute;
height: 170px;
width: 170px;
top: -75px;
border-radius: 50%;
background: #ffffff;
padding: 10px;
text-align: center;
}
.brand_logo {
height: 150px;
width: 150px;
border-radius: 50%;
border: 2px solid white;
}


.form_container {
margin-top: 100px;
}
.login_btn {
width: 100%;
background: #c0392b !important;
color: white !important;
}

.login_btn:focus {
box-shadow: none !important;
outline: 0px !important;
}

.login_container {
padding: 0 2rem;
}

.input-group-text {
background: #fcf5de !important;
color: white !important;
border: 0 !important;
border-radius: 0.25rem 0 0 0.25rem !important;
}

.input_user, .input_pass:focus {
box-shadow: none !important;
outline: 0px !important;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
background-color: #f7eccb !important;
}

</style>