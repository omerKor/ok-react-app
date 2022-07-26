import { object, string, ref } from 'yup';

const Validations = object({
    email: string().email('Geçerli bir email girin').required('Zorunlu alan.'),
    password: string().required('Zorunlu alan.').min(8, 'Parolanız en az 8 karakterden oluşmalıdır.'),
    passwordConfirm: string().required('Zorunlu alan.').oneOf([ref('password')], 'Parolalar uyuşmuyor')
});

export default Validations;