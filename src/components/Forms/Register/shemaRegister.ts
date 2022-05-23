import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().min(3, 'Nome deve ter no mínimo 3 caracteres').required("Por favor, insira seu nome!"),
    password: Yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required("Por favor, insira a senha!")
});